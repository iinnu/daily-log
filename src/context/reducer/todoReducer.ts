import { TodoItemData } from 'types/todo';

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_TODO_COMPLETED = 'TOGGLE_TODO_COMPLETED';
const UPDATE_TODO_TITLE = 'UPDATE_TODO_TITLE';

interface AddTodoAction {
  type: typeof ADD_TODO;
  todo: TodoItemData;
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  id: string;
}

interface ToggleTodoCompletedAction {
  type: typeof TOGGLE_TODO_COMPLETED;
  id: string;
  completed: boolean;
}

interface UpdateTodoTitleAction {
  type: typeof UPDATE_TODO_TITLE;
  id: string;
  title: string;
}

export const addTodo = (todo: TodoItemData): AddTodoAction => {
  return {
    type: ADD_TODO,
    todo,
  };
};

export const deleteTodo = (id: string): DeleteTodoAction => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const toggleTodoCompleted = (id: string, completed: boolean): ToggleTodoCompletedAction => {
  return {
    type: TOGGLE_TODO_COMPLETED,
    id,
    completed,
  };
};

export const updateTodoTitle = (id: string, title: string): UpdateTodoTitleAction => {
  return {
    type: UPDATE_TODO_TITLE,
    id,
    title,
  };
};

export type TodoAction = AddTodoAction | DeleteTodoAction | ToggleTodoCompletedAction | UpdateTodoTitleAction;

const reducer = (state: TodoItemData[], action: TodoAction): TodoItemData[] => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case TOGGLE_TODO_COMPLETED:
      return state.map((todo) => {
        if (todo.id !== action.id) return todo;
        return { ...todo, completed: action.completed };
      });
    case UPDATE_TODO_TITLE:
      return state.map((todo) => {
        if (todo.id !== action.id) return todo;
        return { ...todo, title: action.title };
      });
    default:
      return state;
  }
};

export default reducer;
