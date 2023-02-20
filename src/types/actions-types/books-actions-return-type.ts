import { setBooks, setBooksErrorResponse, setBooksSortRating, setBooksStatusLoading } from '../../actions';

export type BooksActionReturnType =
  | ReturnType<typeof setBooksStatusLoading>
  | ReturnType<typeof setBooks>
  | ReturnType<typeof setBooksErrorResponse>
  | ReturnType<typeof setBooksSortRating>;
