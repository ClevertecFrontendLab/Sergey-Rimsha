import { ErrorResponseI } from '../interface/utils-i/utils-i';
import { StatusLoading } from '../types/utils-t';

export enum AppActionType {
  SET_STATUS_LOADING = '[AppActionType] SET_STATUS_LOADING',
  SET_ERROR = '[AppActionType] SET_ERROR',
}

export type AppActionReturnType = ReturnType<typeof setAppStatusLoading> | ReturnType<typeof setAppError>;

export type InitialStateType = {
  statusLoading: StatusLoading;
  error: ErrorResponseI | null;
  isInitialized: boolean;
};

const initialState: InitialStateType = {
  statusLoading: 'idle',
  error: null,
  isInitialized: false,
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
    default:
      return state;
  }
};

export const setAppStatusLoading = (statusLoading: StatusLoading) =>
  ({
    type: AppActionType.SET_STATUS_LOADING,
    statusLoading,
  } as const);

export const setAppError = (error: ErrorResponseI | null) =>
  ({
    type: AppActionType.SET_ERROR,
    error,
  } as const);
