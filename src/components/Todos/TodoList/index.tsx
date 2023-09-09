import { useTodoStateContext } from '@/context/hooks';

import { Category } from '../Category';
import { TodoItem } from '../TodoItem';
import { TodoUpdateForm } from '../TodoUpdateForm';
import { TodoListWrapper, TodoItemsWrapper } from './TodoList.style';

export const TodoList = () => {
  const { todoList, category } = useTodoStateContext();

  return (
    <TodoListWrapper>
      <Category title={category} />
      <TodoItemsWrapper>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} item={todo} />
        ))}
        <TodoUpdateForm />
      </TodoItemsWrapper>
    </TodoListWrapper>
  );
};
