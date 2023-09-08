/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';

import { Category } from './Category';
import { TodoEmpty } from './TodoEmpty';
import { TodoItem } from './TodoItem';
import { CategoryAddForm } from './CategoryAddForm';
import { Container, TodoWrapper, TodoItemsWrapper, FlexItem } from './Todos.style';
import { getCategoryListFromStorage } from '@/utils/category';

interface TodoItemData {
  key: string;
  title: string;
  completed: boolean;
}

export const Todos = () => {
  const [categoryList, setCategoryList] = useState<string[]>(getCategoryListFromStorage() ?? []);

  const addCategory = (category: string) => setCategoryList((prev) => [...prev, category]);

  return (
    <Container>
      <FlexItem>
        {categoryList.length === 0 && <TodoEmpty />}
        {categoryList.length > 0 &&
          categoryList.map((category) => (
            <TodoWrapper key={category}>
              <Category title={category} />
            </TodoWrapper>
          ))}
      </FlexItem>
      <CategoryAddForm addCategory={addCategory} />
    </Container>
  );
};
