const errorHandler = (err ,req ,res ,next) =>{
    let statusCode
    let errorMessage

    console.log('message = ',err.message)
    console.log('name = ',err.name)
    
    if(err.name === 'SequelizeValidationError'){
        statusCode = 400
        if(err.message){
            errorMessage = err.message.split('\n')
        }else{
            errorMessage = 'Bad request'
        }

    }else if(err.name === 'LOGIN_ERROR'){
        statusCode = 401
        errorMessage = 'Username dan Password salah'

    }else if(err.name === 'invalid token'){
        statusCode = 401
        errorMessage = 'Token tidak sesuai / salah'

    }else if(err.name === 'TOKEN_UNDEFINED'){
        statusCode = 404
        errorMessage = 'Akses Token tidak di temukan'

    }else if(err.name === 'NOT_FOUND'){
        statusCode = 404
        errorMessage = 'Data tidak ditemukan'
        
    }else{
        statusCode = 500
        errorMessage = 'Internal Server Error'
    }
    // SequelizeForeignKeyConstraintError

    res.status(statusCode).json({success:false, errorMessage})
}

module.exports = errorHandler