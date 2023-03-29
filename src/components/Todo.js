import React, { useState } from "react";
import TodoForm from "./TodoForm";

const Todo = (props) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
    priority: '',
  });

  console.log(props.todo);

  const submitUpdate = (value) => {
    props.editTodoItem(edit.id, value);
    setEdit({ id: null, value: "", priority: '' });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  return props.todo.map((item, i) => (
    <div
      className={item.isCompelte
      ? `bucket-row complete ${item.priority}`
      : `bucket-row ${item.priority}`
    }
      key={i}>
      <div key={item.id} onClick={() => props.completeTodoItem(item.id)}>
        {item.text}
      </div>
      <div className="icons">
        <p onClick={() => setEdit({ id: item.id, value: item.text, priority: item.priority })}> ✏️</p>
        <p onClick={() => props.removeTodoItem(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
};

export default Todo;
