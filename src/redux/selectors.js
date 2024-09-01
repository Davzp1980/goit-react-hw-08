import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectError = state => state.contacts.error;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectSearchValue = state => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectSearchValue],
  (contacts, searchValue) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }
);
