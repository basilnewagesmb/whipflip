import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
// features
import reviewsSlice from "features/reviews/reviewsSlice";
// APIS
import { vehicle } from "services/vehicle/api";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["reviews"],
};
const rootReducer = combineReducers({
  reviews: reviewsSlice,
  [vehicle.reducerPath]: vehicle.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(vehicle.middleware),
});

export const persister = persistStore(store);
