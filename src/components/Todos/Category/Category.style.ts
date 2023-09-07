import { styled } from 'styled-components';

export const CategoryStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 20px;
`;

export const TodoAddButton = styled.button`
  padding: 0 5px;
  font-size: 20px;
  font-weight: ${(props) => props.theme.fontWeight.medium};
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 50px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
`;
