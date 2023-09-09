import { useState } from 'react';

import { getCategoryListFromStorage } from '@/utils/category';
import { Container, FlexItem } from './Todos.style';
import { CategoryAddForm } from './CategoryAddForm';
import { TodoEmpty } from './TodoEmpty';
import { TodoList } from './TodoList';
import { TodoProvider } from './TodoContext';

export const Todos = () => {
  const [categoryList, setCategoryList] = useState<string[]>(getCategoryListFromStorage() ?? []);

  const addCategory = (category: string) => setCategoryList((prev) => [...prev, category]);

  return (
    <Container>
      <FlexItem>
        {categoryList.length === 0 ? (
          <TodoEmpty />
        ) : (
          categoryList.map((category) => (
            <TodoProvider key={category} value={category}>
              <TodoList />
            </TodoProvider>
          ))
        )}
      </FlexItem>
      <CategoryAddForm addCategory={addCategory} />
    </Container>
  );
};
