import React, { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState('');
  let [priority, setPriority] = useState('');

  const priorityLevel = ['high', 'medium', 'low']

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!priority) {
      priority = "low";
    }

    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      text: input,
      priority: priority,
    });

    setInput('');
    setPriority('');
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
          className="todo-input"
          placeholder="Add your todo"
        />
        <div className="dropdown">
          <button className={`dropbtn ${priority}`}>
            {priority || 'Priority'}
          </button>
          <div className="dropdown-content">
            <p onClick={() => setPriority(priorityLevel[0])}>High</p>
            <p onClick={() => setPriority(priorityLevel[1])}>Medium</p>
            <p onClick={() => setPriority(priorityLevel[2])}>Low</p>
          </div>
        </div>
        <button className="todo-button">Add item</button>
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
          className="todo-input"
          />
        <div className="dropdown">
          <button className={`dropbtn ${priority}`}>
            {priority || 'Priority'}
          </button>
          <div className="dropdown-content">
            <p onClick={() => setPriority(priorityLevel[0])}>High</p>
            <p onClick={() => setPriority(priorityLevel[1])}>Medium</p>
            <p onClick={() => setPriority(priorityLevel[2])}>Low</p>
          </div>
        </div>
        <button className="todo-button">Update todo item</button>
      </form>
    </div>
  );
}

export default TodoForm;
