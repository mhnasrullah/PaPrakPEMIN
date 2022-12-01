const {Prodi} = require("../models")

const get = async (req,res) => {
    const prodi = await Prodi.findAll();
    res.status(200).json({
        message : "get all prodi",
        prodi
    })
}

const create = async (req,res) => {
    const {nama} = req.body;

    await Prodi.create({nama});

    res.json({
        message : "get All prodi"
    })
}

module.exports = {
    get,
    create
}