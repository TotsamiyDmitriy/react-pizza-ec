import { createSlice } from '@reduxjs/toolkit';

const cartReduser = createSlice({
  name: 'cartSlice',
  initialState: {
    cart: {},
    totalPrice: 0,
    totalCount: 0,
  },
  reducers: {
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    setTotalCount: (state, action) => {
      state.totalCount = action.payload;
    },
    addCartItem: (state, action) => {
      const obj = Object.assign(state.cart);
      state.cart = {
        [action.payload.id]: [obj, action.payload],
      };
      console.log(state.cart);
    },
  },
});

export const { setTotalPrice, setTotalCount, addCartItem } = cartReduser.actions;
export default cartReduser.reducer;
