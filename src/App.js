import './style.css';
import Header from "./components/Header/Header";
import './App.css'
import ToDoList from "./components/ToDoList/ToDoList";
function App() {
  return (
      <>
          <div className="Application">
              <ToDoList/>
          </div>
      </>

  );
}

export default App;
