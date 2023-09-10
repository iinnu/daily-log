import { ChangeEventHandler, FormEventHandler } from 'react';
import { FaPen, FaTrashCan } from 'react-icons/fa6';

import { useConditionalForm } from '@/hooks/useConditionalForm';
import { useTodoDispatchContext, useTodoStateContext } from '@/context/hooks';
import { deleteTodoFromStorage, updateTodoInStorage } from '@/utils/todo';
import { deleteTodo, toggleTodoCompleted, updateTodoTitle } from '@/context/reducer/todoReducer';

import { TodoItemData } from 'types/todo';
import { IconButton, IconButtons } from '@/components/common/IconButton';
import { Input } from '@/components/common/Input';
import { Button } from '@/components/common/Button';
import { FormStyled, CheckboxBase, HiddenCheckbox, LabelStyled, TodoItemStyled } from './TodoItem.style';

interface TodoItemProps {
  item: TodoItemData;
}

export const TodoItem = ({ item }: TodoItemProps) => {
  const { view, input, isFormMode, toggleMode, updateView, onChangeInput } = useConditionalForm(item.title, item.title);
  const { category } = useTodoStateContext();
  const dispatch = useTodoDispatchContext();

  const handleTodoSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (updateTodoInStorage(category, { ...item, title: input })) {
      dispatch(updateTodoTitle(item.id, input));
      updateView();
      toggleMode();
    }
  };

  const handleTodoCompletedChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const updated = { ...item, completed: e.target.checked };

    if (updateTodoInStorage(category, updated)) {
      dispatch(toggleTodoCompleted(updated.id, updated.completed));
    }
  };

  const handleTodoDeleteClick = () => {
    if (deleteTodoFromStorage(category, item.id)) {
      dispatch(deleteTodo(item.id));
    }
  };

  return isFormMode ? (
    <FormStyled onSubmit={handleTodoSubmit}>
      <Input value={input} onChange={onChangeInput} />
      <Button type="submit" $variant="contained">
        DONE
      </Button>
      <Button type="button" $variant="outlined" onClick={toggleMode}>
        CANCEL
      </Button>
    </FormStyled>
  ) : (
    <TodoItemStyled>
      <CheckboxBase>
        <HiddenCheckbox type="checkbox" id={item.id} checked={item.completed} onChange={handleTodoCompletedChange} />
        <LabelStyled htmlFor={item.id}>{view}</LabelStyled>
      </CheckboxBase>
      <IconButtons>
        <IconButton name="todo-update-button" onClick={toggleMode}>
          <FaPen />
        </IconButton>
        <IconButton name="todo-delete-button" onClick={handleTodoDeleteClick}>
          <FaTrashCan />
        </IconButton>
      </IconButtons>
    </TodoItemStyled>
  );
};
