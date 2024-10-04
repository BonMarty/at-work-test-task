import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { EditCategoriesState } from './types';

const initialState: EditCategoriesState = {
  categories: ['Данные профиля', 'Рабочее пространство', 'Приватность', 'Безопасность'],
  activeIndex: 0,
};

export const editCategoriesSlice = createSlice({
  name: 'editCategories',
  initialState,
  reducers: {
    setActiveIndex(state: EditCategoriesState, action: PayloadAction<number>) {
      state.activeIndex = action.payload;
    },
  },
});

export const { setActiveIndex } = editCategoriesSlice.actions;
