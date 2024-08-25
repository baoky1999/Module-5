
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { deleteBookByMiddleware, findBeginAndEndByMiddleware, getAllBookByMiddleware } from "./redux/middleware/BookMiddleware";

function BookManager({ setBegin, setEnd }) {
    const dispatch = useDispatch();
    const books = useSelector(store => store.books);
    const [title, setTitle] = useState("");
    const [begin, setBeginState] = useState("");
    const [end, setEndState] = useState("");

    useEffect(() => {
        dispatch(getAllBookByMiddleware(title));
    }, [title, dispatch]);

    useEffect(() => {
        if (begin !== "" && end !== "") {
            const beginQuantity = parseInt(begin, 10);
            const endQuantity = parseInt(end, 10);

            if (beginQuantity <= endQuantity) {
                dispatch(findBeginAndEndByMiddleware(beginQuantity, endQuantity));
            }
        }
    }, [begin, end, dispatch]);

    const [showModal, setShowModal] = useState(false);
    const [bookToDelete, setBookToDelete] = useState(null);

    const handleDeleteClick = (book) => {
        setBookToDelete(book);
        setShowModal(true);
    };

    const handleConfirmDelete = async () => {
        if (bookToDelete) {
            const isSuccess = await dispatch(deleteBookByMiddleware(bookToDelete.id));
            if (isSuccess) {
                setShowModal(false);
                setBookToDelete(null);
                toast.success("Xóa thành công");
            } else {
                toast.error("Xóa thất bại!!!");
            }
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setBookToDelete(null);
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center">
                <h1>Quản lý thư viện</h1>
                <Link className="btn btn-success" to="/create">Thêm mới</Link>
            </div>
            <input
                value={title}
                placeholder="Tìm kiếm theo tiêu đề"
                onChange={(e) => setTitle(e.target.value)}
                className="form-control mt-4 w-25"
            />
            <div className="d-flex justify-content-between align-items-center">
                <p><strong>Tìm trong khoảng từ:</strong></p>
                <input
                    value={begin} // Sử dụng biến begin
                    placeholder="Số lượng bắt đầu"
                    onChange={(e) => {
                        setBegin(e.target.value);
                        setBeginState(e.target.value);
                    }}
                    className="form-control mt-4 w-25"
                />
                <p><strong>đến:</strong></p>
                <input
                    value={end} // Sử dụng biến end
                    placeholder="Số lượng kết thúc"
                    onChange={(e) => {
                        setEnd(e.target.value);
                        setEndState(e.target.value);
                    }}
                    className="form-control mt-4 w-25"
                />
            </div>
            <table className="table table-striped mt-4">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {books.map((book, index) =>
                    <tr key={book.id}>
                        <td>{index + 1}</td>
                        <td>{book.title}</td>
                        <td>{book.quantity}</td>
                        <td>
                            <Link className="btn btn-warning me-3" to={`/editBook/${book.id}`}>Chỉnh sửa</Link>
                            <Button className="btn btn-danger" onClick={() => handleDeleteClick(book)}>Xóa</Button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận xóa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Bạn có chắc chắn muốn xóa sách có tên là : <strong>{bookToDelete?.title}</strong>?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Hủy
                    </Button>
                    <Button variant="primary" onClick={handleConfirmDelete}>
                        Xác nhận xóa
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default BookManager;
