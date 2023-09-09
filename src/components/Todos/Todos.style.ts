import { styled } from 'styled-components';

import { BoxStyled } from '../common/Box/Box.style';

export const Container = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Inner = styled(BoxStyled)`
  flex-grow: 1;
`;
