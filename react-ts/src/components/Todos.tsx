import Todo from "../models/todo";
import { TodoItem } from "./TodoItem";

interface Props {
  items: Todo[];
}
export const Todos = ({ items }: Props) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <TodoItem key={item.id} todo={item} />
        ))}
      </ul>
    </div>
  );
};
