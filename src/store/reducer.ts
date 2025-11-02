import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contact } from "./types";
import { v4 as uuidv4 } from "uuid";

interface ContactState {
  contactList: Contact[];
}

const initialState: ContactState = {
  contactList: [],
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Omit<Contact, "id">>) => {
      state.contactList.unshift({ ...action.payload, id: uuidv4() });
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contactList.findIndex(
        (c) => c.id === action.payload.id
      );
      if (index !== -1) state.contactList[index] = action.payload;
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      state.contactList = state.contactList.filter(
        (c) => c.id !== action.payload
      );
    },
  },
});

export const { addContact, editContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
