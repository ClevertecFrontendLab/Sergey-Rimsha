import { BooksActionType } from '../enum';
import { BookI, ErrorResponseI } from '../interface';
import { BooksActionReturnType, StatusLoading } from '../types';

interface InitialStateI {
  statusLoading: StatusLoading;
  items: BookI[];
  sort: boolean;
  error: ErrorResponseI | null;
}

const initialState: InitialStateI = {
  items: [],
  error: null,
  statusLoading: 'idle',
  sort: true,
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
    case BooksActionType.SET_SORT_RATING:
      return {
        ...state,
        items: [...state.items.reverse()],
        sort: action.sort,
      };
    default:
      return state;
  }
};
