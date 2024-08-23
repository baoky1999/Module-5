import axios from "axios";

const URL_GETALL = "http://localhost:8080/todo"

export const getAllTodoList = async () => {
    try {
        let res = await axios.get(URL_GETALL);
        return res.data;
    } catch (e) {
        return []
    }
}

export const saveTodo = async (todo) => {
    try {
        await  axios.post(URL_GETALL, todo)
        return true
    } catch (e) {
        return false
    }
}