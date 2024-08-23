import { useEffect, useState} from "react";
import * as todoService from "../service/TodoService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

function TodoList() {
    const [todo, setTodo] = useState([]);
    const [form, setForm] = useState({ title: '' });

    const navigate = useNavigate();

    useEffect(() => {
        getAllTodoList();
    },[])

    const getAllTodoList = async () => {
        let res = await todoService.getAllTodoList();
        setTodo(res)
    }

    const saveTodo = async (value, { resetForm }) => {
        let isSuccess = await todoService.saveTodo(value)
        if(isSuccess) {
            toast.success("Thêm mới thành công")
            getAllTodoList();
            navigate("/")
        } else {
            toast.error("Thêm mới thất bại.")
        }
        resetForm();
    }

    return (
        <div className="container">
            <h1>Todo List</h1>
            <Formik initialValues={form} onSubmit={saveTodo}>
                <Form>
                    <Field name="title" />
                    <br />
                    <button type="submit">Thêm mới</button>
                </Form>
            </Formik>
            <br />
            <h3>Danh sách</h3>
            <table className = "table table-striped">
                <thead>
                <tr>
                    {todo.map((task) => (
                        <li key={task.id}>{task.title}</li>
                    ))}
                </tr>
                </thead>
            </table>
        </div>
    );
}
export default TodoList;
