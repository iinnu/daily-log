import { styled } from 'styled-components';

import { BoxStyled } from '../common/Box/Box.style';

export const Container = styled.div`
  flex-grow: 4;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FlexItem = styled(BoxStyled)`
  flex-grow: 1;
`;

export const TodoWrapper = styled.div`
  margin-bottom: 15px;
`;

export const TodoItemsWrapper = styled.div`
  padding: 15px 30px;
`;

export const CategoryAddButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  border: none;
  padding: 10px;
  border-radius: 5px;
`;

export const Form = styled.form`
  display: flex;
  gap: 10px;
`;
