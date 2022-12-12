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

// export const contactsSlice = createSlice({
//     name: 'contacts',
//     initialState: {
//           items: [],
//           isLoading: false,
//           error: null,
//       },
//     reducers: {
//         addContact (state, action) {
//                 state.items.unshift(action.payload);
//             },
//         deleteContact (state, action) {
//             const index = state.items.findIndex(contact => contact.id === action.payload);
//             state.items.splice(index, 1);
//         }
//     },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
