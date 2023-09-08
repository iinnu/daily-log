import { ChangeEventHandler, FormEventHandler, useState } from 'react';

interface UseFormWithEditView {
  viewValue: string;
  editInput: string;
  isEditMode: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onSubmit: FormEventHandler<HTMLFormElement>;
  onToggleMode: () => void;
}

/**
 * 입력폼에 대한 state와 handler를 반환
 */
export const useFormWithEditView = (): UseFormWithEditView => {
  const [viewValue, setViewValue] = useState('');
  const [editInput, setEditInput] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEditMode = () => setIsEditMode((prev: boolean) => !prev);

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setViewValue(editInput);
  };

  const handleEditValueChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEditInput(e.target.value);
  };

  return {
    viewValue,
    editInput,
    isEditMode,
    onChange: handleEditValueChange,
    onSubmit: handleFormSubmit,
    onToggleMode: toggleEditMode,
  };
};
