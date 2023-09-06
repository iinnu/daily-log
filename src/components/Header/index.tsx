import { ReactNode } from 'react';

import { HeaderStyled } from './Header.style';

export const Header = ({ children }: { children: ReactNode }) => {
  return <HeaderStyled>{children}</HeaderStyled>;
};
