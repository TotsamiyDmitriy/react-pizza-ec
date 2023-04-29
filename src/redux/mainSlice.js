import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const mainReduser = createSlice({
  name: 'mainSlice',
  initialState: {
    product: [],
    isLoaded: false,
    sortBy: { type: 'popular', order: 'desc' },
    category: null,
  },
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
      state.isLoaded = true;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setLoaded: (state, action) => {
      state.isLoaded = action.payload;
    },
  },
});

// Определяем `thunk`
export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `http://localhost:3001/pizzas?${category === null ? '' : `category=${category}`}&_sort=${
        sortBy.type
      }&_order=${sortBy.order}`,
    )
    .then(({ data }) => {
      dispatch(setProduct(data));
    });
};

export const { setCategory, setProduct, setLoaded, setSortBy } = mainReduser.actions;
export default mainReduser.reducer;
