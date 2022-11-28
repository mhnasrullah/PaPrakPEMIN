const get = async (req,res) => {
    res.json({
        message : "semua mahasiswa"
    })
}

const profile = async (req,res) => {
    res.json({
        message : "profile mahasiswa"
    })
}

const byNim = async (req,res) => {
    const {nim} = req.params
    res.json({
        message : `profile mahasiswa ${nim}`
    })
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