const  {Todo} = require('../models')

class TodoController{
    
    static addTodo(req,res){
        let todo = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        }
        Todo.create(todo)
        .then((data) => {
            res.status(201).json(data)
        }).catch((err) => {
            res.status(500).json({message:'Internal Server Error'})
        });
    }
    
    static listTodo(req,res){
        Todo.findAll()
        .then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(500).json({message:'Internal Server Error'})
        });
    }  

    static detailTodo(req,res){
        const {id} = req.params
        Todo.findByPk(id)
        .then((data) => {
            if(data){
                res.status(200).json(data)
            }else{
                res.status(404).json({message:'Error not found'})
            }
            
        }).catch((err) => {
            res.status(500).json({message:'Internal Server Error'})
        });
    }

    static updateTodo(req,res){
        const {id} = req.params
        let todo = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        }
        Todo.update(todo,{where:{id:id}})
        .then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(500).json({message:'Internal Server Error'})
        });
    }

    static updateTodoTitle(req,res){
        const {id} = req.params
        let todo = {
            status: req.body.status
        }
        Todo.update(todo,{where:{id:id}})
        .then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(500).json({message:'Internal Server Error'})
        });
    }

    static deleteTodo(req,res){
        const {id} = req.params
        Todo.destroy({where:{id:id}})
        .then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(500).json({message:'Internal Server Error'})
        });
    }
}

module.exports = TodoController