import React from "react";

const Todo = ({ body, setCompleted, id, completed, deleteTodo }) => {
  return (
    <div>
      <h1 style={{ textDecoration: completed && "line-through" }}>{body}</h1>
      <button onClick={() => setCompleted(id)}>Set Completed</button>
      <button onClick={() => deleteTodo(id)}>Delete Todo</button>
    </div>
  );
};

export default Todo;
