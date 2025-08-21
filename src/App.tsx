import { useState } from 'react';
import { TodoList } from './components/TodoList';
import { TodoInput } from './components/TodoInput';
import { Header } from './components/Header';
import { TodoCounter } from './components/TodoCounter';
import { Todo } from './types';
import { Blog } from '@/pages/Blog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    if (text.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        text,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const remainingTodos = todos.filter((todo) => !todo.completed).length;

  return (
    <Router>
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/" element={
          <div className="todo-app">
            <Header />
            <TodoInput onAddTodo={addTodo} />
            <TodoList 
              todos={todos} 
              onToggle={toggleTodo} 
              onDelete={deleteTodo} 
            />
            <TodoCounter count={remainingTodos} />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;