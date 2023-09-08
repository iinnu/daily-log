import { ChangeEventHandler, FormEventHandler, useState } from 'react';

import { AddCategory } from '@/utils/category';
import { Button } from '../common/Button';
import { Input } from '../common/Input';
import { Category } from './Category';
import { TodoEmpty } from './TodoEmpty';
import { TodoItem } from './TodoItem';
import { Container, TodoWrapper, TodoItemsWrapper, FlexItem, Form } from './Todos.style';

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
  const [category, setCategory] = useState('');

  const handleCategoryInputChange: ChangeEventHandler<HTMLInputElement> = (e) => setCategory(e.target.value);

  const handleCategorySumbit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (category.trim() === '') {
      alert('카테고리명을 입력해주세요.');
      return;
    }

    AddCategory(category);
  };

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
      <Form onSubmit={handleCategorySumbit}>
        <Input name="category" value={category} onChange={handleCategoryInputChange} />
        <Button $variant="contained" $size="md">
          카테고리 추가
        </Button>
      </Form>
    </Container>
  );
};
