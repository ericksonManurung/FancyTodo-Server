const jwt = require('jsonwebtoken')
const {Todo} = require('../models')

const authentication = (req,res,next)=>{
    if(!req.headers.access_token){
        return res.status(401).json({success: false, message: 'akses token tidak di temukan'})
    }else{
        // cek token benar atau tidak
        try{
            const decode = jwt.verify(req.headers.access_token,process.env.JWT_SECREAT)
            // define userId untuk di controller
            req.userId = decode.id
            next()
        }catch(err){
            res.status(401).json({success:'false', message:'Token tidak sesuai'})
        }
    }
}

const todosAuthorization = (req,res,next) =>{
    const {id} = req.params
    Todo.findOne({where:{id, UserId:req.userId}})
    .then((data) => {
        if(!data){
            return res.status(404).json({success:false, message:'Todo not found!'})
        }else{
            req.todo = data
            next()
        }
    }).catch((err) => {
        
    });

}


module.exports = {authentication, todosAuthorization}