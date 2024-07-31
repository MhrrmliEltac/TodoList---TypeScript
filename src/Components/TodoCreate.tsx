import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "./redux/todoSlice";
import { TodoType } from "./types/Types";

const TodoCreate = () => {
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState<string>("");

  const hadleCreateTodo = () => {
    if (newTodo.trim().length == 0) {
      alert("todo giriniz");
      return;
    }
    const payload: TodoType = {
      id: Math.floor(Math.random() * 9999999),
      content: newTodo,
    };
    dispatch(createTodo(payload));
    setNewTodo("");
  };

  return (
    <div className="todo-create">
      <input
        placeholder="Todo giriniz..."
        type="text"
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
        name="text"
        className="text-input"
        id="text"
      />
      <button onClick={hadleCreateTodo}>Olustur</button>
    </div>
  );
};

export default TodoCreate;
