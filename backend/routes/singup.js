const router = require('express').Router();
const { jsonResponse } = require("../lib/jsonResponse");
const User = require('../Schema/user');

router.post('/', async (req, res) => {
    const { username, name, password }= req.body;

    if (!username || !name || !password){
        return res.status(400).json(jsonResponse(400, {
            error: "Field are requiered" 
        })
    );
    }

    //crear usuario en la base de datos
    try {
        const user = new User();
        const exists = await user.usernameExist(username);

        if(exists){
            return res.status(400).json(jsonResponse(400, {
                error: "Username already exist", 
            })
            );

        }
        const newUser = new User({ username, name, password });
        await newUser.save();

        return res.status(200).json(jsonResponse(200, { message: "User created successfully" }));
    } catch (error) {
        res.status(500).json(jsonResponse(500, {
            error: "Internal server error",
        }));
    }

});

module.exports = router;