import { FaTrashCan } from 'react-icons/fa6';

import { useCategoryContext } from '@/context/hooks';

import { Text } from '@/components/common/Text';
import { IconButton } from '@/components/common/IconButton';
import { CategoryStyled } from './styles';

interface CategoryProps {
  title: string;
}

export const Category = ({ title }: CategoryProps) => {
  const { deleteCategory } = useCategoryContext();

  const handleCategoryDeleteClick = () => deleteCategory(title);

  return (
    <CategoryStyled>
      <Text $color="white" $fontSize="subTitle" $fontWeight="bold">
        {title}
      </Text>
      <IconButton onClick={handleCategoryDeleteClick}>
        <FaTrashCan color="white" size="16px" />
      </IconButton>
    </CategoryStyled>
  );
};
