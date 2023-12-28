import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = '';
};
export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const rsp = await toast.promise(axios.post('/users/signup', userData), {
        loading: 'User is creating...',
        success: 'User created',
        error: 'User creation failed',
      });
      setToken(rsp.data.token);
      return rsp.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const rsp = await toast.promise(axios.post('/users/login', userData), {
        loading: 'User is logging in...',
        success: 'User is logged in',
        error: 'User login failed',
      });
      setToken(rsp.data.token);
      return rsp.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await toast.promise(axios.post('/users/logout'), {
      loading: 'User is logging out...',
      success: 'User is logged out',
      error: 'User logout failed',
    });
    clearAuthToken();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    if (!token) return thunkAPI.rejectWithValue('Unable to get user');
    setToken(token);
    try {
      const rsp = await toast.promise(axios.get('/users/current'), {
        loading: 'User is refreshing...',
        success: 'User is refreshed',
        error: 'User refreshing failed',
      });
      return rsp.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
