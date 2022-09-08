const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    
    //const token = req.headers['authorization'].split(' ')[1];
    const token = req.headers['access-token'];

    console.log(req);

    if(token){
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if(err){
                return res.json({ msg: 'token invalido'})
            } else {
                req.decoded = decoded
                next()
            }
        })
    } else {
        return res.json({ msg: 'Missing access token'});
    }
}

module.exports = auth;