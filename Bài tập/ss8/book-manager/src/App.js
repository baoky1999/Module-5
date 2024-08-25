import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import BookCreate from "./components/BookCreate";
import BookManager from "./components/BookManager";
import "bootstrap/dist/css/bootstrap.css";
import 'react-toastify/dist/ReactToastify.css';
import BookEdit from "./components/BookEdit";
import {toast, ToastContainer} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {findBeginAndEndByMiddleware, getAllBookByMiddleware} from "./components/redux/middleware/BookMiddleware";
import {useEffect, useState} from "react";


function App() {
  const dispatch = useDispatch();
  const books = useSelector(store => store.books);
  const [begin, setBegin] = useState("");
  const [end, setEnd] = useState("");

  useEffect(() => {
    dispatch(getAllBookByMiddleware(""));
  },[dispatch]);

  useEffect(() => {
    const beginQuantity = parseInt(begin, 10);
    const endQuantity = parseInt(end, 10);


    if (isNaN(beginQuantity) || isNaN(endQuantity) || begin === "" || end === "") {
      dispatch(getAllBookByMiddleware(""));
    } else {
      dispatch(findBeginAndEndByMiddleware(beginQuantity, endQuantity));
    }
  }, [begin, end, dispatch]);
  return (
    <>
      <BrowserRouter>
        <p>Tổng số sách hiện tại : {books.length}</p>
        <Routes>
          <Route path="/create" element={<BookCreate />} />
          <Route path="/" element={<BookManager setBegin={setBegin} setEnd={setEnd} />} />
          <Route path="/editBook/:id" element={<BookEdit />} />
        </Routes>
      </BrowserRouter>
        <ToastContainer />
    </>
  );
}

export default App;
