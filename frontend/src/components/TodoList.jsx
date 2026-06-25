import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ todos= [], onDelete, onStatus }) {
    console.log("todos",todos);
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem
                    key={todo._id}
                    todo={todo}
                    onDelete={onDelete}
                    onStatus={onStatus}
                />
            ))}
        </ul>
    )
}

export default TodoList;