import './App.css';
import { Component } from 'react';
import ToDoItem from './components/ToDoItem'
import todosData from './todosData';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      todosData: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(id) {
    console.log("Changed", id)
  }
  render() {
        const todoTitles = this.state.todosData.map(todoItem => 
           <ToDoItem key={todoItem.id} task={todoItem.text} item={todoItem} handleChange={this.handleChange}/>
        )
        return (
          <div className="todo-list">
      {todoTitles}
    </div>
  );
}
}

export default App;
