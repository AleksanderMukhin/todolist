import { useState } from 'react';
import TodoList from './TodoList';
import InputField from './InputField';
import { useDispatch } from 'react-redux';
import { addTodo } from 'store/todoSlice';

export const App = () => {
  const [text, setText] = useState([]);
  const dispatch = useDispatch();
  const addTask = () => {
    dispatch(addTodo({ text }));
    setText('');
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />

      <TodoList />
    </div>
  );
};
