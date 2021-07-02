function ToDoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" />
        <p>{props.task}</p>
    </div>
  )
}
export default ToDoItem;