import './App.css';
import ToDoItem from './components/ToDoItem'
function App() {
  return (
    <div className="todo-list">
      <ToDoItem task="Take out dog"/>
      <ToDoItem task="Feed Mom!"/>
      <ToDoItem task="Feed Willy"/>
    </div>
  );
}

export default App;
