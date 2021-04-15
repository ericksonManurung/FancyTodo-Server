const {User} = require('../models')

class UserController{
    static registerUser(req,res){
        let user = {
            email: req.body.email,
            password: req.body.password
        }
        User.create(user)
        .then((data) => {
            res.status(201).json(data)
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

    static loginUser(req,res){
        let user = {
            email: req.body.email,
            password: req.body.password
        }
        User.findAll()
        .then((data) => {
           res.status(200).json(data)
        })
        .catch((err) => {
            res.status(500).json({message : 'Internal Server Error'})
        });
    }
}

module.exports = UserController