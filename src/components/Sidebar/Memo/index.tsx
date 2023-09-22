import { useConditionalForm } from '@/hooks/useConditionalForm';
import { useLocalStorage } from '@/hooks/useLocalStorage';

import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import { ButtonArea, CommentBox, TextArea } from './styles';

export const Memo = () => {
  const [memo, setMemo] = useLocalStorage('memo', '');
  const { input, isFormMode, onChangeInput, toggleMode } = useConditionalForm(memo ?? '', memo ?? '');

  const handleMemoFormSubmit = () => {
    setMemo(input);
    toggleMode();
  };

  return (
    <Card title="MEMO">
      {isFormMode ? (
        <>
          <TextArea value={input} onChange={onChangeInput} />
          <ButtonArea>
            <Button $variant="outlined" onClick={toggleMode}>
              CANCEL
            </Button>
            <Button $variant="contained" onClick={handleMemoFormSubmit}>
              DONE
            </Button>
          </ButtonArea>
        </>
      ) : (
        <>
          <CommentBox>{memo}</CommentBox>
          <ButtonArea>
            <Button $variant="contained" onClick={toggleMode}>
              EDIT
            </Button>
          </ButtonArea>
        </>
      )}
    </Card>
  );
};
