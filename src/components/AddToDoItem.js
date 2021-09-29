function AddToDoItem(props) {
  
  return (
    <div className="add-todo-item">
        <input type="text" 
        value={this.state.newTodo} 
        onChange={this.handleInput} 
        placeholder="Add Todo">
        </input>
    </div>
  )
}
export default AddToDoItem;