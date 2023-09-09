import { ChangeEventHandler, useState } from 'react';

interface UseConditionalForm {
  view: string;
  input: string;
  isFormMode: boolean;
  toggleMode: () => void;
  resetInput: () => void;
  updateView: () => void;
  onChangeInput: ChangeEventHandler<HTMLInputElement>;
}

export const useConditionalForm = (initInput = '', initView = '', initMode = false): UseConditionalForm => {
  const [view, setView] = useState(initView);
  const [input, setInput] = useState(initInput);
  const [isFormMode, setIsFormMode] = useState(initMode);

  const toggleMode = () => setIsFormMode((prev) => !prev);

  const resetInput = () => setInput('');

  const updateView = () => setView(input);

  const onChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.target.value);
  };

  return {
    view,
    input,
    isFormMode,
    resetInput,
    toggleMode,
    updateView,
    onChangeInput,
  };
};
