import { setBookInfo, setBookInfoError } from '../../actions';

export type BookInfoActionReturnType = ReturnType<typeof setBookInfo> | ReturnType<typeof setBookInfoError>;
