const jwt = require('jsonwebtoken');

const index = (req, res) => {
    return res.json({ msg: 'API REST NodeJS'})
}


const login = (req, res) => {
    const { email, password } = req.body;

    if(!email || !password) return res.json({ msg: 'email or password are required.'})

    if(email === 'admin@gmail.com' && password === 'admin'){
        const token = jwt.sign({ email: email }, process.env.SECRET_KEY, {
            expiresIn: 1440
        })
        //console.log(token);
        return res.json({ token: token })
    } else {
        return res.json({ msg: 'Usuario no valido'})
    }

}


const private = (req, res) => {
    console.log(req.decoded);
    return res.json({ msg: 'Ruta privada'})
}



module.exports = {
    index,
    login,
    private,
}