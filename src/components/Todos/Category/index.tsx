import { Text } from '@/components/common/Text';
import { CategoryStyled, TodoAddButton } from './Category.style';

interface CategoryProps {
  title: string;
  onAddClick: () => void;
}

export const Category = ({ title, onAddClick }: CategoryProps) => {
  return (
    <CategoryStyled>
      <Text $color="primary" $fontSize="subTitle" $fontWeight="bold">
        {title}
      </Text>
      <TodoAddButton onClick={onAddClick}>+</TodoAddButton>
    </CategoryStyled>
  );
};
