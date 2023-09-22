import { ReactNode, createContext } from 'react';

import { TodoItemData } from 'types/todo';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import reducer, { TodoAction } from '../reducer/todoReducer';

interface TodoStateContextObject {
  todoList: TodoItemData[];
  category: string;
  dispatch: (action: TodoAction) => void;
}

export const TodoStateContext = createContext<TodoStateContextObject | null>(null);

export const TodoProvider = ({ category, children }: { category: string; children: ReactNode }) => {
  const [todoList, setTodoList] = useLocalStorage(category, [] as TodoItemData[]);
  const dispatch = (action: TodoAction) => setTodoList(() => reducer(todoList, action));

  const value = {
    todoList,
    category,
    dispatch,
  };

  return <TodoStateContext.Provider value={value}>{children}</TodoStateContext.Provider>;
};
