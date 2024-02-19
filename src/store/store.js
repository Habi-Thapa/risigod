import { configureStore } from "@reduxjs/toolkit";
import { articleAPI } from "./article";
export const store = configureStore({
  reducer: {
    [articleAPI.reducerPath]: articleAPI.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(articleAPI.middleware),
});
