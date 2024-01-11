import { createSlice } from '@reduxjs/toolkit';
import { getAllContacts, addContact, deleteContact } from 'services/operations';
//-----------------------------------------------------------------------

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: true,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllContacts.pending, handlePending)
      .addCase(getAllContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
        state.error = null;
      })
      .addCase(getAllContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.push(action.payload);
        state.error = null;
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        const contactID = state.contacts.filter(
          contact => contact.id === action.payload
        );
        state.contacts.splice(contactID, 1);
        state.error = null;
      });
  },
});
//--------------------------------------------------------------------------
export const contactsReducer = contactsSlice.reducer;
