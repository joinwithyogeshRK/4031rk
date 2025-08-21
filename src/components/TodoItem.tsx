import { Checkbox } from '@/components/ui/checkbox';
import { Todo } from '../types';
import { Trash2 } from 'lucide-react';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className="todo-item group hover:bg-surface/80">
      <Checkbox
        checked={todo.completed}
        onCheckedChange={() => onToggle(todo.id)}
        className="todo-checkbox"
      />
      <span className={`todo-text ${todo.completed ? 'todo-completed' : ''}`}>
        {todo.text}
      </span>
      <div className="todo-actions">
        <button
          onClick={() => onDelete(todo.id)}
          className="btn-icon text-error opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Delete task"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
    </li>
  );
}
