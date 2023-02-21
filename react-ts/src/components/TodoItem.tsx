import Todo from "../models/todo";

interface Props {
  todo: Todo;
}
export const TodoItem = ({ todo }: Props) => {
  return <li>{todo.text}</li>;
};

export default TodoItem;
