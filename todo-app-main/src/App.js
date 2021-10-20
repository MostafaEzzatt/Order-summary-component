import { useState } from "react";

import "./Styles/include.scss";

// Components
import Header from "./Components/header";
import Input from "./Components/input";
import TodoList from "./Components/todoList";

let list = [
  {
    id: 1,
    content: "this is the first todo",
    done: true,
  },
  {
    id: 2,
    content: "this is the second todo",
    done: false,
  },
  {
    id: 3,
    content: "this is the third todo",
    done: false,
  },
  {
    id: 4,
    content: "Complete todo app on frontend mentor",
    done: false,
  },
];

function App() {
  const [todoList, setTodoList] = useState(list);

  return (
    <>
      <Header />
      <Input todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}
export default App;
