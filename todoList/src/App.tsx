import { TodoComponent } from "./Components/TodoComponent";
import { ListComponent } from "./Components/ListComponent";
import { taskReducer, tasks } from "./reducers/todoReducer";
import { useReducer } from "react";

function App() {
  const [state, dispatch] = useReducer(taskReducer, tasks);

  return (
    <>
      <TodoComponent dispatch={dispatch} />
      <ListComponent listTasks={state} dispatch={dispatch} />
    </>
  );
}

export default App;
