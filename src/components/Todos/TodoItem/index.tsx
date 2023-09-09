import { ChangeEventHandler } from 'react';
import { FaPen, FaTrashCan } from 'react-icons/fa6';

import { deleteTodoFromStorage, updateTodoInStorage } from '@/utils/todo';
import { deleteTodo, toggleTodoCompleted } from '@/context/reducer/todoReducer';
import { useTodoDispatchContext, useTodoStateContext } from '@/context/hooks';

import { TodoItemData } from 'types/todo';
import { IconButton, IconButtons } from '@/components/common/IconButton';
import { CheckboxBase, HiddenCheckbox, LabelStyled, TodoItemStyled } from './TodoItem.style';

interface TodoItemProps {
  item: TodoItemData;
}

export const TodoItem = ({ item }: TodoItemProps) => {
  const { category } = useTodoStateContext();
  const dispatch = useTodoDispatchContext();

  const handleTodoCompletedChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const updated = { ...item, completed: e.target.checked };

    if (updateTodoInStorage(category, { ...item, completed: e.target.checked })) {
      dispatch(toggleTodoCompleted(updated.id, updated.completed));
    }
  };

  const handleTodoDeleteClick = () => {
    if (deleteTodoFromStorage(category, item.id)) {
      dispatch(deleteTodo(item.id));
    }
  };

  return (
    <TodoItemStyled>
      <CheckboxBase>
        <HiddenCheckbox type="checkbox" id={item.id} onChange={handleTodoCompletedChange} />
        <LabelStyled htmlFor={item.id}>{item.title}</LabelStyled>
      </CheckboxBase>
      <IconButtons>
        <IconButton name="todo-update-button">
          <FaPen />
        </IconButton>
        <IconButton name="todo-delete-button" onClick={handleTodoDeleteClick}>
          <FaTrashCan />
        </IconButton>
      </IconButtons>
    </TodoItemStyled>
  );
};
