import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/theme";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const { darkStyles } = useContext(ThemeContext);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [{ id: Date.now(), text: todo }, ...prevTodos]);
  };

  const editTodo = (id, newText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleAddTodo = () => {
    if (inputValue) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  const handleEditTodo = (id) => {
    if (editValue) {
      editTodo(id, editValue);
      setEditId(null);
      setEditValue("");
    }
  };

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold">Todo List</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={`border p-2 rounded mt-2 ${darkStyles}`}
        placeholder="Add new todo"
      />
      <button
        onClick={handleAddTodo}
        className="bg-blue-500 text-white p-2 rounded ml-2"
      >
        Add
      </button>

      <ul className="mt-4">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center justify-between mt-2">
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className={`border p-2 rounded ${darkStyles}`}
                />
                <button
                  onClick={() => handleEditTodo(todo.id)}
                  className="bg-green-500 text-white p-2 rounded ml-2"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span>{todo.text}</span>
                <div>
                  <button
                    onClick={() => {
                      setEditId(todo.id);
                      setEditValue(todo.text);
                    }}
                    className="bg-yellow-500 text-white p-2 rounded ml-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => removeTodo(todo.id)}
                    className="bg-red-500 text-white p-2 rounded ml-2"
                  >
                    Remove
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
