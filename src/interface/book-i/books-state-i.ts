import { StatusLoading } from '../../types';
import { ErrorResponseI } from '../utils-i';

import { BookI } from './book-i';

export interface BooksStateI {
  statusLoading: StatusLoading;
  items: BookI[];
  sort: boolean;
  error: ErrorResponseI | null;
  search: string;
}
