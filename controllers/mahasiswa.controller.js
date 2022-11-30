const {
    Mahasiswa,
    Prodi,
    Matakuliah,
    Mahasiswa_matakuliah
} = require("../models")

const get = async (req, res) => {
    const attributes = ['nim', 'nama', 'angkatan','prodi']
    const data = await Mahasiswa.findAll({
        attributes,
        include: [{model: Prodi, attributes:['nama']}, {model: Matakuliah, attributes:['nama'], exclude:['Mahasiswa_matakuliah']}],
    });

    if (data.length != 0) {
        res.status(200).json({
            message: "semua mahasiswa",
            data
        })
    } else {
        res.status(404).json({
            message: "data mahasiswa tidak tersedia",
            data
        })
    }
}

const profile = async (req, res) => {
    res.json({
        message: "profile mahasiswa"
    })
}

const byNim = async (req, res) => {
    const {
        nim
    } = req.params;

    const data = await Mahasiswa.findByPk(nim,{
        include : {
            model : Prodi,
            attributes : ['nama']
        }
    });

    if (data === null) {
        res.status(404).json({
            message: `Mahasiswa ${nim} not found`
        });
    } else {
        const {
            dataValues: {
                password,
                ...dataMahasiswa
            }
        } = data;
        res.status(200).json({
            message: `Mahasiswa ${nim} found`,
            data: dataMahasiswa
        });
    }
}

const addMk = async (req, res) => {
    const {
        nim,
        mkId
    } = req.params

    res.json({
        message: `add mk ${mkId} on mahasiswa ${nim}`
    })
}

const changeMk = async (req, res) => {
    const {
        nim,
        mkId
    } = req.params
    const data = await Mahasiswa_matakuliah.create({
        mahasiswaNim: nim,
        matakuliahId: mkId
    })
    res.json({
        message: `add mk ${mkId} on mahasiswa ${nim}`,
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