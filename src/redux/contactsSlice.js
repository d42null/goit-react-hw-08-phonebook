import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
const handleLoading = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handleLoading)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        handleFulfilled(state);
        state.contacts = action.payload ?? [];
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handleLoading)
      .addCase(addContact.fulfilled, (state, action) => {
        handleFulfilled(state);
        state.contacts.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handleLoading)
      .addCase(deleteContact.fulfilled, (state, action) => {
        handleFulfilled(state);
        state.contacts.splice(
          state.contacts.findIndex(x => x.id === action.payload),
          1
        );
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});
export const contactsReducer = contactsSlice.reducer;
