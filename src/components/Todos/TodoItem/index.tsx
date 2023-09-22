import { ChangeEventHandler, FormEventHandler } from 'react';
import { FaPen, FaTrashCan } from 'react-icons/fa6';

import { useConditionalForm } from '@/hooks/useConditionalForm';
import { useTodoStateContext } from '@/context/hooks';
import { deleteTodo, toggleTodoCompleted, updateTodoTitle } from '@/context/reducer/todoReducer';

import { TodoItemData } from 'types/todo';
import { IconButton, IconButtons } from '@/components/common/IconButton';
import { Input } from '@/components/common/Input';
import { Button } from '@/components/common/Button';
import { FormStyled, CheckboxBase, HiddenCheckbox, LabelStyled, TodoItemStyled } from './styles';

interface TodoItemProps {
  item: TodoItemData;
}

export const TodoItem = ({ item }: TodoItemProps) => {
  const { view, input, isFormMode, toggleMode, updateView, onChangeInput } = useConditionalForm(item.title, item.title);
  const { dispatch } = useTodoStateContext();

  const handleTodoSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(updateTodoTitle(item.id, input));
    updateView();
  };

  const handleTodoCompletedChange: ChangeEventHandler<HTMLInputElement> = () => {
    dispatch(toggleTodoCompleted(item.id));
  };

  const handleTodoDeleteClick = () => {
    dispatch(deleteTodo(item.id));
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
