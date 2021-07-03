import './App.css';
import ToDoItem from './components/ToDoItem'
import todosData from './todosData';

function App() {
    const todoTitles = todosData.map(todoItem => 
       <ToDoItem key={todoItem.id} task={todoItem.text} />
    )

  return (
    <div className="todo-list">
      {todoTitles}

    </div>
  );
}

export default App;
