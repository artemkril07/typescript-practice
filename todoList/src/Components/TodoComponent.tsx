import React, { useState } from "react";
import type { TaskAction } from "../reducers/todoReducer";

interface todoCompProps {
  dispatch: React.Dispatch<TaskAction>;
}

export const TodoComponent = ({ dispatch }: todoCompProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    dispatch({ type: "ADD_TASK", payload: inputValue });
    setInputValue("");
  };

  return (
    <div>
      <div>
        <form
          action=""
          className="flex justify-center gap-5 mt-50"
          onSubmit={handleSubmit}
        >
          <label htmlFor="todoList"></label>
          <input
            type="text"
            placeholder="Write your task"
            className="border rounded-xl pl-2"
            id="todoList"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="border rounded-xl p-2" type="submit">
            Add task
          </button>
        </form>
      </div>
    </div>
  );
};
