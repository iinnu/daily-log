import { FormEventHandler } from 'react';

import { addTodo } from '@/context/reducer/todoReducer';
import { addTodoToStorage } from '@/utils/todo';
import { useTodoDispatchContext, useTodoStateContext } from '@/context/hooks';
import { useFormWithEditView } from '@/hooks/useFormWithEditView';

import { Input } from '@/components/common/Input';
import { Button } from '@/components/common/Button';
import { Category } from '../Category';
import { TodoItem } from '../TodoItem';
import { TodoListWrapper, TodoItemsWrapper, Form } from './TodoList.style';

export const TodoList = () => {
  const { editInput, isEditMode, onChange, onToggleMode } = useFormWithEditView();
  const { todoList, category } = useTodoStateContext();
  const dispatch = useTodoDispatchContext();

  const handleTodoSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const todo = addTodoToStorage(category, editInput);

    if (todo) dispatch(addTodo(todo));
  };

  return (
    <TodoListWrapper>
      <Category title={category} onAddClick={onToggleMode} />
      <TodoItemsWrapper>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} item={todo} />
        ))}
        {isEditMode && (
          <Form onSubmit={handleTodoSubmit}>
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
