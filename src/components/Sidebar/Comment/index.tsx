import { ChangeEvent, useState } from 'react';

import { Card } from '@/components/common/Card';
import { ButtonArea, CommentBox, TextArea } from './Comment.style';
import { Button } from '@/components/common/Button';

export const Comment = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [comment, setComment] = useState('The darkest hour is just before the dawn.');
  const [textAreaValue, setTextAreaValue] = useState('The darkest hour is just before the dawn.');

  const handleEditClick = () => setIsEdit(true);
  const handleCancelClick = () => {
    setIsEdit(false);
    setTextAreaValue(comment);
  };
  const handleDoneClick = () => {
    setIsEdit(false);
    setComment(textAreaValue);
  };
  const handleTextAreaValueChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
  };

  return (
    <Card title="COMMENT">
      {!isEdit && (
        <>
          <CommentBox>{comment}</CommentBox>
          <ButtonArea>
            <Button $variant="contained" onClick={handleEditClick}>
              EDIT
            </Button>
          </ButtonArea>
        </>
      )}
      {isEdit && (
        <>
          <TextArea value={textAreaValue} onChange={handleTextAreaValueChange} />
          <ButtonArea>
            <Button onClick={handleCancelClick}>CANCEL</Button>
            <Button $variant="contained" onClick={handleDoneClick}>
              DONE
            </Button>
          </ButtonArea>
        </>
      )}
    </Card>
  );
};
