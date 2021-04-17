const router = require('express').Router()
const TodoController = require('../controllers/TodoController')
const {todosAuthorization} = require('../middlewares/auth')

router.post('/', TodoController.addTodo)
router.get('/', TodoController.listTodo)
router.get('/:id', todosAuthorization, TodoController.detailTodo)
router.put('/:id', todosAuthorization, TodoController.updateTodo)
router.patch('/:id', todosAuthorization, TodoController.updateTodoStatus)
router.delete('/:id', todosAuthorization, TodoController.deleteTodo)


module.exports = router