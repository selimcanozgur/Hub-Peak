// IMPORT Redux config and persist
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

// IMPORT Reducers
import bookRedurcer from "./feuatures/book/bookSlice";
import userReducer from "./feuatures/user/userSlice";

const rootReducer = combineReducers({
  user: userReducer,
  books: bookRedurcer,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
