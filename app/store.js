import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "features/counter/counterSlice";
import { combineReducers } from "redux";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["counter"],
};
const rootReducer = combineReducers({
  counter: counterReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persister = persistStore(store);
