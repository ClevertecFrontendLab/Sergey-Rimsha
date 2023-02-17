import axios from 'axios';

import { setAppStatusLoading, setBooks, setBooksErrorResponse } from '../actions';
import { booksApi } from '../api';
import { AppThunkType } from '../types';

export const getBooksTC = (): AppThunkType => async (dispatch) => {
  dispatch(setAppStatusLoading('loading'));
  try {
    const response = await booksApi.getBooks();

    dispatch(setBooks(response.data));
    dispatch(setAppStatusLoading('succeeded'));
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      dispatch(setBooksErrorResponse(error?.response?.data.error));
    }
    dispatch(setAppStatusLoading('failed'));
  }
};
