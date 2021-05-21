import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "./auth/authReducers";

import { contactReducer } from "./tellContactsReducer";


const rootReducer = combineReducers({
  auth: authReducer,
  contacts: contactReducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware()]
});

export default store;
