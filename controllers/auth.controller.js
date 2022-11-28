const register = async (req,res) => {
    res.json({
        message : "register"
    })
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