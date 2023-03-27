import React, { useState } from "react";
import TodoForm from "./TodoForm";

const Todo = (props) => {

  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });
  
  const submitUpdate = (value) => {
    props.editTodoItem(edit.is, value);
    setEdit({ id: null, value: '' });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate}/>
  }

  return props.todo.map((item, i) => {
    <div
      className={item.isCompelte}
      key={i}
    >
      <div key={item.id} onClick={() => props.completeTodoItem(item.id)}>
        {item.text}
      </div>
      <div className="icons">
        <p onClick={() => setEdit({ id: item.id, value: item.text })}> ✏️</p>
        <p onClick={() => props.removeTodoItem(item.id)}> 🗑️</p>
      </div>
    </div>
  });
}

export default Todo;
