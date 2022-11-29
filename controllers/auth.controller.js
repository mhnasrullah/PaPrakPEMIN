const {Mahasiswa} = require("../models");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require("../config/jwt.config")
const tokenList = {}

const register = async (req,res) => {

    const {nim,nama,password,angkatan,prodi} = req.body;
    let error = [];

    // VALIDATION;
    if(nim){
        if(nim.length != 15){
            error = [
                ...error,
                "NIM not valid"
            ]
        }else{
            const notUnique = await Mahasiswa.findByPk(nim);
            if(notUnique !== null){
                error = [
                    ...error,
                    "NIM must be unique"
                ]
            }
        }
    }else{
        error = [
            ...error,
            "NIM is required"
        ]
    }

    if(!nama){
        error = [
            ...error,
            "Nama is required"
        ]
    }

    if(!prodi){
        error = [
            ...error,
            "Prodi is required"
        ]
    }

    if(!angkatan){
        error = [
            ...error,
            "Angkatan is required"
        ]
    }

    if(password){
        if(password.length < 8){
            error = [
                ...error,
                "Password minimum 8 character"
            ]
        }
    }else{
        error = [
            ...error,
            "Password is required"
        ]
    }

    if(error.length == 0) {
        try{
            const enc = await bcrypt.hash(password,10);
            await Mahasiswa.create({
                ...req.body,
                password : enc
            })

            const {password : pass, ...data} = req.body;

            res.status(200).json({
                message : "registrasi success",
                data : {...data}
            })
        }catch(e){
            console.log(e)
        }
        
    }else{
        res.status(404).json({
            message : "registrasi failed",
            error : error
        })
    }

}

const login = async (req,res) => {
    const {nim,password} = req.body;
    let error = [];
    let user = null;

    // VALIDATION;
    if(nim){
        if(nim.length != 15){
            error = [
                ...error,
                "NIM not valid"
            ]
        }else{
            user = await Mahasiswa.findByPk(nim);
            if(user === null){
                error = [
                    ...error,
                    "Mahasiswa not found"
                ]
            }
        }
    }else{
        error = [
            ...error,
            "NIM is required"
        ]
    }

    if(password){
        if(password.length < 8){
            error = [
                ...error,
                "Password minimum 8 character"
            ]
        }
    }else{
        error = [
            ...error,
            "Password is required"
        ]
    }

    // AUTH
    if(error.length == 0){
        const{dataValues : {password : hashedPassword}} = user;
        const result = await bcrypt.compare(password,hashedPassword);
        
        if(!result){
            error = ["NIM or Password is wrong"]
        }
    }


    if(error.length === 0){
        const token = jwt.sign(req.body, config.secret, { expiresIn: config.tokenLife})
        const refreshToken = jwt.sign(req.body, config.refreshTokenSecret, { expiresIn: config.refreshTokenLife})
        const response = {
            "status": "Logged in",
            "token": token,
            "refreshToken": refreshToken,
        }
        
        tokenList[refreshToken] = response
        res.json({
            message : response
        })
    }else{
        res.status(404).json({
            message : "logged in failed",
            error : error
        })
    }

}

const freshToken = async (req,res) => {
    const {refreshToken, ...data} = req.body
    console.log(tokenList,"token list")
    if((refreshToken) && (refreshToken in tokenList)) {
        const token = jwt.sign({...data}, config.secret, { expiresIn: config.tokenLife})
        const response = {
            "token": token,
        }
        // update the token in the list
        tokenList[refreshToken].token = token
        res.status(200).json(response);        
    } else {
        res.status(404).send('Invalid request')
    }
}

module.exports = {
    register,
    login,
    freshToken
}