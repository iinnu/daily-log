import styled from 'styled-components';

export const Form = styled.form<{ $vertical?: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.$vertical ? 'column' : 'row')};
  gap: 8px;
`;
