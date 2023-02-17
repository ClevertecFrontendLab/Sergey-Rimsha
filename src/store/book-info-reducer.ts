import { BookInfoActionType } from '../enum';
import { BookInfoI, ErrorResponseI } from '../interface';
import { BookInfoActionReturnType } from '../types';

interface InitialStateI {
  book: BookInfoI;
  error: ErrorResponseI | null;
}
const initialState: InitialStateI = {
  book: {},
  error: null,
};

export const bookInfoReducer = (state = initialState, action: BookInfoActionReturnType): InitialStateI => {
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
