import { ErrorResponseI } from '../utils-i';

import { BookInfoI } from './book-info-i';

export interface BookInfoStateI {
  book: BookInfoI;
  error: ErrorResponseI | null;
}
