import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
          items: [],
          isLoading: false,
          error: null,
      },
    extraReducers: {
        [fetchContacts.pending] (state) {
            state.isLoading = true;
        },
        [fetchContacts.fulfilled] (state, action) {
            state.isLoading = false;
            state.items = action.payload;
            state.error = null;
        },
        [fetchContacts.rejected] (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        [addContact.pending] (state) {
            state.isLoading = true;
        },
        [addContact.fulfilled] (state, action) {
            state.isLoading = false;
            state.items.unshift(action.payload);
            state.error = null;
        },
        [addContact.rejected] (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        [deleteContact.pending] (state) {
            state.isLoading = true;
        },
        [deleteContact.fulfilled] (state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.contacts
            .findIndex(contact => contact.id === action.payload.id);
              state.contacts.splice(index, 1);
        },
        [deleteContact.rejected] (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});


export const contactsReducer = contactsSlice.reducer;
