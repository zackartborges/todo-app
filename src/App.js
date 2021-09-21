import './App.css';
import { Component } from 'react';
import ToDoItem from './components/ToDoItem'
import todosData from './todosData';

class App extends Component {
  render() {
        const todoTitles = todosData.map(todoItem => 
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
