import axios from 'axios';

import { setAppCategories, setAppError, setAppStatusLoading } from '../actions';
import { booksApi } from '../api';
import { AppThunkType } from '../types';

export const getCategoriesTC = (): AppThunkType => async (dispatch) => {
  dispatch(setAppStatusLoading('loading'));
  try {
    const response = await booksApi.getCategories();

    dispatch(setAppCategories(response.data));
    dispatch(setAppStatusLoading('succeeded'));
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      dispatch(setAppError(error?.response?.data.error));
    }
    dispatch(setAppStatusLoading('failed'));
  }
};
