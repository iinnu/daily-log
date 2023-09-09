import { FormEventHandler } from 'react';

import { useConditionalForm } from '@/hooks/useConditionalForm';
import { useTodoDispatchContext, useTodoStateContext } from '@/context/hooks';
import { addTodoToStorage } from '@/utils/todo';
import { addTodo } from '@/context/reducer/todoReducer';

import { Form } from '@/components/common/Form';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';

export const TodoAddForm = () => {
  const { input, isFormMode, toggleMode, resetInput, onChangeInput } = useConditionalForm();
  const { category } = useTodoStateContext();
  const dispatch = useTodoDispatchContext();

  const handleTodoUpdateSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const todo = addTodoToStorage(category, input);

    if (todo) {
      dispatch(addTodo(todo));
      resetInput();
    }
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
