import { FormEventHandler, useState } from 'react';

import { Input } from '@/components/common/Input';
import { Button } from '@/components/common/Button';
import { useFormWithEditView } from '@/hooks/useFormWithEditView';
import { addTodoToStorage, getTodoListFromStorage } from '@/utils/todo';
import { Category } from '../Category';
import { TodoItem } from '../TodoItem';
import { TodoWrapper, Form, TodoItemsWrapper } from './TodoList.style';

export const TodoList = ({ category }: { category: string }) => {
  const [todoList, setTodoList] = useState(getTodoListFromStorage(category) ?? []);
  const { editInput, isEditMode, onChange, onToggleMode } = useFormWithEditView();

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const todo = addTodoToStorage(category, editInput);

    if (todo) {
      setTodoList((prev) => [...prev, todo]);
    }
  };

  return (
    <TodoWrapper key={category}>
      <Category title={category} onAddClick={onToggleMode} />
      <TodoItemsWrapper>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
        ))}
        {isEditMode && (
          <Form onSubmit={onSubmit}>
            <Input value={editInput} onChange={onChange} />
            <Button type="submit" $variant="contained">
              추가
            </Button>
            <Button type="button" $variant="outlined" onClick={onToggleMode}>
              취소
            </Button>
          </Form>
        )}
      </TodoItemsWrapper>
    </TodoWrapper>
  );
};
