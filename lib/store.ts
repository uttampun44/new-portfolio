import { configureStore } from "@reduxjs/toolkit";
import { blogSlice } from "./features/blogs/blog";
import {persistReducer, persistStore} from "redux-persist"
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "blog",
  storage,
  whitelist: ["blog"]
}

const persistedReducer = persistReducer(persistConfig, blogSlice.reducer);

export const store = configureStore({
  reducer: persistReducer(persistConfig, persistedReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppStore = typeof store;
// get the type of the state
export type RootState = ReturnType<AppStore["getState"]>;

// get the type of the dispatch
export type AppDispatch = AppStore["dispatch"];

export const persistor = persistStore(store)