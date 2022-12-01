const {
    Mahasiswa,
    Prodi,
    Matakuliah,
    Mahasiswa_matakuliah
} = require("../models")

const get = async (req, res) => {
    const attributes = ['nim', 'nama', 'angkatan']
    const mahasiswa = await Mahasiswa.findAll({
        attributes,
        include: [{
            model: Prodi,
            attributes: ['nama']
        }, {
            model: Matakuliah,
            attributes: ['nama', 'id']
        }],
        exclude: ['prodi']
    });

    if (mahasiswa.length != 0) {
        res.status(200).json({
            message: "semua mahasiswa",
            mahasiswa
        })
    } else {
        res.status(404).json({
            message: "data mahasiswa tidak tersedia",
            mahasiswa
        })
    }
}

const profile = async (req, res) => {
    // console.log(req.headers)
    const mahasiswa = await Mahasiswa.findByPk(req.decoded.nim)
    res.json({
       mahasiswa
    })
}

const byNim = async (req, res) => {
    const {
        nim
    } = req.params;

    const mahasiswa = await Mahasiswa.findByPk(nim, {
        include: [{
            model: Prodi,
            attributes: ['nama']
        }, {
            model: Matakuliah,
            attributes: ['nama', 'id']
        }]
    });

    if (mahasiswa === null) {
        res.status(404).json({
            message: `Mahasiswa ${nim} not found`
        });
    } else {
        const {
            dataValues: {
                password,
                ...dataMahasiswa
            }
        } = mahasiswa;
        res.status(200).json({
            message: `Mahasiswa ${nim} found`,
            mahasiswa: dataMahasiswa
        });
    }
}

const addMk = async (req, res) => {
    const {
        nim,
        mkId
    } = req.params

    const data = await Mahasiswa_matakuliah.create({
        mhsNim: nim,
        mkId: mkId
    })
    res.json({
        message: `add mk ${mkId} on mahasiswa ${nim}`,
        data
    })
}

const changeMk = async (req, res) => {
    const {
        nim,
        mkId
    } = req.params
    const data = await Mahasiswa_matakuliah.destroy({
        where: {
            mhsNim: nim,
             mkId: mkId
        } 
    })
    res.json({
        message: `Delete mk ${mkId} on mahasiswa ${nim}`,
        data
    })
}



module.exports = {
    get,
    profile,
    byNim,
    addMk,
    changeMk
}