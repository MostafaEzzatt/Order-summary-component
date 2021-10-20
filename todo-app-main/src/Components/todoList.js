import { useState } from "react";

import CheckIcon from "../Images/icon-check.svg";
import CrossIcon from "../Images/icon-cross.svg";

const TodoList = ({ todoList, setTodoList }) => {
  const [todoFilter, setTodoFilter] = useState("all");
  const filterList = [
    { visible: "All", state: "all" },
    { visible: "Active", state: false },
    { visible: "Completed", state: true },
  ];

  // Handle Delete
  const handleDelete = (todoID) => {
    const newTodo = todoList.filter((todo) => {
      return todo.id != todoID;
    });

    setTodoList(newTodo);
  };

  // Handle Done
  const handleDone = (todoID) => {
    const newTodo = todoList.filter((todo) => {
      if (todo.id == todoID) {
        todo.done = !todo.done;
      }
      return todo;
    });

    setTodoList(newTodo);
  };

  //Clear Complete
  const clearComplete = () => {
    const newTodo = todoList.filter((todo) => {
      if (!todo.done) {
        return todo;
      }
    });

    setTodoList(newTodo);
  };
  return (
    <>
      <div className="container ">
        <div className="todo-list">
          {todoList.map((todo) => {
            if (todo.done == todoFilter) {
              return (
                <Todo
                  todo={todo}
                  handleDone={handleDone}
                  handleDelete={handleDelete}
                />
              );
            }
            if (todoFilter == "all") {
              return (
                <Todo
                  todo={todo}
                  handleDone={handleDone}
                  handleDelete={handleDelete}
                />
              );
            }
          })}

          <div className="todo-list__item">
            <div className="todo-list__item__status">
              <CountLeft todoList={todoList} filter={todoFilter} />
            </div>
            <Filter
              todoFilter={todoFilter}
              setTodoFilter={setTodoFilter}
              filterList={filterList}
              customCss="md-show"
            />
            <div
              className="todo-list__item__clear-complete pointer"
              onClick={() => clearComplete()}
            >
              Clear Completed
            </div>
          </div>
        </div>

        <Filter
          todoFilter={todoFilter}
          setTodoFilter={setTodoFilter}
          filterList={filterList}
          customCss="md-hide"
        />
      </div>
    </>
  );
};

const CountLeft = ({ todoList }) => {
  const count = todoList.filter((item) => {
    if (item.done != true) {
      return item;
    }
  });

  return `${count.length} items left`;
};

const Todo = ({ todo, handleDone, handleDelete }) => {
  return (
    <div className={`todo-list__item ${todo.done && "done"}`}>
      <div
        className="todo-list__item__state pointer"
        onClick={() => handleDone(todo.id)}
      >
        {todo.done && <CheckIcon />}
      </div>
      <div
        className="todo-list__item__content pointer"
        onClick={() => handleDone(todo.id)}
      >
        {todo.content}
      </div>
      <div
        className="todo-list__item__delete pointer"
        onClick={() => handleDelete(todo.id)}
      >
        <CrossIcon />
      </div>
    </div>
  );
};

const Filter = ({ todoFilter, setTodoFilter, filterList, customCss }) => {
  console.log(customCss);
  return (
    <ul className={`todo-list__filter ${customCss}`}>
      {filterList.map((item) => {
        return (
          <li
            onClick={() => setTodoFilter(item.state)}
            className={`pointer ${item.state == todoFilter && "active"}`}
          >
            {item.visible}
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
