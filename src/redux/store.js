import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "./featuers/storeSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persisconfig = {
  key: "root",
  storage,
};

const persisedReducer = persistReducer(persisconfig, storeReducer);

export const store = configureStore({
  reducer: {
    goShop: persisedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});

export const persistor = persistStore(store);
