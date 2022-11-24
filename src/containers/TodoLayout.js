import React from "react";
import Button from "../components/Button";
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
        setTodoList(todoList.filter((listtodo) => listtodo !== todo))
    }

  const handleInput = (e) => {
    setTodoText(e.target.value);
  };

  return (
    <div>
      <input type="text" value={todoText} onChange={handleInput} />
      <Button label="Add Todo" clickHandler={handleClick} />
      <ol>
        {todoList.map((todo, index) => {
            return (
                <li key={index}>{todo} <Button label="Delete" clickHandler={() => handleDelete(todo)} /></li>
            );
        })}
      </ol>
    </div>
  );
}

export default TodoLayout;
