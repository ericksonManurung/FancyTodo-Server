const {User} = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class UserController{
    static register(req,res,next){
        let user = {
            email: req.body.email,
            password: req.body.password
        }
        User.create(user)
        .then((data) => {
            res.status(201).json({success:true, message:'User berhasil register'})
        })
        .catch((err) => {
            next(err)
        });
    }

    static login(req,res,next){
        let user = {
            email: req.body.email,
            password: req.body.password
        }
        User.findOne({where:{email:user.email}})
        .then((data) => {
            if(data && bcrypt.compareSync(user.password, data.password)){
                const access_token = jwt.sign({id: data.id, email: data.email}, process.env.JWT_SECREAT)
                res.status(200).json({success: true, access_token})
            }else{
                throw{name: 'LOGIN_ERROR'}
            }
        })
        .catch((err) => {
            next(err)
        });
    }
}

module.exports = UserController