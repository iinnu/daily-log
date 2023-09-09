import { useContext } from 'react';

import { TodoContext } from '.';

export const useTodoContext = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error('useTodoContext must be used in TodoProvider!');
  }

  return context;
};
