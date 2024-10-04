import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../../../shared';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  const result = await response.json();

  return result as User[];
});
