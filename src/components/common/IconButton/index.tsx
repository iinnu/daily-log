import { ReactNode } from 'react';
import { IconButtonBase, IconButtonProps, IconButtonStyled, IconButtonsStyled } from './IconButton.style';

export const IconButton = ({ children, ...props }: IconButtonProps) => {
  return (
    <IconButtonStyled {...props}>
      <IconButtonBase>{children}</IconButtonBase>
    </IconButtonStyled>
  );
};

export const IconButtons = ({ children, gap }: { children: ReactNode; gap?: number }) => {
  return <IconButtonsStyled $gap={gap}>{children}</IconButtonsStyled>;
};
