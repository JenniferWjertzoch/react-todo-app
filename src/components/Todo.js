import React, { useState } from "react";
import Checkbox from "./Checkbox";
import Button from "./Button";

export default function App({ todo, todos, setTodos, text }) {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const [checked, setChecked] = useState(false);
  return (
    <div className="todo-list">
      <Checkbox
        checked={checked}
        onChange={(val) => setChecked(val)}
        label={text}
      />
      <Button
        onClick={deleteHandler}
        className="delete-button"
        label="Delete"
      />
    </div>
  );
}
