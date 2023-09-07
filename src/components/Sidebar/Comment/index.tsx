import { ChangeEvent, useState } from 'react';

import { Card } from '@/components/common/Card';
import { Button, ButtonArea, CommentBox, TextArea } from './Comment.style';

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
            <Button onClick={handleEditClick}>EDIT</Button>
          </ButtonArea>
        </>
      )}
      {isEdit && (
        <>
          <TextArea value={textAreaValue} onChange={handleTextAreaValueChange} />
          <ButtonArea>
            <Button onClick={handleDoneClick}>DONE</Button>
            <Button onClick={handleCancelClick}>CANCEL</Button>
          </ButtonArea>
        </>
      )}
    </Card>
  );
};
