import React, { useState } from "react";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { TodoType } from "./types/Types";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "./redux/todoSlice";

interface TodoProps {
  todoProps: TodoType;
}

const Todo = ({ todoProps }: TodoProps) => {
  const { id, content } = todoProps;

  const [edtable, setEditable] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>(content);

  const dispatch = useDispatch();

  const handleRemoveTodo = () => {
    dispatch(removeTodo(id));
  };

  const hadleUpdateTodo = () => {
    const payload: TodoType = {
      id: id,
      content: newTodo,
    };
    dispatch(updateTodo(payload));
    setEditable(false);
  };

  return (
    <>
      <div className="todo-list">
        {edtable ? (
          <input
            style={{
              border: "none",
              outline: "none",
              borderBottom: "1px solid lightgrey",
            }}
            type="text"
            value={newTodo}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewTodo(e.target.value)
            }
          />
        ) : (
          <div>{content}</div>
        )}
        <div className="icons">
          <IoMdRemoveCircleOutline
            onClick={handleRemoveTodo}
            className="remove-btn"
          />
          {edtable ? (
            <FaCheck className="edit-btn" onClick={hadleUpdateTodo} />
          ) : (
            <FaRegEdit onClick={() => setEditable(true)} className="edit-btn" />
          )}
        </div>
      </div>
    </>
  );
};

export default Todo;
