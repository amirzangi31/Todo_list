import React, { useContext, useRef, useState } from "react";
//CONTEXT
import { TodoContext } from "../context/TodoContextProvider";

function AddTodo() {
  //CONTEXT
  const { dispatch } = useContext(TodoContext);
  //STATE
  const [todo, setTodo] = useState("");
  //REF
  const input = useRef()
  //HANDLERS
  const changeHandler = (e) => {
    setTodo(e.target.value);
    
  };
  const addHandler = () => {

    if(!todo.trim()){
      //VALIDATE 
      alert("please enter your todo")
      return;
    }
    dispatch({ type: "ADD_TODO", payload: todo });
    setTodo("")
    input.current.focus()
  };
  return (
    <div className="w-11/12 mx-auto flex">
      <input
        className="flex-grow mr-2 rounded-lg px-3"
        name="text"
        ref={input}
        value={todo}
        onChange={changeHandler}
      />
      <button
        type="button"
        className="bg-white p-1 rounded-lg"
        onClick={addHandler}
      >
        Add Todo
      </button>
    </div>
  );
}

export default AddTodo;
