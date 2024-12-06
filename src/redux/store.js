import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './slices/CartSlice';

const store = configureStore({
  reducer: {
    cart: CartSlice, // Register the slice reducer
  },
});

export default store;
