import React from "react";
// import Button from "../components/Button";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

function TodoLayout() {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleClick = () => {
    //Appending new todo to previous array of todos
    setTodoList([...todoList, todoText]);
    setTodoText("");
  };

  const handleDelete = (todo) => {
    setTodoList(todoList.filter((listtodo) => listtodo !== todo));
  };

  const handleInput = (e) => {
    setTodoText(e.target.value);
  };

  return (
    <div>
      {/* <input type="text" value={todoText} onChange={handleInput} /> */}
      <TextField
        id="outlined-name"
        label="Name"
        size="small"
        value={todoText}
        onChange={handleInput}
        sx={{background: "white"}}
      />

      <Button variant="contained" onClick={handleClick}>
        Add Todo
      </Button>

      {/* <Button label="Add Todo" clickHandler={handleClick} /> */}
      <ol>
        {todoList.map((todo, index) => {
          return (
            <li key={index}>
              {todo}{" "}
              <Button variant="contained" onClick={() => handleDelete(todo)} color="error">
                Delete
              </Button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default TodoLayout;
