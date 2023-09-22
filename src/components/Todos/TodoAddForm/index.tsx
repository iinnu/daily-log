import { FormEventHandler } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useConditionalForm } from '@/hooks/useConditionalForm';
import { useTodoStateContext } from '@/context/hooks';
import { addTodo } from '@/context/reducer/todoReducer';

import { Form } from '@/components/common/Form';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';

export const TodoAddForm = () => {
  const { input, isFormMode, toggleMode, resetInput, onChangeInput } = useConditionalForm();
  const { dispatch } = useTodoStateContext();

  const handleTodoUpdateSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(addTodo({ id: uuidv4(), title: input, completed: false }));
    resetInput();
  };

  return (
    <>
      {isFormMode ? (
        <Form onSubmit={handleTodoUpdateSubmit}>
          <Input value={input} onChange={onChangeInput} />
          <Button type="submit" $variant="contained">
            DONE
          </Button>
          <Button type="button" $variant="outlined" onClick={toggleMode}>
            CANCEL
          </Button>
        </Form>
      ) : (
        <Button onClick={toggleMode}>+ 할일 추가</Button>
      )}
    </>
  );
};
