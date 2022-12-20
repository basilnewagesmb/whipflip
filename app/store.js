import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
// features
import reviewsSlice from "features/reviews/reviewsSlice";
import offerSlice from "features/offer/offerSlice";
import siteSlice from "features/site/siteSlice";
//

// APIS
import { vehicle } from "services/vehicle/api";
import { offerApi } from "services/offer/api";
//
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["reviews", "offer", "site"],
};
const rootReducer = combineReducers({
  reviews: reviewsSlice,
  offer: offerSlice,
  site: siteSlice,
  [vehicle.reducerPath]: vehicle.reducer,
  [offerApi.reducerPath]: offerApi.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(vehicle.middleware)
      .concat(offerApi.middleware),
});

export const persister = persistStore(store);
