import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer/reducer";

export const store = configureStore({
  reducer,
});
