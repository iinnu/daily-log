import { useContext } from 'react';

import { CategoryContext } from '../provider';

export const useCategoryContext = () => {
  const context = useContext(CategoryContext);

  if (!context) {
    throw new Error('useCategoryContext must be used in CategoryProvider!');
  }

  return context;
};
