import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, PURGE, REHYDRATE } from "redux-persist";
import { REGISTER } from "redux-persist/es/constants";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import authReducer from "./auth/authReducers";
import { contactReducer } from "./tellContactsReducer";
import storage from "redux-persist/lib/storage";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
];

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"]
};

const rootReducer = combineReducers({
  contacts: contactReducer,
  auth: persistReducer(persistConfig, authReducer),
})

const store = configureStore({
  reducer: rootReducer,
  middleware
});

persistStore(store);


export default store;
