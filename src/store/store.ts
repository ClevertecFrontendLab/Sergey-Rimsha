import { useDispatch } from 'react-redux';
import { combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

import { appReducer } from './app-reducer';
import { bookInfoReducer } from './book-info-reducer';
import { booksReducer } from './books-reducer';

const rootReducer = combineReducers({
  app: appReducer,
  books: booksReducer,
  bookInfo: bookInfoReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware),
});

export type AppRootStateType = ReturnType<typeof store.getState>;
type AppDispatchType = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatchType>();
