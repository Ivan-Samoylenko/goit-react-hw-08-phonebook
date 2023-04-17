import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filter/selectors';

export const selectContacts = store => store.contacts.items;

export const selectContactsIsLoading = store => store.contacts.isLoading;

export const selectContactsError = store => store.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterValue) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
);
