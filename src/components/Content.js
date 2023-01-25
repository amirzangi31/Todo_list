import React, { useContext } from "react";

//COMPONENTS
import Todo from "./Todo";
//CONTEXT
import { TodoContext } from "../context/TodoContextProvider";

function Content() {
  const state = useContext(TodoContext);
  const { todos } = state.state;
  if (!todos.length)
    return (
      <div className="w-11/12 mx-auto text-white h-40 grid place-content-center">
        <h1 className="text-3xl">Todo Content is empty</h1>
      </div>
    );

  return (
    <div className=" mt-10 w-11/12 mx-auto rounded-lg  ">
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
}

export default Content;
