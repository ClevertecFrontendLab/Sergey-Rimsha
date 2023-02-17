import axios from 'axios';

import { setAppError, setAppStatusLoading, setBookInfo } from '../actions';
import { booksApi } from '../api';
import { AppThunkType } from '../types';

export const getBookInfoTC =
  (id: string): AppThunkType =>
  async (dispatch) => {
    dispatch(setAppStatusLoading('loading'));
    try {
      const response = await booksApi.getBookInfo(id);

      dispatch(setBookInfo(response.data));
      dispatch(setAppStatusLoading('succeeded'));
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        dispatch(setAppError(error?.response?.data.error));
      }
      dispatch(setAppStatusLoading('failed'));
    }
  };
