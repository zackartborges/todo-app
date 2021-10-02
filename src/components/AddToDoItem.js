import React, { useState } from "react";

function AddToDoItem(props) {
  const [name, setName] = useState(props.task);
  return (
    <div className="add-todo-item">
      <div style={{ margin: "0 0px 0 0" }}>
        <input
          style={{ margin: "0 15px 0 0" }}
          type="text"
          value={name}
          name="todo"
          placeholder="Add Todo"
          onChange={(event) => setName(event.target.value)}
        />
        <button onClick={() => props.addTodo(name)}>Add</button>
      </div>
    </div>
  );
}
export default AddToDoItem;
