const router = require('express').Router()
const TodoController = require('../controllers/TodoController')

router.post('/', TodoController.addTodo)
router.get('/', TodoController.listTodo)
router.get('/:id', TodoController.detailTodo)
router.put('/:id', TodoController.updateTodo)
router.patch('/:id', TodoController.updateTodoStatus)
router.delete('/:id', TodoController.deleteTodo)


module.exports = router