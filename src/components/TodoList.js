import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoList = () => {
  const [todo, setTodo] = useState([]);

  // Function to add a todo item to the list
  const addTodoItem = (item) => {
    console.log(item);

    // Checking to see if the item text is empty
    if (!item.text) {
      return;
    }
    // Adding new item to existing array of objs
    const newTodo = [item, ...todo];
    console.log(newTodo);

    // Calling setTodo to update state with new item
    setTodo(newTodo);
  };

  // Function to mark todo item complete
  const completeTodoItem = (id) => {
    // If the ID passed to this function matches the ID of the item that was clicked, mark it as complete
    let updatedTodo = todo.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });

    console.log(updatedTodo);
    setTodo(updatedTodo);
  };

  // Function to remove todo item and update state
  const removeTodoItem = (id) => {
    const updatedTodo = [...todo].filter((item) => item.id !== id);

    setTodo(updatedTodo);
  };

  // Function to edit todo item
  const editTodoItem = (itemId, newValue) => {
    // Make sure that the value isn't empty
    if (!newValue.text) {
      return;
    }

    // Using the "prev" argument provided with the useState hook to map through our list of items
    // Checking to see if the item ID matches the if of the item that was clicked and if so we set it to a new value
    setTodo((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (
    <div>
      <h1>My Todo List</h1>
      <TodoForm onSubmit={addTodoItem} />
      <Todo
        todo={todo}
        completeTodoItem={completeTodoItem}
        removeTodoItem={removeTodoItem}
        editTodoItem={editTodoItem}
      ></Todo>
    </div>
  );
};

export default TodoList;
