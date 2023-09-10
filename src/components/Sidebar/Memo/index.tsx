import { useConditionalForm } from '@/hooks/useConditionalForm';
import { getMemoFromStorage, updateMemoInStorage } from '@/utils/memo';

import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import { ButtonArea, CommentBox, TextArea } from './styles';

/**
 * @todo 엔터 포함해서 출력하도록 css 수정
 */

export const Memo = () => {
  const memo = getMemoFromStorage();
  const { view, input, isFormMode, onChangeInput, toggleMode, updateView } = useConditionalForm(memo ?? '', memo ?? '');

  const handleMemoFormSubmit = () => {
    updateMemoInStorage(input);
    updateView();
    toggleMode();
  };

  return (
    <Card title="MEMO">
      {!isFormMode && (
        <>
          <CommentBox>{view}</CommentBox>
          <ButtonArea>
            <Button $variant="contained" onClick={toggleMode}>
              EDIT
            </Button>
          </ButtonArea>
        </>
      )}
      {isFormMode && (
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
      )}
    </Card>
  );
};
