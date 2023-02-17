import { setAppCategories, setAppError, setAppStatusLoading } from '../actions';
import { booksApi } from '../api';
import { AppThunkType } from '../types';
import { getErrorResponse } from '../utils';

export const getCategoriesTC = (): AppThunkType => async (dispatch) => {
  dispatch(setAppStatusLoading('loading'));
  try {
    const response = await booksApi.getCategories();

    dispatch(setAppCategories(response.data));
    dispatch(setAppStatusLoading('succeeded'));
  } catch (error: unknown) {
    dispatch(setAppError(getErrorResponse(error)));
    dispatch(setAppStatusLoading('failed'));
  }
};
