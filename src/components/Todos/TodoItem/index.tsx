import { useState } from 'react';
import { FaPen, FaTrashCan } from 'react-icons/fa6';

import { IconButton, IconButtons } from '@/components/common/IconButton';
import { CheckboxBase, HiddenCheckbox, LabelStyled, TodoItemStyled } from './TodoItem.style';

export const TodoItem = ({ id, title, completed }: { id: string; title: string; completed: boolean }) => {
  const [isCompleted, setIsCompleted] = useState(completed);

  const toggleCompleted = () => setIsCompleted((prev: boolean) => !prev);

  return (
    <TodoItemStyled>
      <CheckboxBase>
        <HiddenCheckbox type="checkbox" id={id} checked={isCompleted} onChange={toggleCompleted} />
        <LabelStyled htmlFor={id}>{title}</LabelStyled>
      </CheckboxBase>
      <IconButtons>
        <IconButton>
          <FaPen />
        </IconButton>
        <IconButton>
          <FaTrashCan />
        </IconButton>
      </IconButtons>
    </TodoItemStyled>
  );
};
