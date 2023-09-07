import { styled } from 'styled-components';

import { BoxStyled } from '../common/Box/Box.style';

export const Container = styled(BoxStyled)`
  flex-grow: 1;
`;

export const TodoWrapper = styled.div`
  margin-bottom: 15px;
`;

export const TodoItemsWrapper = styled.div`
  padding: 15px 30px;
`;
