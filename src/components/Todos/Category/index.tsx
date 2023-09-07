import { Text } from '@/components/common/Text';
import { CategoryStyled, TodoAddButton } from './Category.style';

interface CategoryProps {
  title: string;
}

export const Category = ({ title }: CategoryProps) => {
  return (
    <CategoryStyled>
      <Text $color="primary" $fontSize="subTitle" $fontWeight="bold">
        {title}
      </Text>
      <TodoAddButton>+</TodoAddButton>
    </CategoryStyled>
  );
};
