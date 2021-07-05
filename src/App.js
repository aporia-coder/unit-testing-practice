import { useState } from "react";
import "./App.css";

// Components
import Todo from "./components/Todo";
import Form from "./components/Form";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { body: value, completed: false }]);
    setValue("");
  };

  const setCompleted = (id) => {
    const newTodos = [...todos];
    newTodos[id].completed = !newTodos[id].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = [...todos];
    newTodos.splice(id, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      {todos.map((todo, idx) => (
        <Todo
          {...todo}
          id={idx}
          key={idx}
          setCompleted={setCompleted}
          deleteTodo={deleteTodo}
        />
      ))}
      <Form handleSubmit={handleSubmit} setValue={setValue} value={value} />
    </div>
  );
}

export default App;
