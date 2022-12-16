import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
// features
import reviewsSlice from "features/reviews/reviewsSlice";
import offerSlice from "features/offer/offerSlice";
// APIS
import { vehicle } from "services/vehicle/api";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["reviews","offer"],
};
const rootReducer = combineReducers({
  reviews: reviewsSlice,
  offer: offerSlice,
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
