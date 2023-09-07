import { useState } from 'react';

import { HiddenCheckbox, LabelStyled, TodoItemStyled } from './TodoItem.style';

export const TodoItem = ({ id, title, completed }: { id: string; title: string; completed: boolean }) => {
  const [isCompleted, setIsCompleted] = useState(completed);

  const toggleCompleted = () => setIsCompleted((prev: boolean) => !prev);

  return (
    <TodoItemStyled>
      <HiddenCheckbox type="checkbox" id={id} checked={isCompleted} onChange={toggleCompleted} />
      <LabelStyled htmlFor={id}>{title}</LabelStyled>
    </TodoItemStyled>
  );
};
