import { styled } from 'styled-components';

export const BoxStyled = styled.div`
  border: 1px solid ${({ theme: { colors } }) => colors.border};
  border-radius: 10px;
  padding: 20px;
`;
