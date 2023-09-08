import { FormEventHandler } from 'react';

import { useFormWithEditView } from '@/hooks/useFormWithEditView';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Form } from './CategoryAddForm.style';
import { AddCategory } from '@/utils/category';

export const CategoryAddForm = () => {
  const { editInput, isEditMode, onToggleMode, onChange } = useFormWithEditView();

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    AddCategory(editInput);
  };

  return (
    <>
      {!isEditMode && (
        <Button $variant="contained" $size="md" onClick={onToggleMode}>
          카테고리 추가
        </Button>
      )}
      {isEditMode && (
        <Form onSubmit={onSubmit}>
          <Input name="category" value={editInput} onChange={onChange} />
          <Button $variant="contained" $size="md">
            추가
          </Button>
          <Button $variant="outlined" $size="md" onClick={onToggleMode}>
            취소
          </Button>
        </Form>
      )}
    </>
  );
};
