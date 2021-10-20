import { useState } from "react";

const Input = ({ todoList, setTodoList }) => {
  const [todo, setTodo] = useState("");

  const handlekeyDown = (e) => {
    if (e.key == "Enter") {
      const newTodo = {
        id: new Date().getTime(),
        content: e.target.value,
        done: false,
      };

      setTodoList([...todoList, newTodo]);
      setTodo("");
    }
  };
  return (
    <div className="container input">
      <input
        type="text"
        name="todo"
        placeholder="Create a new todo"
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={handlekeyDown}
        value={todo}
        maxlength="34"
      />
    </div>
  );
};

export default Input;
