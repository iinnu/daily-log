import { ReactNode } from 'react';
import { BoxStyled } from './styles';

export const Box = ({ children = '' }: { children: ReactNode }) => {
  return <BoxStyled>{children}</BoxStyled>;
};
