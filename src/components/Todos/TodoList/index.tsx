import { useState } from 'react';

import { Input } from '@/components/common/Input';
import { Button } from '@/components/common/Button';
import { useFormWithEditView } from '@/hooks/useFormWithEditView';
import { getTodoListFromStorage } from '@/utils/todo';
import { Category } from '../Category';
import { TodoItem } from '../TodoItem';
import { TodoWrapper, Form } from './TodoList.style';

interface TodoItemData {
  id: string;
  title: string;
  completed: boolean;
}

export const TodoList = ({ category }: { category: string }) => {
  const [todoList] = useState<TodoItemData[]>(getTodoListFromStorage(category) ?? []);
  const { editInput, isEditMode, onChange, onToggleMode } = useFormWithEditView();

  return (
    <TodoWrapper key={category}>
      <Category title={category} onAddClick={onToggleMode} />
      {todoList.map((todo) => (
        <TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
      {isEditMode && (
        <Form>
          <Input value={editInput} onChange={onChange} />
          <Button $variant="contained">추가</Button>
          <Button $variant="outlined" onClick={onToggleMode}>
            취소
          </Button>
        </Form>
      )}
    </TodoWrapper>
  );
};
