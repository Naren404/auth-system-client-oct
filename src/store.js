import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/user/userSlice";
import bookReducer from "./redux/book/bookSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    book: bookReducer,
  }
})

export default store