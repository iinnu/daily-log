 
import { ReactNode, createContext, useState } from 'react';

import { CategoryList } from 'types/todo';
import { getCategoryListFromStorage } from '@/utils/category';

interface CategoryContextObject {
  categoryList: CategoryList;
  addCategory: (category: string) => void;
  deleteCategory: (category: string) => void;
}

export const CategoryContext = createContext<CategoryContextObject | null>(null);

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [categoryList, setCategoryList] = useState(getCategoryListFromStorage() ?? []);

  const addCategory = (category: string) => setCategoryList((prev) => [...prev, category]);
  const deleteCategory = (category: string) => setCategoryList((prev) => prev.filter((item) => item !== category));

  const value = { categoryList, addCategory, deleteCategory };

  return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>;
};
