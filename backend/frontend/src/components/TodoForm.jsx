import React, { useState } from 'react'

function TodoForm({onAdd}) {
    const [title,setTitle] = useState("");

    const handleSubmit = (e)=>{
       e.preventDefault();

       if(!title.trim()) return;

       onAdd(title);
       setTitle("")
    }

  return (
    <form  onSubmit={handleSubmit}>
      <div className='form-container'>
          <input type='text' placeholder='Enter Task' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <button className='add-btn' type='submit'>Add Task</button>
        </div>
       
        

    </form>
  )
}

export default TodoForm;

