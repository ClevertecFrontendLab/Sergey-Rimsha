import { BooksActionType } from '../enum';
import { BookI, ErrorResponseI } from '../interface';
import { StatusLoading } from '../types';

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

export const setBooksSortRating = (sort: boolean) =>
  ({
    type: BooksActionType.SET_SORT_RATING,
    sort,
  } as const);
