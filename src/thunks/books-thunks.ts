import { setAppError, setAppStatusLoading, setBooks, setBooksErrorResponse } from '../actions';
import { booksApi } from '../api';
import { AppThunkType } from '../types';
import { getErrorResponse } from '../utils';

export const getBooksTC = (): AppThunkType => async (dispatch) => {
  dispatch(setAppStatusLoading('loading'));
  try {
    const response = await booksApi.getBooks();

    dispatch(setBooks(response.data));
    dispatch(setAppStatusLoading('succeeded'));
  } catch (error: unknown) {
    dispatch(setAppError(getErrorResponse(error)));
    dispatch(setBooksErrorResponse(getErrorResponse(error)));
    dispatch(setAppStatusLoading('failed'));
  }
};
