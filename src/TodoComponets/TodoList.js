import React from "react";

import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <ul className="todo__list">
      {props.todos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            index={index}
            onChange={props.onToggle}
          ></TodoItem>
        );
      })}
    </ul>
  );
};

export default TodoList;
