import { Text } from '../common/Text';
import { FooterStyled } from './Footer.style';

/**
 * @todo 하단에 고정되도록 수정해야 함
 */
export const Footer = () => {
  return (
    <FooterStyled>
      <Text>Copyrightⓒ 2023. iinnu. All rights reserved</Text>
    </FooterStyled>
  );
};
