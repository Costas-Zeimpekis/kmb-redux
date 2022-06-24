import { configureStore } from "@reduxjs/toolkit";
import reducer from "./bugs";
import logger from "./middleware/logger";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
});

export default store;
