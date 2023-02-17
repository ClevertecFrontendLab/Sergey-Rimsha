import { setAppCategories, setAppError, setAppStatusLoading } from '../../actions';

export type AppActionReturnType =
  | ReturnType<typeof setAppStatusLoading>
  | ReturnType<typeof setAppError>
  | ReturnType<typeof setAppCategories>;
