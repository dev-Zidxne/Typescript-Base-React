import Todo from "../models/todo";
import { TodoItem } from "./TodoItem";
import classes from "./Todos.module.css";

interface Props {
  items: Todo[];
}
export const Todos = ({ items }: Props) => {
  return (
    <div>
      <ul className={classes.todo}>
        {items.map((item) => (
          <TodoItem key={item.id} todo={item} />
        ))}
      </ul>
    </div>
  );
};
