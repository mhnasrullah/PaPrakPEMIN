const { Matakuliah } = require('../models')


const get = async (req, res) => {
    const matkul = await Matakuliah.findAll({attributes: ['id', 'nama']})
    res.status(200).json({
        message: "get All matkul",
        matkul
    })
}

module.exports = {get}