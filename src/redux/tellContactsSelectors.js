import { createSelector } from "@reduxjs/toolkit";

const getContactsSelector = state => state.contacts.items;
const errorContactsSelector = state => state.contacts.error;
const loaderContactsSelector = state => state.contacts.isContactLoding;
const filterContactsSelector = state => state.contacts.filter;

const getFilterContacts = createSelector(
  [getContactsSelector, filterContactsSelector],
  (contacts, filter) => {
    return contacts.filter(
      contact => contact.name.toLowerCase().includes(filter.toLowerCase()) || contact.number.includes(filter)
    );
  }
);

export { getContactsSelector, errorContactsSelector, loaderContactsSelector, filterContactsSelector, getFilterContacts};
