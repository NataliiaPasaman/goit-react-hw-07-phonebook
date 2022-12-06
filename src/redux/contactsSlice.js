import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
          items: [],
          isLoading: false,
          error: null,
      },
    reducers: {
        addContact (state, action) {
                state.items.unshift(action.payload);
            },
        deleteContact (state, action) {
            const index = state.items.findIndex(contact => contact.id === action.payload);
            state.items.splice(index, 1);
        }
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
