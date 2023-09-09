import { styled } from 'styled-components';

export const CategoryStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 20px;
`;
