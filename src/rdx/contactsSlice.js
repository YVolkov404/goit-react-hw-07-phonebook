import { createSlice } from '@reduxjs/toolkit';
import { getAllContacts, addContact, deleteContact } from 'services/operations';
// import { uid } from 'uid';
//-----------------------------------------------------------------------

const initialStateData = {
  contacts: [],
  isLoading: true,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateData,
  // reducers: {
  //   addContacts: {
  //     prepare(name, number) {
  //       return {
  //         payload: {
  //           id: uid(3),
  //           name,
  //           number,
  //         },
  //       };
  //     },
  //     reducer(contacts, action) {
  //       contacts.push(action.payload);
  //     },
  //   },
  //   deleteContacts: {
  //     reducer(contacts, action) {
  //       return contacts.filter(contact => contact.id !== action.payload);
  //     },
  //   },
  // },
  extraReducers: builder => {
    builder
      .addCase(getAllContacts.pending, handlePending)
      .addCase(getAllContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
        console.log(state.contacts);
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
        state.contacts
          .filter(contact => contact.id !== action.payload)
          .findIndex(state.contacts.id, 1);
        state.error = null;
      });
  },
});
//--------------------------------------------------------------------------
// export const { addContacts, deleteContacts } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
