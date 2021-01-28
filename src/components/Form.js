import React from "react";
import Button from "./Button";
import Input from "./Input";

export default function Form({ setInputText, todos, setTodos, inputText }) {
  //Here I can write javascript code and functions
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (!inputText) return;
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  return (
    <form>
      <Input
        className="task-input"
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        placeholder="Add new task"
      />
      <Button
        className="submit-button"
        onClick={submitTodoHandler}
        type="submit"
        label="Add"
      />
    </form>
  );
}
