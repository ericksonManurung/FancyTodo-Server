const {User} = require('../models')

class UserController{
    static registerUser(req,res){
        let user = {
            email: req.body.email,
            password: req.body.password
        }
        User.findAll({where:{email:user.email}})
        .then((data) => {
            if(data.length === 0 || data.length < 1 || data === undefined){
                return User.create(user)
            }else{
                res.send('Data sudah ada silahkan daftar dengan email yg lain')
            }
        })
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

    static listUser(req,res){
        User.findAll()
        .then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(500).json({message:'Internal Server Error'})
        });
    }
}

module.exports = UserController