import axios from 'axios';

import { BookI } from '../interface/book-i/book-i';
import { ErrorResponseI } from '../interface/utils-i/utils-i';

export interface ResponseI<D> {
  data: D;
  error: ErrorResponseI;
}

const instance = axios.create({
  baseURL: 'https://strapi.cleverland.by',
});

export const booksApi = {
  getBooks() {
    return instance.get<ResponseI<BookI[]>>('/api/books');
  },
};
