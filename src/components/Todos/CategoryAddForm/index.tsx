import { FormEventHandler } from 'react';

import { useConditionalForm } from '@/hooks/useConditionalForm';
import { useCategoryContext } from '@/context/hooks';
import { addCategoryToStorage } from '@/utils/category';

import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Form } from './CategoryAddForm.style';

export const CategoryAddForm = () => {
  const { addCategory } = useCategoryContext();
  const { input, isFormMode, toggleMode, initInput, onChangeInput } = useConditionalForm();

  const handleCategoryAddFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (addCategoryToStorage(input)) {
      addCategory(input);
      initInput();
    }
  };

  return (
    <>
      {isFormMode ? (
        <Form onSubmit={handleCategoryAddFormSubmit}>
          <Input name="category" value={input} onChange={onChangeInput} />
          <Button type="submit" $variant="contained" $size="md">
            추가
          </Button>
          <Button type="button" $variant="outlined" $size="md" onClick={toggleMode}>
            취소
          </Button>
        </Form>
      ) : (
        <Button $variant="contained" $size="md" onClick={toggleMode}>
          카테고리 추가
        </Button>
      )}
    </>
  );
};
