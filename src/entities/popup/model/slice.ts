import { createSlice } from '@reduxjs/toolkit';
import { PopupState } from './types';

const initialState: PopupState = {
  isOpen: false,
};

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openPopup(state: PopupState) {
      state.isOpen = true;
    },

    closePopup(state: PopupState) {
      state.isOpen = false;
    },
  },
});

export const { closePopup, openPopup } = popupSlice.actions;
