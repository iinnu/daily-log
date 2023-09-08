import { useState } from 'react';

import { getCategoryListFromStorage } from '@/utils/category';
import { Container, FlexItem } from './Todos.style';
import { CategoryAddForm } from './CategoryAddForm';
import { TodoEmpty } from './TodoEmpty';
import { TodoList } from './TodoList';

export const Todos = () => {
  const [categoryList, setCategoryList] = useState<string[]>(getCategoryListFromStorage() ?? []);

  const addCategory = (category: string) => setCategoryList((prev) => [...prev, category]);

  return (
    <Container>
      <FlexItem>
        {categoryList.length === 0 ? (
          <TodoEmpty />
        ) : (
          categoryList.map((category) => <TodoList key={category} category={category} />)
        )}
      </FlexItem>
      <CategoryAddForm addCategory={addCategory} />
    </Container>
  );
};
