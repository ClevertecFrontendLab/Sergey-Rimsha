import axios from 'axios';

import { BookI, BookInfoI, CategoriesI, ErrorResponseI } from '../interface';

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
