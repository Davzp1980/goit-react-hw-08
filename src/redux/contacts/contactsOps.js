import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://66caffad4290b1c4f1993b91.mockapi.io';
const contactsAxios = axios.create({
  baseURL: 'https://66caffad4290b1c4f1993b91.mockapi.io',
});

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async function (_, thunkAPI) {
    try {
      const res = await contactsAxios.get('/contacts');

      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async function (contact, thunkAPI) {
    try {
      const res = await contactsAxios.post('contacts', {
        name: contact.name,
        number: contact.number,
      });
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',

  async function (contactId, thunkAPI) {
    try {
      const res = await contactsAxios.delete(`/contacts/${contactId}`);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
