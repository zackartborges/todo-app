import './App.css';
import { Component } from 'react';
import ToDoItem from './components/ToDoItem'
import todosData from './todosData';
// import AddToDoItem from './components/AddToDoItem';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      todos: todosData,
      newTask: ""
     }
      this.handleChange = this.handleChange.bind(this)
      // this.handleInput = this.handleInput.bind(this)
    }
    handleChange(id) {
      this.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo, completed: !todo.completed
            }
          }
          return todo
        })
        return {
          todos: updatedTodos
        }
      })
      console.log("Completed", id)
    }
    // handleInput(event) {
    //   this.setState() {
    //     newTask: event.target.value
    //     console.log(newTask)
    //   }

    // }
  render() {
        const todoItems = this.state.todos.map(item => 
           <ToDoItem key={item.id} task={item.text} item={item} handleChange={this.handleChange}/>
        )
        return (
          <div className="todo-list">
            {todoItems}
            {/* <AddToDoItem handleChange={this.handleInput}/> */}
          </div>
  );
}
}

export default App;
