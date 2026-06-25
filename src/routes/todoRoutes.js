const express = require("express");



const router = express.Router();



const controller = require('../controllers/todoController')


const { createNewTodo,
    getAllTodos,
    getById,
    updateTodoById,
    deleteTodoById,
    searchTodos
} = controller;




router.post('/', createNewTodo)
router.get('/', getAllTodos);
router.get('/search', searchTodos);
router.get('/:id', getById);
router.put('/:id', updateTodoById);
router.delete('/:id', deleteTodoById)

module.exports = router;



