const jwt = require('jsonwebtoken')
const {User, Todo} = require('../models')

const authentication = (req,res,next)=>{
    // jika token tidak ada
    if(!req.headers.access_token){
        throw{name: 'MISSING_TOKEN'}
    }else{
        // cek token benar atau tidak
        try{
            const decode = jwt.verify(req.headers.access_token,process.env.JWT_SECREAT)
            // define userId untuk di controller
            req.userId = decode.id
        // bila tidak sesuai 
        }catch(err){
            throw{name:'INVALID_TOKEN'} //tanya instruktur
        }

        User.findByPk(req.userId)
        .then((data) => {
            if(!data){
                throw{name: "LOGIN_FAIL"}
            }
            next()            
        }).catch((err) => {
            next(err)
        });

    }
}

const todosAuthorization = (req,res,next) =>{
    const {id} = req.params
    Todo.findOne({where:{id, UserId:req.userId}})
    .then((data) => {
        if(!data){
            throw{name: 'NOT_FOUND'}
        }else{
            req.todo = data //untuk detail dan delete
            next()
        }
    }).catch((err) => {
        next(err)
    });

}


module.exports = {authentication, todosAuthorization}