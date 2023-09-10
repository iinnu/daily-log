import { useCategoryContext } from '@/context/hooks';
import { TodoProvider } from '@/context/provider';
import { CategoryAddForm } from './CategoryAddForm';
import { TodoEmpty } from './TodoEmpty';
import { TodoList } from './TodoList';
import { Container, Inner } from './Todos.style';

export const Todos = () => {
  const { categoryList } = useCategoryContext();

  return (
    <Container>
      <Inner>
        {categoryList.length === 0 ? (
          <TodoEmpty />
        ) : (
          categoryList.map((category) => (
            <TodoProvider key={category} category={category}>
              <TodoList />
            </TodoProvider>
          ))
        )}
      </Inner>
      <CategoryAddForm />
    </Container>
  );
};
