import "./App.css";
import { Component } from "react";
import ToDoItem from "./components/ToDoItem";
import todosData from "./todosData";
// import AddToDoItem from './components/AddToDoItem';

class App extends Component {
  constructor() {
    super();
    console.log(todosData);
    this.state = {
      todos: todosData,
      // newTask: "",
    };
    this.handleChange = this.handleChange.bind(this);

  }
  componentDidMount(){
    this.setState({
        todos: [...this.state.todos, {
          id: undefined,
          text: "",
          completed: false
      }]
    })
  }
  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return {
        todos: updatedTodos,
      };
    });
    console.log("Completed", id);
  }
  
  render() {
    const todoItems = this.state.todos.map((item) => (
      <ToDoItem 
        key={item.id}
        task={item.text}
        item={item}
        handleChange={this.handleChange}
       
      />
    ));
    return (
      <div className="todo-list">
        {todoItems}
        {/* <AddToDoItem handleChange={this.handleInput}/> */}
      </div>
    );
  }
}

export default App;
