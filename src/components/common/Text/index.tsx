import { ReactNode } from 'react';
import { TextStyled } from './Text.style';

export const Text = ({ children }: { children: ReactNode }) => {
  return <TextStyled>{children}</TextStyled>;
};
