import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import TodoList from "./components/Todo";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter className="App">
      <TodoList/>
    </BrowserRouter>
  );
}

export default App;
