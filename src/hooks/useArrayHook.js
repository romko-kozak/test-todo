import { useState } from 'react';

function useArray(initialList) {
  const [list, setList] = useState(initialList);

  return {
    list,
    addItem: (newItemText, id) => {
      setList([
        ...list,
        {
          id,
          text: newItemText,
          done: false
        }
      ]);
    },

    removeItem: itemId => {
      const updatedItems = list.filter(item => item.id !== itemId);
      setList(updatedItems);
    },

    toggleItem: itemId => {
      const updatedItems = list.map(item => {
        return item.id === itemId
          ? { ...item, done: !item.done }
          : item;
      });
      setList(updatedItems);
    }
  };
}

export default useArray;