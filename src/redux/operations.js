import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://657c2422394ca9e4af158b2e.mockapi.io/api/v1';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const resp = await toast.promise(axios.get('/contacts'), {
        loading: 'Loading contacts...',
        success: 'Contacts loaded',
        error: 'Contacts loading fail :(',
      });
      return resp.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (arg, thunkAPI) => {
    try {
      const resp = await toast.promise(axios.post('/contacts', arg), {
        loading: 'Adding...',
        success: 'Contact added',
        error: 'Adding fail :(',
      });
      return resp.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const resp = await toast.promise(axios.delete(`/contacts/${id}`), {
        loading: 'Deleting...',
        success: 'Contact deleted',
        error: 'Deleting failed :(',
      });
      return resp.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
