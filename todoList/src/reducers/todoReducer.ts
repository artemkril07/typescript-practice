export type TaskAction =
  | { type: "ADD_TASK"; payload: string }
  | { type: "DELETE_TASK"; payload: number };

export interface Task {
  id: number;
  text: string;
}

export const tasks: Task[] = [
  { id: Date.now(), text: "Buy a bread" },
];

export const taskReducer = (state: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD_TASK":
      const newTask :Task = {
        id: Date.now(),
        text: action.payload,
      };
      return [...state, newTask];
    case "DELETE_TASK":
      return [...state].filter((task)=>
      task.id !== action.payload
      );
      default:
      return state
  }
};
