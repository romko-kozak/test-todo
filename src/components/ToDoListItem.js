import React from 'react';
import cn from 'classnames';

const ToDoListItem = ({ id, text, done, handleCompleteChange, handleRemoveItem }) => (
  <li className='item-container'>
    <p className={cn('item-text', {done})}>{text}</p>
    <div>
      <span className={cn('item-btn', {done})} onClick={() => handleCompleteChange(id, done)}>{done ? 'Uncheck' : 'Check'}</span>
      <span className='item-btn remove' onClick={() => handleRemoveItem(id)}>Remove</span>
    </div>
  </li>
);

export default ToDoListItem;
