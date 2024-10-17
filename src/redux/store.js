import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactsSlice";
import { searchFilterReducer } from "./filtersSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: searchFilterReducer,
  },
});
