import { ReactNode } from 'react';
import { Text } from '../Text';
import { CardStyled } from './styles';

interface CardProps {
  title?: string;
  children?: ReactNode;
}

export const Card = ({ ...props }: CardProps) => {
  return (
    <CardStyled>
      <Text $color="primary">{props.title}</Text>
      {props.children}
    </CardStyled>
  );
};
