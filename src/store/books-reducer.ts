import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { booksApi } from '../api/api-books';
import { BookI } from '../interface/book-i/book-i';
import { ErrorI } from '../interface/error-i/error-i';

interface InitialStateI {
  books: BookI[];
  error: ErrorI | null;
}

const initialState: InitialStateI = {
  books: [],
  error: null,
};

export const getBooksTC = createAsyncThunk('books/getBooks', async (arg, { dispatch }) => {
  try {
    const res = await booksApi.getBooks();

    console.log(res.data.data);

    // dispatch(setBooksAC({ books: res.data.data }));
  } catch (error) {
    console.log(error);
  }
});

const slice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooksAC(state, action: PayloadAction<{ books: BookI[] }>) {
      state.books = action.payload.books;
    },
  },
});

export const booksReducer = slice.reducer;

export const { setBooksAC } = slice.actions;
