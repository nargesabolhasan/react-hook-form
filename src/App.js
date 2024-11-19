// src/App.js
import React, { useContext } from "react";
import "./input.css";
import { ThemeContext, ThemeProvider } from "./context/theme";
import ThemeToggle from "./components/todo/toggle-theme";
import TodoList from "./components/todo";

const App = () => {
  const { darkStyles } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${darkStyles}`}
    >
      <ThemeToggle />
      <TodoList />
    </div>
  );
};

const Root = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default Root;
