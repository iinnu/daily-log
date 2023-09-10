import styled from 'styled-components';

export const Input = styled.input`
  flex-grow: 1;
  padding: 5px;
  font-size: 16px;
  outline: none;
  border: none;
  border-bottom: 1px solid gray;

  &:focus {
    border-bottom-width: 2px;
    border-bottom-color: ${(props) => props.theme.colors.primary};
  }
`;
