import { FormEventHandler } from 'react';

import { useConditionalForm } from '@/hooks/useConditionalForm';
import { useCategoryContext } from '@/context/hooks';
import { addCategoryToStorage } from '@/utils/category';

import { Form } from '@/components/common/Form';
import { Input } from '@/components/common/Input';
import { Button } from '@/components/common/Button';

export const CategoryAddForm = () => {
  const { addCategory } = useCategoryContext();
  const { input, isFormMode, toggleMode, resetInput, onChangeInput } = useConditionalForm();

  const handleCategoryAddFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (addCategoryToStorage(input)) {
      addCategory(input);
      resetInput();
    }
  };

  return isFormMode ? (
    <Form onSubmit={handleCategoryAddFormSubmit}>
      <Input name="category" value={input} onChange={onChangeInput} />
      <Button type="submit" $variant="contained" $size="md">
        DONE
      </Button>
      <Button type="button" $variant="outlined" $size="md" onClick={toggleMode}>
        CANCEL
      </Button>
    </Form>
  ) : (
    <Button $variant="contained" $size="md" onClick={toggleMode}>
      카테고리 추가
    </Button>
  );
};
