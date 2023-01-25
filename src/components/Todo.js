import React, { useContext, useState } from "react";

//REACT-ICONS
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { MdEditOff } from "react-icons/md";
import { TbStarOff } from "react-icons/tb";

//CONTEXTS
import { TodoContext } from "../context/TodoContextProvider";

function Todo(props) {
  //CONTEXT
  const { dispatch } = useContext(TodoContext);
  //STATE
  const [activeEdit, setActiveEdit] = useState(false);
  const { id, title, completed , index } = props;
  const [textEdit, setTextEdit] = useState("");
  
  //HANDLERS
  const activeHandler = () => {
    setActiveEdit(true);
  };
  const editHandler = () => {
    dispatch({ type: "EDIT", payload: { id, text: textEdit } });
    setActiveEdit(false);
    setTextEdit("");
  };
  const unActiveHandler = () => {
    setActiveEdit(false);
    setTextEdit("");
  };
  return (
    <div
      className={`
    ${completed ? "bg-green-500 text-white font-bold border" : "bg-white "}
    flex justify-between items-center p-2  my-4 rounded-lg 
    `}
    >
      <span>
        {index + 1}-{title}
      </span>
      {activeEdit && (
        <div className="flex justify-center items-center">
          <input
            className={`
            ${completed ? "bg-white text-green-900" : "bg-green-900 text-white"}

             font-normal px-1
            `}
            value={textEdit}
            onChange={(e) => setTextEdit(e.target.value)}
          />
          <button
            type="button"
            className={`
           ${completed ? "bg-white text-green-900" : "bg-green-900 text-white"}
        mx-2 px-2`}
            onClick={editHandler}
          >
            Edit
          </button>
        </div>
      )}

      <div className="text-2xl flex justify-between items-center">
        <AiFillDelete
          className="mx-2 cursor-pointer text-teal-700"
          onClick={() => dispatch({ type: "REMOVE_TODO", payload: id })}
        />
        {activeEdit ? (
          <MdEditOff
            className={`
            ${completed ? "text-white" : "text-green-900"}
            mx-2 cursor-pointer `}
            onClick={unActiveHandler}
          />
        ) : (
          <AiFillEdit
            className="mx-2 cursor-pointer text-teal-700"
            onClick={activeHandler}
          />
        )}

        {completed ? (
          <TbStarOff
            className="mx-2 cursor-pointer text-teal-700"
            onClick={() => dispatch({ type: "NO_ACTIVE", payload: id })}
          />
        ) : (
          <TiTick
            className="mx-2 cursor-pointer text-teal-700"
            onClick={() => dispatch({ type: "ACTIVE", payload: id })}
          />
        )}
      </div>
    </div>
  );
}

export default Todo;
