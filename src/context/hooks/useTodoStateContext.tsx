import { useContext } from 'react';

import { TodoStateContext } from '../provider';

export const useTodoStateContext = () => {
  const context = useContext(TodoStateContext);

  if (!context) {
    throw new Error('useTodoStateContext must be used in TodoProvider!');
  }

  return context;
};
