import './App.css';
import { Component } from 'react';
import ToDoItem from './components/ToDoItem'
// import todosData from './todosData';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      todosData:
        [
          {
              id: 1,
              text: "Take out the trash",
              completed: true
          },
          {
              id: 2,
              text: "Grocery shopping",
              completed: false
          },
          {
              id: 3,
              text: "Clean gecko tank",
              completed: false
          },
          {
              id: 4,
              text: "Mow lawn",
              completed: true
          },
          {
              id: 5,
              text: "Catch up on Arrested Development",
              completed: false
          }
        ]
      
    }
  }
  render() {
        const todoTitles = this.state.todosData.map(todoItem => 
           <ToDoItem key={todoItem.id} task={todoItem.text} />
        )
        return (
          <div className="todo-list">
      {todoTitles}

    </div>
  );
}
}

export default App;
