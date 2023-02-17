import { setAppError, setAppStatusLoading, setBookInfo } from '../actions';
import { booksApi } from '../api';
import { AppThunkType } from '../types';
import { getErrorResponse } from '../utils';

export const getBookInfoTC =
  (id: string): AppThunkType =>
  async (dispatch) => {
    dispatch(setAppStatusLoading('loading'));
    try {
      const response = await booksApi.getBookInfo(id);

      dispatch(setBookInfo(response.data));
      dispatch(setAppStatusLoading('succeeded'));
    } catch (error: unknown) {
      dispatch(setAppError(getErrorResponse(error)));
      dispatch(setAppStatusLoading('failed'));
    }
  };
