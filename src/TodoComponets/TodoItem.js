import React, { useContext } from "react";
import Context from "../context";

const TodoItem = ({ todo, index, onChange }) => {
  const { removeTodo } = useContext(Context);
  console.log(todo);
  const classNames = [];
  const TODO__TEXT = "todo__text";
  if (todo.completed) {
    classNames.push("done");
  }

  return (
    <li className="todo__item">
      <span className={classNames.join(" ")}>
        <input
          className="todo__input"
          checked={todo.completed}
          type="checkbox"
          onChange={() => {
            onChange(todo.id);
          }}
        />
        <span className={TODO__TEXT + " " + classNames.join(" ")}>
          {todo.title}
        </span>
      </span>
      <button className="todo__btn" onClick={() => removeTodo(todo.id)}>
        &times;
      </button>
    </li>
  );
};

export default TodoItem;
