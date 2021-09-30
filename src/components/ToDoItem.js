import React, { useState } from "react";

function ToDoItem(props) {
  // const completedStyle = {
  //   fontStyle: "italic",
  //   color: "#cdcdcd",
  //   textDecoration: "line-through",
  // };
  const [name, setName] = useState(props.task);

  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.item.completed} onChange={() => props.handleChange(props.item.id)} />
      {props.item.id ? (
        <p>{props.task}</p>
      ) : (
        <input value={name} name="todo" onChange={(event) => setName(event.target.value)} onBlur={console.log("Worked")} />
      )}
    </div>
  );
}
export default ToDoItem;
