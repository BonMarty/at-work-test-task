import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../../../shared';
import { fetchUser } from './thunk';
import { EditUserState } from './types';

const initialState: EditUserState = {
  user: {} as User,
  isLoading: true,
  isError: false,
};

export const editUserSlice = createSlice({
  name: 'editUser',
  initialState,
  reducers: {
    setName(state: EditUserState, action: PayloadAction<string>) {
      state.user.name = action.payload;
    },

    setNickname(state: EditUserState, action: PayloadAction<string>) {
      state.user.username = action.payload;
    },

    setEmail(state: EditUserState, action: PayloadAction<string>) {
      state.user.email = action.payload;
    },

    setCity(state: EditUserState, action: PayloadAction<string>) {
      state.user.address.city = action.payload;
    },

    setPhone(state: EditUserState, action: PayloadAction<string>) {
      state.user.phone = action.payload;
    },

    setCompanyName(state: EditUserState, action: PayloadAction<string>) {
      state.user.company.name = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.user = {} as User;
      state.isLoading = true;
      state.isError = false;
    });

    builder.addCase(fetchUser.rejected, (state) => {
      state.user = {} as User;
      state.isLoading = false;
      state.isError = true;
    });

    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isError = false;
    });
  },
});

export const { setName, setNickname, setEmail, setCity, setPhone, setCompanyName } = editUserSlice.actions;
