import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoading = state => state.contacts;
export const selectContacts = state => state.contacts;
export const selectErrors = state => state.contacts;
export const selectFilterState = state => state.filter.filter;

console.log(selectContacts);

export const filteredContacts = createSelector(() => {
  return selectContacts.filter(contact =>
    contact.name.toLowerCase().includes(selectFilterState.toLowerCase())
  );
});
