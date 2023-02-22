import { BooksActionType } from '../enum';
import { BooksStateI } from '../interface';
import { BooksActionReturnType } from '../types';

const initialState: BooksStateI = {
  items: [],
  error: null,
  statusLoading: 'idle',
  sort: true,
  search: '',
};

export const booksReducer = (state = initialState, action: BooksActionReturnType): BooksStateI => {
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
    case BooksActionType.SET_SEARCH:
      return {
        ...state,
        search: action.search,
      };
    default:
      return state;
  }
};
