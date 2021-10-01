import "./App.css";
import { Component } from "react";
import ToDoItem from "./components/ToDoItem";
import todosData from "./todosData";
import AddToDoItem from "./components/AddToDoItem";
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
    this.addTodo = this.addTodo.bind(this);
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

  addTodo(name) {
    console.log(name);
    let prevTodos = [...this.state.todos];

    // prevTodos.push({ todo });
    console.log(prevTodos);

    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: undefined,
          text: name,
          completed: false,
        },
      ],
    });
  }

  render() {
    const todoItems = this.state.todos.map((item) => (
      <ToDoItem key={item.id} task={item.text} item={item} handleChange={this.handleChange} />
    ));
    return (
      <div className="todo-list">
        {todoItems}
        <AddToDoItem addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
