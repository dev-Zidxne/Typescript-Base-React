import Todo from "../models/todo";
import classes from "./TodoItem.module.css";

interface Props {
  todo: Todo;
}
export const TodoItem = ({ todo }: Props) => {
  return <li className={classes.item}>{todo.text}</li>;
};

export default TodoItem;
