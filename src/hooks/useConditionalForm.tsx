import { ChangeEventHandler, useState } from 'react';

interface UseConditionalForm {
  view: string;
  input: string;
  isFormMode: boolean;
  toggleMode: () => void;
  initInput: () => void;
  updateView: () => void;
  onChangeInput: ChangeEventHandler<HTMLInputElement>;
}

export const useConditionalForm = (): UseConditionalForm => {
  const [view, setView] = useState('');
  const [input, setInput] = useState('');
  const [isFormMode, setIsFormMode] = useState(false);

  const toggleMode = () => setIsFormMode((prev) => !prev);

  const initInput = () => setInput('');

  const updateView = () => {
    setView(input);
    setInput('');
  };

  const handleEditValueChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.target.value);
  };

  return {
    view,
    input,
    isFormMode,
    initInput,
    toggleMode,
    updateView,
    onChangeInput: handleEditValueChange,
  };
};
