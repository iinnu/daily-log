import { useState } from 'react';

import { Button } from '../common/Button';
import { TodoEmpty } from './TodoEmpty';
import { Category } from './Category';
import { TodoItem } from './TodoItem';
import { Container, TodoWrapper, TodoItemsWrapper, FlexItem } from './Todos.style';

interface TodoItemData {
  title: string;
  completed: boolean;
}

interface TodoData {
  category: string;
  todos: TodoItemData[];
}

export const Todos = () => {
  const [todos] = useState<TodoData[]>([]);

  return (
    <Container>
      <FlexItem>
        {todos.length === 0 ? (
          <TodoEmpty />
        ) : (
          todos.map((item, index) => (
            <TodoWrapper key={`${item.category}-${index}`}>
              <Category title={item.category} />
              <TodoItemsWrapper>
                {item.todos.map((todo, index) => {
                  const id = `${todo.title}-${index}`;
                  return <TodoItem key={id} id={id} title={todo.title} completed={todo.completed} />;
                })}
              </TodoItemsWrapper>
            </TodoWrapper>
          ))
        )}
      </FlexItem>
      <Button $variant="contained" $size="md">
        카테고리 추가
      </Button>
    </Container>
  );
};
