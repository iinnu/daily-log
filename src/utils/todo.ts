import { v4 as uuidv4 } from 'uuid';

import { getLocalStorageItem, setLocalStorageItem } from './localStorage';

interface TodoItemData {
  id: string;
  title: string;
  completed: boolean;
}

export const getTodoListFromStorage = (category: string) => {
  const todoList: TodoItemData[] | null = getLocalStorageItem(category);
  return todoList;
};

export const addTodoToStorage = (category: string, title: string): TodoItemData | null => {
  const todoList = getTodoListFromStorage(category);

  if (!todoList) {
    alert('해당 카테고리가 없습니다.');
    return null;
  }

  const todo: TodoItemData = {
    id: uuidv4(),
    title: title,
    completed: false,
  };

  todoList.push(todo);

  setLocalStorageItem(category, todoList);

  return todo;
};
