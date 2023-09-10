import { Dispatch, ReactNode, createContext, useReducer } from 'react';

import { TodoItemData } from 'types/todo';
import { getTodoListFromStorage } from '@/utils/todo';
import reducer, { TodoAction } from '../reducer/todoReducer';

interface TodoStateContextObject {
  category: string;
  todoList: TodoItemData[];
}

export const TodoStateContext = createContext<TodoStateContextObject | null>(null);
export const TodoDispatchContext = createContext<Dispatch<TodoAction> | null>(null);

export const TodoProvider = ({ category, children }: { category: string; children: ReactNode }) => {
  const [todoList, dispatch] = useReducer(reducer, getTodoListFromStorage(category) ?? []);

  const state = { category, todoList };

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>{children}</TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};
