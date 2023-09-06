import { ReactNode } from 'react';
import { BoxStyled } from './Box.style';

export const Box = ({ children = '' }: { children: ReactNode }) => {
  return <BoxStyled>{children}</BoxStyled>;
};
