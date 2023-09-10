import { useContext } from 'react';
import { TodoDispatchContext } from '../provider';

export const useTodoDispatchContext = () => {
  const context = useContext(TodoDispatchContext);

  if (!context) {
    throw new Error('TodoDispatchContext must be used in TodoProvider');
  }

  return context;
};
