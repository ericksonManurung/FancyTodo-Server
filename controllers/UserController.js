const {User} = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {OAuth2Client} = require('google-auth-library');

class UserController{
    static register(req,res,next){
        let user = {
            email: req.body.email,
            password: req.body.password
        }
        User.create(user)
        .then((data) => {
            res.status(201).json({success:true, message:'User berhasil register', data:{id:user.id, email:user.email}})
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

        if(!user.email || !user.password){
            return next({name : 'LOGIN_VALIDATION'})
        }else{
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

    static googleLogin(req,res,next){
        const client = new OAuth2Client(process.env.CLIENT_ID);
        const token = req.body.token
        async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
            // Or, if multiple clients access the backend:
            //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        });
        const payload = ticket.getPayload();
        // const userid = payload['sub'];
        // If request specified a G Suite domain:
        // const domain = payload['hd'];
        User.findOne({
            where:{
                email:payload.email
            }
        })
        .then((user) => {
            if(!user){
                return User.create({email:payload.email, password:process.env.DEFAULT_PASSWORD})
            }else{
                return user
            }
        })
        .then((user) => {
            const access_token = jwt.sign({id: user.id, email: user.email}, process.env.JWT_SECREAT)
            return res.status(200).json({access_token})
        })
        .catch((err) => {
            next(err)
        });
        }
        verify().catch(console.error);
    }
}

module.exports = UserController