import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { appReducer } from './app-reducer';
import { bookInfoReducer } from './book-info-reducer';
import { booksReducer } from './books-reducer';

export type AppRootStateType = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  app: appReducer,
  books: booksReducer,
  bookInfo: bookInfoReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
