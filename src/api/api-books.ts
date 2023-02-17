import axios from 'axios';

import { BookI } from '../interface/book-i/book-i';
import { BookInfoI } from '../interface/book-info-i/book-info-i';
import { CategoriesI, ErrorResponseI } from '../interface/utils-i/utils-i';

export interface ResponseI<D> {
  data: D;
  error: ErrorResponseI;
}

const instance = axios.create({
  baseURL: 'https://strapi.cleverland.by',
});

export const booksApi = {
  getBooks() {
    return instance.get<BookI[]>('/api/books');
  },
  getBookInfo(id: string) {
    return instance.get<BookInfoI>(`/api/books/${id}`);
  },
  getCategories() {
    return instance.get<CategoriesI[]>('/api/categories');
  },
};
