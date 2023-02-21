import "./App.css";
import { Todos } from "./components/Todos";

function App() {
  return (
    <div>
      <Todos todos={["Learn Typescript", "Complete React"]} />
    </div>
  );
}

export default App;
