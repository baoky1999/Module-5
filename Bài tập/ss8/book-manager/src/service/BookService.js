import axios from "axios";

const URL_GETALL = "http://localhost:8080/books"

export const getAllBookList = async (title) => {
    try {
        let res = await axios.get(URL_GETALL +"?title_like="+title);
        return res.data;
    } catch (e) {
        return []
    }
}

export const saveBook = async (todo) => {
    try {
        await  axios.post(URL_GETALL, todo)
        return true
    } catch (e) {
        return false
    }
}

export const deleteBook = async (id) => {
    try {
        await axios.delete(`${URL_GETALL}/${id}`);
        return true;
    } catch (e) {
        return false;
    }
};

export const getBookById = async (id) => {
    try {
        const res = await  axios.get (`${URL_GETALL}/${id}`);
        return res.data;
    } catch (e) {
        return [];
    }
}

export const editBook = async (id,values) => {
    try {
        await axios.put(`${URL_GETALL}/${id}`,values);
        return true;
    } catch (e) {
        return false;
    }
}

export const findBeginAndEnd = async (start, end) => {
    try {
        const res = await axios.get(`${URL_GETALL}?quantity_gte=${start}&quantity_lte=${end}`);
        console.log('Dữ liệu phản hồi:', res.data);
        return res.data;
    } catch (error) {
        console.error('Lỗi khi lấy dữ liệu với phạm vi bắt đầu và kết thúc:', error);
        return [];
    }
};