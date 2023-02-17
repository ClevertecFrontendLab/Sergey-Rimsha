import axios from 'axios';

import { booksApi } from '../api/api-books';
import { CategoriesI, ErrorResponseI } from '../interface/utils-i/utils-i';
import { AppThunkType } from '../types/thunk-t';
import { StatusLoading } from '../types/utils-t';

import { setBooksErrorResponse } from './books-reducer';

export enum AppActionType {
  SET_STATUS_LOADING = '[AppActionType] SET_STATUS_LOADING',
  SET_ERROR = '[AppActionType] SET_ERROR',
  SET_CATEGORIES = '[AppActionType] SET_CATEGORIES',
}

export type AppActionReturnType =
  | ReturnType<typeof setAppStatusLoading>
  | ReturnType<typeof setAppError>
  | ReturnType<typeof setAppCategories>;

export type InitialStateType = {
  statusLoading: StatusLoading;
  error: ErrorResponseI | null;
  isInitialized: boolean;
  categories: CategoriesI[];
};

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

export const setAppCategories = (categories: CategoriesI[]) =>
  ({
    type: AppActionType.SET_CATEGORIES,
    categories,
  } as const);

export const getCategories = (): AppThunkType => async (dispatch) => {
  dispatch(setAppStatusLoading('loading'));
  try {
    const response = await booksApi.getCategories();

    dispatch(setAppCategories(response.data));
    dispatch(setAppStatusLoading('succeeded'));
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      dispatch(setBooksErrorResponse(error?.response?.data.error));
    }
    dispatch(setAppStatusLoading('failed'));
  }
};
