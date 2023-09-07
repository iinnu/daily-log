import { styled } from 'styled-components';

export const CommentBox = styled.div`
  padding: 20px;
  line-height: 1.5;
`;

export const TextArea = styled.textarea`
  padding: 20px;
  line-height: 1.5;
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: end;
  gap: 5px;
`;

export const Button = styled.button`
  padding: 5px;
  background-color: unset;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  color: ${(props) => props.theme.colors.primary};
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }
`;
