const errorHandler = (err ,req ,res ,next) =>{
    let statusCode
    let errorMessage = []

    console.log('message = ',err.message)
    console.log('name = ',err.name)

    switch (err.name) {
        case 'SequelizeValidationError':
            statusCode = 400
            if(err.message){
                errorMessage = err.message.split('\n')
            }else{
                errorMessage.push('Bad request')
            }
            break;
        case 'SequelizeUniqueConstraintError':
            statusCode = 409
            errorMessage.push('Data duplicate')
            break;
        case 'SequelizeForeignKeyConstraintError':
            statusCode = 400
            errorMessage.push('Foreign key kosong')
            break;
        case 'LOGIN_VALIDATION':
            statusCode = 400
            errorMessage.push('Username atau Password tidak boleh kosong')
            break;
        case 'LOGIN_ERROR':
            statusCode = 401
            errorMessage.push('Username atau Password anda salah')
            break;
        case 'LOGIN_FAIL':
            statusCode = 401
            errorMessage.push('access token dan Database tidak sesuai')
            break;            
        case 'MISSING_TOKEN':
            statusCode = 401
            errorMessage.push('Akses token tidak ditemukan')
            break;
        case 'INVALID_TOKEN':
            statusCode = 401
            errorMessage.push('Token tidak sesuai atau salah')
            break;
        case 'NOT_FOUND':
            statusCode = 401
            errorMessage.push('Data tidak ditemukan')
            break;    
        default:
            statusCode = 500
            errorMessage.push('Internal Server Error')
    }
    res.status(statusCode).json({success:false, errorMessage})
}

module.exports = errorHandler