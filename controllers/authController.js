const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const {validation} = require('../middleware/validation');
const jwt = require('jsonwebtoken');
const  dotenv = require('dotenv')
dotenv.config()


const login = async (req, res) => {
    try {
        const username = req.body.username
        const password = req.body.password
        const getData = await userModel.findOne({
            where : {username: username}
        })

        if(!getData) res.status(400).send("Username tidak terdaftar");
        const resultLogin = bcrypt.compareSync(password, getData.password);

        if(!resultLogin) res.status(400).send("Username/Password salah!");

        // Token
        const token = jwt.sign({username: getData.username}, process.env.TOKEN_RAHASIA);
        res.header('auth-token', token).json('Berhasil Login!');
        
      
    } catch (error) {
        res.status(400).send("Error Bosq!");
    }
}

const register = async (req, res) => {
    try {
        const username = req.body.username
        const password = req.body.password
        const email = req.body.email

        // validation form
        const {error} = validation(req.body);
        console.log(error);
        if(error) return res.status(400).send(error.details[0].message);
        // jika sudah sesuai kriteria simpan data
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hashSync(password, salt)

        const users = new userModel({
            username : username,
            password : hashedPassword,
            email : email
        })

        const savedUser = await users.save();
        res.json(savedUser)
    } catch (error) {
        res.status(400).send("Erros Bos")
    }
}

module.exports = {
    register, login
}

