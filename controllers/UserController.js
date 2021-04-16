const {User} = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class UserController{
    static register(req,res){
        let user = {
            email: req.body.email,
            password: req.body.password
        }
        User.create(user)
        .then((data) => {
            res.status(201).json({success:true, message:'User berhasil di register'})
        })
        .catch((err) => {
            console.log(err.message)
            if(err.name === 'SequelizeValidationError'){
                res.status(400).json({message:'Sequelize Validation Error'})
            }else{
                res.status(500).json({message:'Internal Server Error'})    
            }
        });
    }

    static login(req,res){
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
                res.status(404).json({message:'email dan password not found'})
            }
        })
        .catch((err) => {
            console.log(err.message)
            res.status(500).json({message : 'Internal Server Error'})
        });
    }
}

module.exports = UserController