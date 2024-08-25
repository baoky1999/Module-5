import React, {useEffect, useState} from "react";
import {useParams, useNavigate, Link} from "react-router-dom";
import * as bookService from "../service/BookService";
import {Formik, Field, Form} from "formik";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {editBookByMiddleware, findBookByMiddleware} from "./redux/middleware/BookMiddleware";
import store from "./redux/Store";

function BookEdit() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const bookToEdit = useSelector(state => state.books.currentBook);

    useEffect(() => {
        dispatch(findBookByMiddleware(id));
    }, [id, dispatch]);

    const handleSubmit = async (values) => {
        const isSuccess = await dispatch(editBookByMiddleware(id, values));
        console.log(isSuccess)
        if (isSuccess) {
            toast.success("Cập nhật thành công");
            navigate("/");
        } else {
            toast.error("Cập nhật thất bại");
        }
    };

    if (!bookToEdit) return <p>Loading...</p>;

    return (
        <div className="container">
            <h1>Sửa sách</h1>
            <Formik
                initialValues={{title: bookToEdit.title, quantity: bookToEdit.quantity}}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <Field
                            name="title"
                            type="text"
                            className="form-control w-50"
                            id="title"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="quantity" className="form-label">Quantity</label>
                        <Field
                            name="quantity"
                            type="number"
                            className="form-control w-50"
                            id="quantity"
                        />
                    </div>
                    <div className="d-flex justify-content-between mt-3">
                        <button type="submit" className="btn btn-primary">Cập nhật</button>
                        <a className="btn btn-success" href="/">Trở lại trang chủ</a>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default BookEdit;