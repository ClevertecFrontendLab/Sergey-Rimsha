import { configureStore } from '@reduxjs/toolkit';

import { appReducer } from './app-reducer';
import { bookInfoReducer } from './book-info-reducer';
import { booksReducer } from './books-reducer';

export const store = configureStore({
  reducer: {
    app: appReducer,
    books: booksReducer,
    bookInfo: bookInfoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
