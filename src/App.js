import React, { useState } from "react";
import TodoList from "./TodoComponets/TodoList";
import Context from "./context";
import AddTodo from "./TodoComponets/AddTodo";

const App = () => {
  const [todos, setTodos] = useState([]);

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (title) => {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  };

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>Todo list by Egoro</h1>
        <AddTodo onCreate={addTodo}></AddTodo>
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo}></TodoList>
        ) : (
          <p>No todos</p>
        )}
      </div>
    </Context.Provider>
  );
};

export default App;
