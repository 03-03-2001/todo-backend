import React from 'react'

function TodoItem({todo,onDelete,onStatus}) {
  return (
    <li>
        <span style={{textDecoration:todo.completed? "line-through":"none",}}>{todo.title}</span>
        <button className='status-btn' onClick={()=>onStatus(todo._id,todo.completed)}>{todo.completed?"Undo":"Completed"}</button>

        <button className='delete-btn' onClick={()=>onDelete(todo._id)}>Delete</button>
    </li>
  )
}

export default TodoItem