const {Mahasiswa} = require("../models");
const bcrypt = require('bcryptjs');

const register = async (req,res) => {

    const {nim,nama,password,angkatan} = req.body;
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
    res.json({
        message : "login"
    })
}

module.exports = {
    register,
    login
}