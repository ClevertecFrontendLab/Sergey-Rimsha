import { AppActionType } from '../enum';
import { CategoriesI, ErrorResponseI } from '../interface';
import { AppActionReturnType, StatusLoading } from '../types';

interface InitialStateType {
  statusLoading: StatusLoading;
  error: ErrorResponseI | null;
  isInitialized: boolean;
  categories: CategoriesI[];
}

const initialState: InitialStateType = {
  statusLoading: 'idle',
  error: null,
  isInitialized: false,
  categories: [],
};

export const appReducer = (state = initialState, action: AppActionReturnType): InitialStateType => {
  switch (action.type) {
    case AppActionType.SET_STATUS_LOADING:
      return {
        ...state,
        statusLoading: action.statusLoading,
      };
    case AppActionType.SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case AppActionType.SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    default:
      return state;
  }
};
