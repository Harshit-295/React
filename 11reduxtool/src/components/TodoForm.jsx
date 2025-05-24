import React, { useState } from "react";
import { addTodo} from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

function TodoForm() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-700">
      <h2 className="text-2xl font-bold text-white mb-4 text-center">➕ Add a New Todo</h2>
      <form
        onSubmit={addTodoHandler}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <input
          type="text"
          className="flex-1 w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 transition-colors duration-200 ease-in-out"
          placeholder="Enter a todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="w-full sm:w-auto bg-indigo-500 text-white px-6 py-2 rounded hover:bg-indigo-600 transition"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
