import axios, { AxiosResponse } from 'axios';

import { BookI } from '../interface/book-i/book-i';
import { ErrorI } from '../interface/error-i/error-i';

export interface BooksApiErrorI {
  status: number;
  name: string;
  message: string;
  details: object;
}

const instance = axios.create({
  baseURL: 'https://strapi.cleverland.by',
});

export const booksApi = {
  getBooks() {
    return instance.get<AxiosResponse<BookI[], ErrorI>>('/api/books');
  },
};
