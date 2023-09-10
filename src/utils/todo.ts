import { v4 as uuidv4 } from 'uuid';

import { TodoItemData } from 'types/todo';
import { getLocalStorageItem, setLocalStorageItem } from './localStorage';

export const getTodoListFromStorage = (category: string) => {
  const todoList: TodoItemData[] | null = getLocalStorageItem(category);
  return todoList;
};

export const addTodoToStorage = (category: string, title: string): TodoItemData | null => {
  const todoList = getTodoListFromStorage(category);

  if (!todoList) {
    alert('투두를 추가할 수 없습니다.');
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

export const deleteTodoFromStorage = (category: string, id: string): boolean => {
  const todoList = getTodoListFromStorage(category);

  if (!todoList) {
    alert('투두를 삭제할 수 없습니다.');
    return false;
  }

  const filteredTodoList = todoList.filter((todo) => todo.id !== id);

  setLocalStorageItem(category, filteredTodoList);

  return true;
};

export const updateTodoInStorage = (category: string, updated: TodoItemData): boolean => {
  const todoList = getTodoListFromStorage(category);

  if (!todoList) {
    alert('투두를 업데이트할 수 없습니다.');
    return false;
  }

  const updatedTodoList = todoList.map((todo) => {
    if (todo.id !== updated.id) return todo;
    return updated;
  });

  setLocalStorageItem(category, updatedTodoList);

  return true;
};
