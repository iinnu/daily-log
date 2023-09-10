import styled from 'styled-components';

import { Button, ButtonProps } from '../Button';

export interface IconButtonProps extends ButtonProps {}
export interface IconButtonsProps {
  $gap?: number;
}

export const IconButtonStyled = styled(Button)<IconButtonProps>`
  display: flex;
`;

export const IconButtonBase = styled.div`
  width: 15px;
  height: 15px;
`;

export const IconButtonsStyled = styled.div<IconButtonsProps>`
  display: flex;
  gap: ${(props) => (props.$gap ? props.$gap : 0)}px;
`;
