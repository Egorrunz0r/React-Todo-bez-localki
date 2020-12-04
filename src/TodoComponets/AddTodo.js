import React, { useState } from "react";

const AddTodo = ({ onCreate }) => {
  const [value, setValue] = useState("");

  const submitPrevent = (e) => {
    e.preventDefault();
    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
  };
  return (
    <form className="todo__form" onSubmit={submitPrevent}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button className="form__btn" type="submit">
        add
      </button>
    </form>
  );
};

export default AddTodo;
