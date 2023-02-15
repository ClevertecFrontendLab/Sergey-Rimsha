import { createAsyncThunk, createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';

import { booksApi } from '../api/api-books';
import { BookI } from '../interface/book-i/book-i';
import { ErrorResponseI } from '../interface/utils-i/utils-i';

import { AppDispatch } from './store';

interface InitialStateI {
  items: BookI[];
  error: ErrorResponseI | null;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: InitialStateI = {
  items: [],
  error: null,
  loading: 'idle',
};

type AsyncThunkConfigType = {
  dispatch?: AppDispatch;
  rejectValue?: {
    error?: ErrorResponseI;
  };
};

export const getBooksTC = createAsyncThunk<any, undefined, AsyncThunkConfigType>(
  'books/getBooksTC',
  async (arg, { dispatch }) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      dispatch(setStatusLoading({ loading: 'pending' }));
      const response = await booksApi.getBooks();

      console.log(response.data);

      return response.data;
    } catch (error) {
      console.log(error);

      return {};
    } finally {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      dispatch(setStatusLoading({ loading: 'succeeded' }));
    }
  }
);

const slice = createSlice({
  name: 'booksSlice',
  initialState,
  reducers: {
    setBooksAC(state, action: PayloadAction<{ books: BookI[] }>) {
      state.items = action.payload.books;
    },
    setStatusLoading(state, action: PayloadAction<{ loading: 'idle' | 'pending' | 'succeeded' | 'failed' }>) {
      state.loading = action.payload.loading;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBooksTC.fulfilled, (state, action) => {
      state.items = action.payload;
      console.log(action.payload);
    });
    // builder.addCase(getBooksTC.rejected, (state, action) => {
    //   // state.error = action.payload.error;
    // });
  },
});

export const booksReducer = slice.reducer;

export const { setBooksAC, setStatusLoading } = slice.actions;
