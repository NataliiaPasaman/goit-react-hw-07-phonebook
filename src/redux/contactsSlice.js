import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from 'redux/operations';

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
    },
});


export const contactsReducer = contactsSlice.reducer;
