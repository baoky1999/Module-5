const bookReducer = (books = [], action) => {
    switch (action.type) {
        case "ADD_BOOK": {
            return [...books, action.payload]
        }
        case "DELETE_BOOK": {
            return [...books, action.payload]
        }
        case "GET_ALL_BOOK": {
            return action.payload;
        }
        case "EDIT_BOOK" : {
            return action.payload
        }
        case "FIND_BOOK" : {
            return { ...books, currentBook: action.payload };
        }
        case "FIND_BEGIN_AND_END" : {
            return action.payload;
        }
        default:
            return books
    }
}

export default bookReducer;