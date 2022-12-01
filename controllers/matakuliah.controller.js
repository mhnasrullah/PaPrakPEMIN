const { Matakuliah } = require('../models')


const get = async (req, res) => {
    const matakuliah = await Matakuliah.findAll({attributes: ['id', 'nama']})
    res.status(200).json({
        message: "get All matkul",
        matakuliah
    })
}

module.exports = {get}