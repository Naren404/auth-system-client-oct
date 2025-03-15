import { toast } from "react-toastify"
import { setBooks } from "./bookSlice"
import { createBook, getBooks, updateBook } from "../../axios/booksAxios"

// get all books
export const getBooksAction = () => async(dispatch) => {
  const result = await getBooks()

  if(result?.status === "error"){
    return toast.error(result.message)
  }

  dispatch(setBooks(result.data))
}

// create a book
export const createBookAction = (bookObj) => async(dispatch) => {
  const result = await createBook(bookObj)

  if(result?.status === "error"){
    return toast.error(result.message)
  }

  toast.success(result.message)

  dispatch(getBooksAction())
}

// update a book
export const updateBookAction = (bookObj) => async(dispatch) => {
  const result = await updateBook(bookObj)

  if(result?.status === "error"){
    return toast.error(result.message)
  }

  toast.success(result.message)

  dispatch(getBooksAction())
}