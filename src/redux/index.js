import { configureStore } from '@reduxjs/toolkit';
import mainReduser from './mainSlice';
import cartReduser from './cartSlice';

const store = configureStore({
  reducer: {
    filters: mainReduser,
    cartReduser: cartReduser,
  },
});

export default store;
