import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTodo, removeTodo,completedTodo } from '../features/todo/todoSlice';

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  return (
    <div className="max-w-xl mx-auto mt-10 bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-700">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">📝 Your Todos</h2>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-sm"
            key={todo.id}
          >
            {editId === todo.id ? (
              <div className="flex items-center gap-2 w-full">
                <input
                  className="flex-1 px-3 py-2 rounded text-black outline-none"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                  onClick={() => {
                    dispatch(updateTodo({ id: todo.id, text: editText }));
                    setEditId(null);
                    setEditText("");
                  }}
                >
                  Save
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => dispatch(completedTodo(todo.id))}
                    className="h-5 w-5 accent-indigo-500"
                  />
                  <span
                    className={`text-lg text-white ${
                      todo.completed ? 'line-through text-gray-400' : ''
                    }`}
                  >
                    {todo.text}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="bg-blue-400 text-black px-3 py-1 rounded hover:bg-blue-500 transition"
                    onClick={() => {
                      setEditId(todo.id);
                      setEditText(todo.text);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  >
                    🗑️
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
