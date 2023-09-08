import { getLocalStorageItem } from './localStorage';

export const getTodoListFromStorage = (category: string) => {
  const todoList = getLocalStorageItem(category);
  return todoList;
};
