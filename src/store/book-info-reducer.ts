import { BookInfoActionType } from '../enum';
import { BookInfoStateI } from '../interface';
import { BookInfoActionReturnType } from '../types';

const initialState: BookInfoStateI = {
  book: {},
  error: null,
};

export const bookInfoReducer = (state = initialState, action: BookInfoActionReturnType): BookInfoStateI => {
  switch (action.type) {
    case BookInfoActionType.SET_BOOK:
      return {
        ...state,
        book: action.book,
        error: null,
      };
    case BookInfoActionType.SET_ERROR:
      return {
        ...state,
        error: action.error,
        book: {},
      };
    default:
      return state;
  }
};
