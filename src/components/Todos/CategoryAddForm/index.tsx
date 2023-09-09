import { FormEventHandler } from 'react';

import { useFormWithEditView } from '@/hooks/useFormWithEditView';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { addCategoryToStorage } from '@/utils/category';
import { useCategoryContext } from '@/context/hooks';
import { Form } from './CategoryAddForm.style';

export const CategoryAddForm = () => {
  const { addCategory } = useCategoryContext();
  const { editInput, isEditMode, onToggleMode, onChange } = useFormWithEditView();

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (addCategoryToStorage(editInput)) {
      addCategory(editInput);
    }
  };

  return (
    <>
      {isEditMode ? (
        <Form onSubmit={onSubmit}>
          <Input name="category" value={editInput} onChange={onChange} />
          <Button type="submit" $variant="contained" $size="md">
            추가
          </Button>
          <Button type="button" $variant="outlined" $size="md" onClick={onToggleMode}>
            취소
          </Button>
        </Form>
      ) : (
        <Button $variant="contained" $size="md" onClick={onToggleMode}>
          카테고리 추가
        </Button>
      )}
    </>
  );
};
