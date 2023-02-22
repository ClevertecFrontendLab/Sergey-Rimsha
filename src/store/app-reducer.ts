import { AppActionType } from '../enum';
import { AppStateI } from '../interface';
import { AppActionReturnType } from '../types';

const initialState: AppStateI = {
  statusLoading: 'idle',
  error: null,
  isInitialized: false,
  categories: [],
};

export const appReducer = (state = initialState, action: AppActionReturnType): AppStateI => {
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
