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
