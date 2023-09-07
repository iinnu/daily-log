import styled from 'styled-components';

interface ButtonProps {
  $variant?: 'contained' | 'outlined';
  $size?: 'sm' | 'md' | 'lg';
}

export const Button = styled.button<ButtonProps>`
  padding: ${(props) => (props.$size === 'lg' ? 15 : props.$size === 'md' ? 10 : 5)}px;
  background-color: ${(props) => (props.$variant === 'contained' ? props.theme.colors.primary : 'unset')};
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  color: ${(props) => (props.$variant === 'contained' ? props.theme.colors.white : props.theme.colors.primary)};
`;
