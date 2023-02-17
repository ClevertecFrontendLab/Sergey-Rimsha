import { setBooks, setBooksErrorResponse, setBooksStatusLoading } from '../../actions';

export type BooksActionReturnType =
  | ReturnType<typeof setBooksStatusLoading>
  | ReturnType<typeof setBooks>
  | ReturnType<typeof setBooksErrorResponse>;
