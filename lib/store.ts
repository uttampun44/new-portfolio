import { configureStore } from "@reduxjs/toolkit";
import { blogSlice } from "./features/blogs/blog";

export const store = () => {
    return configureStore({
      reducer: {
        blog: blogSlice.reducer
      },
    })
  }

export type AppStore = ReturnType<typeof store>;
// get the type of the state
export type RootState = ReturnType<AppStore["getState"]>;

// get the type of the dispatch
export type AppDispatch = AppStore["dispatch"];