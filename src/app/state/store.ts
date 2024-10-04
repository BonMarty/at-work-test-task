import { configureStore } from '@reduxjs/toolkit';
import { popupSlice, usersSlice } from '../../entities';
import { editUserSlice } from '../../features';
import { editCategoriesSlice } from '../../widgets';

export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    editCategories: editCategoriesSlice.reducer,
    editUser: editUserSlice.reducer,
    popup: popupSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
