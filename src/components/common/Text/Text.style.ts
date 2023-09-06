import { styled } from 'styled-components';

import { Colors, FontSize } from '@/styles/theme';

interface StyledTextProps {
  color?: keyof Colors;
  size?: keyof FontSize;
}

export const TextStyled = styled.div<StyledTextProps>`
  color: ${(props) => props.theme.colors.white};
`;
