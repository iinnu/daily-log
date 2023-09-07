import { Category } from './Category';
import { TodoItem } from './TodoItem';
import { Container, TodoWrapper, TodoItemsWrapper } from './Todos.style';
import { MOCK_TODOS } from '@/constants';

export const Todos = () => {
  return (
    <Container>
      {MOCK_TODOS.map((item, index) => (
        <TodoWrapper key={`${item.category}-${index}`}>
          <Category title={item.category} />
          <TodoItemsWrapper>
            {item.todos.map((todo, index) => {
              const id = `${todo.title}-${index}`;
              return <TodoItem key={id} id={id} title={todo.title} completed={todo.completed} />;
            })}
          </TodoItemsWrapper>
        </TodoWrapper>
      ))}
    </Container>
  );
};
