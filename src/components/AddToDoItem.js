import React, { useState } from "react";

function AddToDoItem(props) {
  const [name, setName] = useState(props.task);
  return (
    <div className="add-todo-item">
      <div>
        <input type="text" value={name} name="todo" onChange={(event) => setName(event.target.value)} />
        <button onClick={() => props.addTodo(name)}>Add Todo</button>
      </div>
    </div>
  );
}
export default AddToDoItem;
