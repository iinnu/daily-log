import { Text } from '@/components/common/Text';
import { HeaderStyled } from './Header.style';

/**
 * @todo 시간나면 다크모드 구현해보기
 */
export const Header = () => {
  return (
    <HeaderStyled>
      <Text $color="white" $fontSize="title" $fontWeight="semiBold">
        DAILY LOG
      </Text>
    </HeaderStyled>
  );
};
