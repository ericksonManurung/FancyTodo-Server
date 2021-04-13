const {Todo} = require('../models')

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
        Todo.update(todo,{
            where:{
                id:id
            },
            returning:true
        })
        .then((data) => {
            console.log(data[1])
            if(data[1].length){
                res.status(200).json({data:data[1][0]})
            }else{
                res.status(200).json({message:"Data Not Found"})
            }
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
        Todo.findByPk(id)
        .then((data) => {
            if(data){
                return Todo.destroy({
                    where:{
                        id:id
                    },
                    returning:true
                })        
            }else{
                res.status(404).json({message: "Data Not Found"})
            }
        })
        .then((data) => {
            console.log(data)
            res.status(200).json(data)
        }).catch((err) => {
            res.status(500).json({message:'Internal Server Error'})
        });
    }
}

module.exports = TodoController