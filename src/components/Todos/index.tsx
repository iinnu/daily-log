import { useCategoryContext } from '@/context/hooks';
import { TodoProvider } from '@/context/provider';
import { CategoryAddForm } from './CategoryAddForm';
import { TodoEmpty } from './TodoEmpty';
import { TodoList } from './TodoList';
import { Container, FlexItem } from './Todos.style';

export const Todos = () => {
  const { categoryList } = useCategoryContext();

  return (
    <Container>
      <FlexItem>
        {categoryList.length === 0 ? (
          <TodoEmpty />
        ) : (
          categoryList.map((category) => (
            <TodoProvider key={category} category={category}>
              <TodoList />
            </TodoProvider>
          ))
        )}
      </FlexItem>
      <CategoryAddForm />
    </Container>
  );
};
