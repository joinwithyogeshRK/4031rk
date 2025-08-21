import { Todo } from '../types';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  // Limit to 10 visible tasks as per requirements
  const visibleTodos = todos.slice(0, 10);

  return (
    <ul className="todo-list">
      {visibleTodos.length === 0 ? (
        <li className="text-center py-4 text-muted-foreground">
          No tasks yet. Add one above!
        </li>
      ) : (
        visibleTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))
      )}
    </ul>
  );
}
