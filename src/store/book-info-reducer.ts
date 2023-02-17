import axios from 'axios';

import { booksApi } from '../api/api-books';
import { BookInfoI } from '../interface/book-info-i/book-info-i';
import { ErrorResponseI } from '../interface/utils-i/utils-i';
import { AppThunkType } from '../types/thunk-t';

import { setAppStatusLoading } from './app-reducer';
import { setBooksErrorResponse } from './books-reducer';

export enum BookInfoActionType {
  SET_BOOK = '[BookInfoActionType] SET_BOOK',
}

interface InitialStateI {
  book: BookInfoI;
  error: ErrorResponseI | null;
}
const initialState: InitialStateI = {
  book: {
    id: 1,
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
    rating: 4.3,
    issueYear: '2019',
    description:
      'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?\nОткройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.',
    publish: 'Питер',
    pages: '288',
    cover: 'Мягкая обложка',
    weight: '370',
    format: '70х100',
    ISBN: '978-5-4461-0923-4',
    producer: 'ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
    authors: ['Адитья Бхаргава'],
    images: null,
    categories: ['Зарубежная литература', 'Компьютерная литература'],
    comments: [
      {
        id: 1,
        rating: 4,
        text: 'Самая лучшая книга в мире',
        createdAt: '2022-10-23T12:23:13.012Z',
        user: {
          commentUserId: 6,
          firstName: 'Aliaksei',
          lastName: 'Valadzko',
          avatarUrl: '/uploads/thumbnail_Screenshot_3_1016a62c87.png',
        },
      },
    ],
    booking: {
      id: 7,
      order: true,
      dateOrder: '2022-10-24T00:00:00.000Z',
      customerId: 6,
      customerFirstName: 'Алексей',
      customerLastName: 'Володько',
    },
    delivery: {
      id: 7,
      handed: true,
      dateHandedFrom: '2022-10-24T00:00:00.000Z',
      dateHandedTo: '2022-10-28T00:00:00.000Z',
      recipientId: 6,
      recipientFirstName: 'Ал',
      recipientLastName: 'Вал',
    },
    histories: [
      {
        id: 1,
        userId: 7,
      },
    ],
  },
  error: null,
};

export type BookInfoActionReturnType = ReturnType<typeof setBookInfo>;

export const bookInfoReducer = (state = initialState, action: BookInfoActionReturnType): InitialStateI => {
  switch (action.type) {
    case BookInfoActionType.SET_BOOK:
      return {
        ...state,
        book: action.book,
      };
    default:
      return state;
  }
};

export const setBookInfo = (book: BookInfoI) =>
  ({
    type: BookInfoActionType.SET_BOOK,
    book,
  } as const);

export const getBookInfoTC =
  (id: string): AppThunkType =>
  async (dispatch) => {
    dispatch(setAppStatusLoading('loading'));
    try {
      const response = await booksApi.getBookInfo(id);

      dispatch(setBookInfo(response.data));
      dispatch(setAppStatusLoading('succeeded'));
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        dispatch(setBooksErrorResponse(error?.response?.data.error));
      }
      dispatch(setAppStatusLoading('failed'));
    }
  };
