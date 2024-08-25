import * as bookService from "../../../service/BookService";

export const getAllBookByMiddleware = (title) => async (dispatch) => {
    const data = await bookService.getAllBookList(title);
    dispatch({
        type: "GET_ALL_BOOK",
        payload: data
    })
}

export const saveBookByMiddleware = (book) => async (dispatch) => {
    try {
        await bookService.saveBook(book);
        const bookNew = bookService.getBookById(book.id);
        dispatch({
            type: "ADD_BOOK",
            payload: bookNew
        });
        dispatch(getAllBookByMiddleware(""));
        return true;
    } catch (error) {
        return false;
    }
}

export const deleteBookByMiddleware = (id) => async (dispatch) => {
    try {
        await bookService.deleteBook(id);
        dispatch({
            type: "DELETE_BOOK",
            payload: ""
        })
        dispatch(getAllBookByMiddleware(""));
        return true;
    } catch (error) {
        return false;
    }
}

export const findBookByMiddleware = (id) => async (dispatch) => {
    const book = await bookService.getBookById(id);
    dispatch({
        type: "FIND_BOOK",
        payload: book
    })
}

export const editBookByMiddleware = (id,values) => async (dispatch) => {
    try {
        await bookService.editBook(id,values);
        const data = await bookService.getAllBookList("");
        dispatch({
            type: "EDIT_BOOK",
            payload: data
        })
        return true;
    } catch (error) {
        return false;
    }
}

export const findBeginAndEndByMiddleware = (begin,end) => async (dispatch) => {
    const data = await bookService.findBeginAndEnd(begin, end);
    dispatch({
        type: "FIND_BEGIN_AND_END",
        payload: data
    });
}