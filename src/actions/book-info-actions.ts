import { BookInfoActionType } from '../enum';
import { BookInfoI } from '../interface';

export const setBookInfo = (book: BookInfoI) =>
  ({
    type: BookInfoActionType.SET_BOOK,
    book,
  } as const);
