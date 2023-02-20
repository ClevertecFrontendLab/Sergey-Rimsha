import axios from 'axios';

import star from '../assets/icon/icon_star.svg';
import star_active from '../assets/icon/icon_star_active.svg';
import { ErrorMessage } from '../enum';
import { BookI, ErrorResponseI } from '../interface';

export const getStars = (ratingValue: number) => {
  const stars = [];

  const showStar = (idStar: number) => {
    if (idStar <= ratingValue) {
      return star_active;
    }

    return star;
  };

  for (let i = 1; i <= 5; i++) {
    stars.push(showStar(i));
  }

  return stars;
};

export const getDateTransformCard = (data: string) => {
  const mount = new Date(data).getMonth() + 1;
  const day = new Date(data).getDate();

  const reformat = (value: number) => (value > 10 ? value : `0${value}`);

  return `занято до ${reformat(day)}.${reformat(mount)}`;
};

export const getDataTransform = (data: string) => {
  const dataNew = new Date(data);

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return dataNew.toLocaleString('ru', options);
};

export const getBookUrl = (img: { url: string } | null) => {
  const BaseUrl = 'https://strapi.cleverland.by';

  if (img) {
    return `${BaseUrl}${img.url}`;
  }

  return '';
};

export const getErrorResponse = (error: unknown): ErrorResponseI => {
  if (axios.isAxiosError(error)) {
    return {
      status: 1,
      name: 'error',
      message: ErrorMessage.MESSAGE,
      details: {},
    };
  }

  return {
    status: 1,
    name: 'error',
    message: ErrorMessage.MESSAGE,
    details: {},
  };
};

export const sortBooksRatingDefault = (books: BookI[]): BookI[] => {
  const booksNotRating = books.filter((el) => el.rating === null);

  const booksRating = books.filter((el) => el.rating !== null);

  booksRating.sort((a, b) => {
    if (a.rating && b.rating) {
      return b.rating - a.rating;
    }

    return 0;
  });

  return [...booksRating, ...booksNotRating];
};
