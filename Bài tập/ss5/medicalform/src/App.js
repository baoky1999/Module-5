import logo from './logo.svg';
import './App.css';
import Medical from "./components/Medical";
import "bootstrap/dist/css/bootstrap.css";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <Medical/>
        <ToastContainer/>
    </div>
  );
}

export default App;
