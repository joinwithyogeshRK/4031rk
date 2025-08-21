interface TodoCounterProps {
  count: number;
}

export function TodoCounter({ count }: TodoCounterProps) {
  return (
    <div className="counter mt-4">
      <span>{count} {count === 1 ? 'task' : 'tasks'} remaining</span>
    </div>
  );
}
