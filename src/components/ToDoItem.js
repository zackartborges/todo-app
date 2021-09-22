function ToDoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" 
      checked={props.item.completed}
      onChange={() => props.handleChange(props.item.id)}
      />
        <p>{props.task}</p>
    </div>
  )
}
export default ToDoItem;