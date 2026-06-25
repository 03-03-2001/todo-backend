const asyncHandler = require('../middlewares/asyncHandler');
const todoModel = require('../models/todoModel')

const { createTodo, getTodos, getTodoById, updateTodo, deleteTodo,searchTodo} = require("../services/todoService");

const createNewTodo = asyncHandler(async (req, res) => {
    if (!req.body.title) {
        return res.status(400).json({
            success: false,
            message: "Title is required"
        });
    }

    const todo = await createTodo(req.body);
    res.status(201).json(todo);
});

const getAllTodos = asyncHandler(async (req, res) => {
    const todos = await getTodos();

    res.status(200).json({
        success: true,
         
        data: todos
    });
});
const getById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const todo = await getTodoById(id);

    if (!todo) {
        return res.status(404).json({
            success: false,
            message: "Todo is not found"
        });
    }
    res.status(200).json({
        success: true,
        data: todo
    });
});

const updateTodoById = asyncHandler(async (req, res) => {
    const { id } = req.params;
   

    const todo = await updateTodo(id, req.body);

    if (!todo) {
        return res.status(404).json({
            success: false,
            message: 'Todo not found'
        });
    }

    res.status(200).json({
        success: true,
        data: todo
    });
})

const deleteTodoById = asyncHandler(async (req, res) => {
    const { id } = req.params

    const todo = await deleteTodo(id);

    if (!todo) {
        res.status(404).json({
            success: false,
            message: "Todo is not found"
        })
    }
    
        res.status(200).json({
            success: true,
            message: "Todo deleted successfully"
        })
    
}

)


const searchTodos = asyncHandler(async (req, res) => {
      
    try {
             const { keyword = ""} = req.query;
    console.log("keyword",keyword);

    const todos = await searchTodo(keyword);
    console.log("Found Todos:", JSON.stringify(todos, null, 2));
    

    res.status(200).json({
        success: true,
        data: todos
    });
    } catch (error) {
        console.error("Error",error);
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
 
});
module.exports = {
    createNewTodo,
    getAllTodos,
    getById,
    updateTodoById,
    deleteTodoById,
     searchTodos
};
