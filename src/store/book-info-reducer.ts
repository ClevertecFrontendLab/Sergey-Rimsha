import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { BookInfoI } from '../interface/book-info-i/book-info-i';
import { ErrorResponseI } from '../interface/utils-i/utils-i';

interface InitialStateI {
  item: BookInfoI;
  error: ErrorResponseI | null;
}
const initialState: InitialStateI = {
  item: {
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
    images: [
      {
        url: '/uploads/image_book_5e25f0be0d.jpg',
      },
    ],
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

const slice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBookInfoAC(state, action: PayloadAction<{ bookInfo: BookInfoI }>) {
      state.item = action.payload.bookInfo;
    },
  },
});

export const bookInfoReducer = slice.reducer;

export const { setBookInfoAC } = slice.actions;
