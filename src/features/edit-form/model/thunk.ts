import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../../../shared';

export const fetchUser = createAsyncThunk('user/fetchUser', async (id: number) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  const result = await response.json();

  return result as User;
});
