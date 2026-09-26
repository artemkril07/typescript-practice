import type { Task } from "../reducers/todoReducer";
import type { TaskAction } from "../reducers/todoReducer";

interface ListCompProps {
  listTasks: Task[];
  dispatch: React.Dispatch<TaskAction>;
}

export const ListComponent = ({ listTasks, dispatch }: ListCompProps) => {
  return (
    <div>
      <div>
        <h3 className="ml-20 mt-10 underline">Your tasks</h3>
        <ol className="ml-20 list-decimal ">
          {listTasks.map((task) => (
            <li className="pt-5" key={task.id}>
              {task.text}{" "}
              <button
                className="ml-10 p-2 border border-black rounded-xl text-white bg-red-400"
                onClick={() =>
                  dispatch({ type: "DELETE_TASK", payload: task.id })
                }
              >
                Delete
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
