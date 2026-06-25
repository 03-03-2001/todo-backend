import { useState, useEffect } from 'react'
import { getTodos, createTodo, deleteTodo, updateStatus, searchTodos } from './services/todoService'
import './App.css'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import SearchBar from './components/SearchBar';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await getTodos();
      setTodos(response.data.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to load tasks");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAddTask = async (title) => {
    if (!title) return;
    try {
      await createTodo({ title, completed: false });
      fetchTodos();
    } catch (err) {
      setError("Failed to create task");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      fetchTodos();
    } catch (err) {
      setError("Failed to delete task");
    }
  };

  const handleStatus = async (id, completed) => {
    try {
      await updateStatus(id, !completed);
      fetchTodos();
    } catch (err) {
      setError("Failed to update status");
    }
  };

  const handleSearch = async (keyword) => {
    try {
      const response = await searchTodos(keyword);
      setTodos(response.data.data);
    } catch (err) {
      setError("Search failed");
    }
  };

  return (
    <div className='app-container'>
      <h1>Todo App</h1>

      {error && <p className='error'>{error}</p>}

      {loading ? (
        <h3 className='loading'>Loading...</h3>
      ) : (
        <>
          <SearchBar onSearch={handleSearch} />
          <TodoForm onAdd={handleAddTask} />
          <TodoList todos={todos} onDelete={handleDelete} onStatus={handleStatus} />
        </>
      )}
    </div>
  );
}

export default App;