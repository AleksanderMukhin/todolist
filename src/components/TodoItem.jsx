import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../store/todoSlice';

const TodoItem = ({ id, text, complited }) => {
  const dispatch = useDispatch();
  return (
    <li key={id}>
      <input
        type="checkbox"
        onChange={() => dispatch(toggleTodo({ id }))}
        checked={complited}
      />
      <span>{text}</span>
      <span
        onClick={() => dispatch(removeTodo({ id }))}
        style={{ color: 'red' }}
      >
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
