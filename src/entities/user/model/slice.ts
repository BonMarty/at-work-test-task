import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../../../shared';
import { fetchUsers } from './thunk';
import { UsersState } from './types';

const initialState: UsersState = {
  users: [],
  archive: [],
  isLoading: true,
  isError: false,
};

export const usersSlice = createSlice({
  name: 'activeUsers',
  initialState,
  reducers: {
    archiveUser(state: UsersState, action: PayloadAction<User>) {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
      state.archive = [...state.archive, action.payload];
    },

    hideUser(state: UsersState, action: PayloadAction<User>) {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    },

    activateUser(state: UsersState, action: PayloadAction<User>) {
      state.users = [...state.users, action.payload];
      state.archive = state.archive.filter((item) => item.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.users = [];
      state.archive = [];
      state.isLoading = true;
      state.isError = false;
    });

    builder.addCase(fetchUsers.rejected, (state) => {
      state.users = [];
      state.archive = [];
      state.isLoading = false;
      state.isError = true;
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload.slice(0, 6);
      state.archive = action.payload.slice(9);
      state.isLoading = false;
      state.isError = false;
    });
  },
});

export const { activateUser, archiveUser, hideUser } = usersSlice.actions;
