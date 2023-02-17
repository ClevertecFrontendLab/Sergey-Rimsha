import { BooksActionType } from '../enum';
import { BookI, ErrorResponseI } from '../interface';
import { BooksActionReturnType, StatusLoading } from '../types';

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
        error: null,
      };
    case BooksActionType.SET_ERROR_RESPONSE:
      return {
        ...state,
        items: [],
        error: action.error,
      };
    default:
      return state;
  }
};
