import { ReactNode, createContext } from 'react';

export const TodoContext = createContext<string>('');

export const TodoProvider = ({ value, children }: { value: string; children: ReactNode }) => {
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
