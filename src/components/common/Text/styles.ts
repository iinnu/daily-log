import { styled } from 'styled-components';
import { Colors, FontSize, FontWeight } from '@/styles/theme';

export interface TextStypedProps {
  $color?: keyof Colors;
  $fontSize?: keyof FontSize;
  $fontWeight?: keyof FontWeight;
}

export const TextStyled = styled.div<TextStypedProps>`
  color: ${({ $color, theme: { colors } }) => ($color ? colors[`${$color}`] : colors.black)};
  font-size: ${({ $fontSize, theme: { fontSize } }) => ($fontSize ? fontSize[`${$fontSize}`] : fontSize.text)}px;
  font-weight: ${({ $fontWeight, theme: { fontWeight } }) =>
    $fontWeight ? fontWeight[`${$fontWeight}`] : fontWeight.regular};
`;
