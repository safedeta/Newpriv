const router = require('express').Router();
const { jsonResponse } = require("../lib/jsonResponse");

router.post('/', (req, res) => {
    const { username, password }= req.body;

    if (!username || !password){
        return res.status(400).json(jsonResponse(400, {
            error: "Field are requiered" 
        })
    );
    }

    //Autenticar usuario
    const accessToken = 'access_token';
    const refreshToken = 'refresh_token-muy-piola'; //**Esto no deberia ir con lo de variable de entorno?
    const user = {
        id: 1,
        name: 'Administrator',
        username: 'admin',
    }

    return res.status(200).json(jsonResponse(200, { user, accessToken, refreshToken }));
});
module.exports = router;