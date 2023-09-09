import { styled } from 'styled-components';

export const TodoItemStyled = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const CheckboxBase = styled.div`
  flex-grow: 1;
`;

export const LabelStyled = styled.label`
  position: relative;
  top: -4px;
  left: 8px;
`;

export const HiddenCheckbox = styled.input`
  appearance: none;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  width: 20px;
  height: 20px;
  cursor: pointer;

  &:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-color: ${(props) => props.theme.colors.primary};
    background-size: 120% 120%;
    background-position: 50%;
  }
`;
