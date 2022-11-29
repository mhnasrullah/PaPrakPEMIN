const {Mahasiswa,Prodi} = require("../models")

const get = async (req,res) => {
    const attributes = ['nim','nama','angkatan']
    const data = await Mahasiswa.findAll({
        attributes,
        include : {
            model : Prodi,
            attributes : ['nama']
        }
    });

    if(data.length != 0){
        res.status(200).json({
            message : "semua mahasiswa",
            data
        })
    }else{
        res.status(404).json({
            message : "data mahasiswa tidak tersedia",
            data
        })
    }
}

const profile = async (req,res) => {
    res.json({
        message : "profile mahasiswa"
    })
}

const byNim = async (req,res) => {
    const {nim} = req.params;

    const data = await Mahasiswa.findByPk(nim);

    if(data === null){
        res.status(404).json({
            message : `Mahasiswa ${nim} not found`
        });
    }else{
        const {dataValues : {password, ...dataMahasiswa}} = data;
        res.status(200).json({
            message : `Mahasiswa ${nim} found`,
            data : dataMahasiswa
        });
    }
}

const addMk = async (req,res) => {
    const {nim,mkId} = req.params
    res.json({
        message : `add mk ${mkId} on mahasiswa ${nim}`
    })
}

const changeMk = async (req,res) => {
    const {nim,mkId} = req.params
    res.json({
        message : `change mk ${mkId} on mahasiswa ${nim}`
    })
}

module.exports = {
    get,
    profile,
    byNim,
    addMk,
    changeMk
}