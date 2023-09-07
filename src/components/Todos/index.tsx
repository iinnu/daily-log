import { useState } from 'react';

import { TodoEmpty } from './TodoEmpty';
import { Category } from './Category';
import { TodoItem } from './TodoItem';
import { Container, TodoWrapper, TodoItemsWrapper, FlexItem, CategoryAddButton } from './Todos.style';

interface TodoItemData {
  title: string;
  completed: boolean;
}

interface TodoData {
  category: string;
  todos: TodoItemData[];
}

export const Todos = () => {
  const [todos] = useState<TodoData[]>([
    {
      category: 'Study',
      todos: [
        {
          title: '모듈 시스템 공부',
          completed: true,
        },
        {
          title: '웹팩 공부',
          completed: false,
        },
      ],
    },
    {
      category: 'Workout',
      todos: [],
    },
    {
      category: 'Housework',
      todos: [
        {
          title: '빨래 널기',
          completed: false,
        },
      ],
    },
  ]);

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
      <CategoryAddButton>카테고리 추가</CategoryAddButton>
    </Container>
  );
};
