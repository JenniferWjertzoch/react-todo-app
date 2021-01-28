import React, { useState } from "react";
import { render } from "react-dom";
//Importing Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

//Create App component
const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="app">
      <header>My Todo List</header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <TodoList setTodos={setTodos} todos={todos} />
      <footer></footer>
    </div>
  );
};

render(<App />, document.getElementById("root"));
