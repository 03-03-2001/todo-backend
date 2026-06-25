const todoModel = require('../models/todoModel') ;


    const createTodo = async(data)=>{
          return await todoModel.create(data)
    };

    const getTodos = async ()=>{
        return await todoModel.find()
    };
    const getTodoById = async(id)=>{
        return await todoModel.findById(id);
    };
    const updateTodo =async (id,data)=>{
        return await todoModel.findByIdAndUpdate(id,data,{new:true,runValidators:true})
    };

    const deleteTodo = async (id)=>{
        return await todoModel.findByIdAndDelete(id);
    };
    const searchTodo = async (keyword) => {
       const allTodos = await todoModel.find({});
       console.log(allTodos);
    return await todoModel.find({
        title: {
            $regex: keyword,
            $options: "i"
        }
    });
};


module.exports = {
    createTodo,getTodos,getTodoById,updateTodo,deleteTodo,searchTodo
}

