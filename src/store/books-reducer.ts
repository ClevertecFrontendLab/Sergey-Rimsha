import axios from 'axios';

import { booksApi } from '../api/api-books';
import { BookI } from '../interface/book-i/book-i';
import { ErrorResponseI } from '../interface/utils-i/utils-i';
import { AppThunkType } from '../types/thunk-t';
import { StatusLoading } from '../types/utils-t';

import { setAppStatusLoading } from './app-reducer';

interface InitialStateI {
  items: BookI[];
  error: ErrorResponseI | null;
  statusLoading: StatusLoading;
}

const initialState: InitialStateI = {
  items: [],
  error: null,
  statusLoading: 'idle',
};

export const getBooksTC = (): AppThunkType => async (dispatch) => {
  try {
    dispatch(setAppStatusLoading('loading'));
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

export enum BooksActionType {
  SET_STATUS_LOADING = '[BooksActionType] SET_STATUS_LOADING',
  SET_BOOKS = '[BooksActionType] SET_BOOKS',
  SET_ERROR_RESPONSE = '[BooksActionType] SET_ERROR_RESPONSE',
}

export type BooksActionReturnType =
  | ReturnType<typeof setBooksStatusLoading>
  | ReturnType<typeof setBooks>
  | ReturnType<typeof setBooksErrorResponse>;

export const booksReducer = (state = initialState, action: BooksActionReturnType): InitialStateI => {
  switch (action.type) {
    case BooksActionType.SET_STATUS_LOADING:
      return {
        ...state,
        statusLoading: action.statusLoading,
      };
    case BooksActionType.SET_BOOKS:
      return {
        ...state,
        items: action.books,
      };
    case BooksActionType.SET_ERROR_RESPONSE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export const setBooksStatusLoading = (statusLoading: StatusLoading) =>
  ({
    type: BooksActionType.SET_STATUS_LOADING,
    statusLoading,
  } as const);

export const setBooks = (books: BookI[]) =>
  ({
    type: BooksActionType.SET_BOOKS,
    books,
  } as const);

export const setBooksErrorResponse = (error: ErrorResponseI) =>
  ({
    type: BooksActionType.SET_ERROR_RESPONSE,
    error,
  } as const);
