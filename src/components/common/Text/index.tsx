import { ReactNode } from 'react';
import { TextStypedProps, TextStyled } from './styles';

interface TextProps extends TextStypedProps {
  children?: ReactNode;
}

export const Text = ({ ...props }: TextProps) => {
  return (
    <TextStyled $color={props.$color} $fontSize={props.$fontSize} $fontWeight={props.$fontWeight}>
      {props.children}
    </TextStyled>
  );
};
