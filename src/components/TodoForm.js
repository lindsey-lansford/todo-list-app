import React, { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      text: input,
    });

    setInput('');
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Checking to see if "edit" prop exists. If not, render the normal form
  // If the props.edit exists, render updated form instead
  return !props.edit ? (
    <div>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          name="text"
          className="todo-item"
        />
        <button className="todo-button">Add todo item</button>
      </form>
    </div>
  ) : (
    <div>
        <h3>Update todo: {props.edit.value}</h3>
        <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder={props.edit.value}
          name="text"
          className="todo-item"
        />
        <button className="todo-button">Update todo item</button>
      </form>
    </div>
  )
};

export default TodoForm;
