import { setAppCategories, setAppError, setAppStatusLoading, setBooks, setBooksErrorResponse } from '../actions';
import { booksApi } from '../api';
import { AppThunkType } from '../types';
import { getErrorResponse, getValueCategories, sortBooksRatingDefault } from '../utils';

export const getBooksTC = (): AppThunkType => async (dispatch, getState) => {
  dispatch(setAppStatusLoading('loading'));
  try {
    const response = await booksApi.getBooks();

    dispatch(setBooks(sortBooksRatingDefault(response.data)));
    dispatch(setAppCategories(getValueCategories(response.data, getState().app.categories)));
    dispatch(setAppStatusLoading('succeeded'));
  } catch (error: unknown) {
    dispatch(setAppError(getErrorResponse(error)));
    dispatch(setBooksErrorResponse(getErrorResponse(error)));
    dispatch(setAppStatusLoading('failed'));
  }
};
