import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async function (_, thunkAPI) {
    try {
      const res = await axios.get('/contacts');

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
      const res = await axios.post('/contacts', {
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
      const res = await axios.delete(`/contacts/${contactId}`);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const EditContact = createAsyncThunk(
  'contacts/editContact',

  async function (contact, thunkAPI) {
    try {
      const res = await axios.patch(`/contacts/${contact.id}`, {
        name: contact.name,
        number: contact.number,
      });

      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
