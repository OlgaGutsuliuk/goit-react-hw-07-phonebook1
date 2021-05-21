import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { getAllContacts, addContacts, deleteContacts, filterContacts, setContactsLoading, setError, resetError } from "./tellContactsAction";

const itemsReducer = createReducer([], {
  [getAllContacts]: (_, { payload }) => payload,
  [addContacts]: (state, { payload }) => [...state, payload],
  [deleteContacts]: (state, { payload }) => [...state.filter(contact => contact.id !== payload)]
});

 const filterContactsReducer = createReducer("", {
  [filterContacts]: (_, { payload }) => payload
});

const contactsLoaderReducer = createReducer(false, {
  [setContactsLoading]: state => !state
});

const contactErrorReducer = createReducer("", {
  [setError]: (_, { payload }) => payload,
  [resetError]: () => ""
});

export const contactReducer = combineReducers({
  items: itemsReducer,
  isContactLoding: contactsLoaderReducer,
  error: contactErrorReducer,
  filter: filterContactsReducer
});

