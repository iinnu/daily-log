import { FormEventHandler, useState } from 'react';

import { Input } from '@/components/common/Input';
import { Button } from '@/components/common/Button';
import { useFormWithEditView } from '@/hooks/useFormWithEditView';
import { addTodoToStorage, getTodoListFromStorage } from '@/utils/todo';
import { Category } from '../Category';
import { TodoItem } from '../TodoItem';
import { TodoListWrapper, TodoItemsWrapper, Form } from './TodoList.style';
import { useTodoContext } from '../TodoContext/useTodoContext';

export const TodoList = () => {
  const category = useTodoContext();
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
    <TodoListWrapper>
      <Category onAddClick={onToggleMode} />
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
    </TodoListWrapper>
  );
};
