import { StatusLoading } from '../types/utils-t';

export enum AppActionType {
  SET_STATUS_LOADING = '[AppActionType] SET_STATUS_LOADING',
}

export type AppActionReturnType = ReturnType<typeof setAppStatusLoading>;

export type InitialStateType = {
  statusLoading: StatusLoading;
  error: string | null;
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
    default:
      return state;
  }
};

export const setAppStatusLoading = (statusLoading: StatusLoading) =>
  ({
    type: AppActionType.SET_STATUS_LOADING,
    statusLoading,
  } as const);
