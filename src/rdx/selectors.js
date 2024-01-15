import { createSelector } from '@reduxjs/toolkit';
export const selectIsLoading = state => state.contacts.contacts;
export const selectContacts = state => state.contacts.contacts;
export const selectErrors = state => state.contacts.contacts;
export const selectFilterState = state => state.filter.filter;

export const filteredContacts = createSelector(
  [selectContacts, selectFilterState],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);
