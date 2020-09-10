import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import ListItem from './../components/ToDoListItem';
import useInput from './../hooks/useInputHook';
import useArray from './../hooks/useArrayHook';
import { addTodo, toggleTodo, deleteTodo } from './../reducer';

import './../styles.scss';

export default function TodoApp() {
  const dispatch = useDispatch();
  const todoListFromState = useSelector(state => state.todos);
  const [todo, setTodo, resetTodo] = useInput('');
  const todos = useArray(todoListFromState);

  const onSubmit = e => {
    e.preventDefault();
    if (!todo.trim()) return;
    const id = uuid();
    todos.addItem(todo, id);
    dispatch(addTodo({ id, text: todo, done: false }));
    resetTodo();
  };

  const handleCompleteChange = (id, done) => {
    todos.toggleItem(id);
    dispatch(toggleTodo({ id, done: !done }));
  };

  const handleRemoveItem = id => {
    todos.removeItem(id);
    dispatch(deleteTodo({ id }));
  };

  return (
    <div className='container'>
      <form onSubmit={onSubmit}>
        <input
          id='todo'
          className='todo-input'
          placeholder='What is the plan ?'
          onChange={setTodo}
          value={todo}
        />
        <button type='submit' className='add-btn'>
          Write down
        </button>
      </form>
      <div>
        {
          todos.list.length
          ? (
            <ul>
              {todos.list.map(todo => (
                <ListItem
                  key={todo.id}
                  id={todo.id}
                  text={todo.text}
                  done={todo.done}
                  handleRemoveItem={handleRemoveItem}
                  handleCompleteChange={handleCompleteChange}
                />
              ))}
            </ul>
          )
          : <p className='info-message'>You have no plans for today!</p>
        }
      </div>
    </div>
  );
}