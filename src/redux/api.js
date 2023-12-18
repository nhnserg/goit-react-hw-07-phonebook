import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://657a08321acd268f9afa9c2a.mockapi.io';

export const fetchAllContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');

      return data;
    } catch ({ error }) {
      Notiflix.Notify.warning('Oooops, something goes wrong');
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', newContact, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return data;
    } catch ({ error }) {
      Notiflix.Notify.warning('Oooops, something goes wrong');
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);

      return data;
    } catch ({ error }) {
      Notiflix.Notify.warning('Oooops, something goes wrong');
      thunkAPI.rejectWithValue(error);
    }
  }
);
