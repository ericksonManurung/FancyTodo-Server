const {Todo, User} = require('../models')

class TodoController{
    
    static addTodo(req,res,next){
        let todo = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date,
            UserId: req.userId //req.userId dibuat dari req di middleware authentication
        }
        Todo.create(todo)
        .then((todo) => {
            res.status(201).json({success:true, data: todo})
        }).catch((err) => {
            next(err)
        });
    }
    
    static listTodo(req,res,next){
        Todo.findAll({where:{UserId:req.userId},order:[['id','DESC']]})
        .then((todo) => {
            res.status(200).json({success:true, data: todo})
        }).catch((err) => {
            next(err)
        });
    }  

    static detailTodo(req,res){
        res.status(200).json({success: true, data: req.todo})
    }

    static updateTodo(req,res,next){
        const {id} = req.params
        let todo = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        }
        Todo.update(todo,{
                        where:{
                            id:id
                        },
                        returning:true
        })
        .then((data) => {
            res.status(200).json({success:true, data:data[1][0]})
        }).catch((err) => {
            next(err)
        });
    }

    static updateTodoStatus(req,res,next){
        const {id} = req.params
        let todo = {
            status: req.body.status
        }
        Todo.update(todo,{
            where:{
                id:id
            },
            returning:true
        })
        .then((data) => {
            res.status(200).json({success:true, data:data[1][0]})
        }).catch((err) => {
            next(err)
        });
    }

    static deleteTodo(req,res,next){
        const {id} = req.params
        Todo.destroy({where:{id:id}})  
        .then((data) => {
            res.status(200).json({success:true, data: req.todo})
        }).catch((err) => {
            next(err)
        });
    } 
}

module.exports = TodoController