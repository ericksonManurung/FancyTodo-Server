const jwt = require('jsonwebtoken')
const {Todo} = require('../models')

const authentication = (req,res,next)=>{
    // jika token tidak ada
    if(!req.headers.access_token){
        throw{name: 'TOKEN_UNDEFINED'}
    }else{
        // cek token benar atau tidak
        try{
            const decode = jwt.verify(req.headers.access_token,process.env.JWT_SECREAT)
            // define userId untuk di controller
            req.userId = decode.id
            next()
        // bila tidak sesuai 
        }catch(err){
            throw{name:err.message} //tanya instruktur
        }
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