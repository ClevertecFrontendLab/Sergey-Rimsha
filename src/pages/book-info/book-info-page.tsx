import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { BookInfoI, ErrorResponseI } from '../../interface';
import { getBookInfoTC } from '../../thunks';
import { getDateTransformCard } from '../../utils';

import { Comments, Description, Header, Info, Rating, SwiperCustom } from './components';

import s from './book-info-page.module.scss';

export const BookInfoPage = () => {
  const { id, category } = useParams();
  const dispatch = useAppDispatch();

  const book = useAppSelector<BookInfoI>((state) => state.bookInfo.book);
  const error = useAppSelector<ErrorResponseI | null>((state) => state.app.error);

  let disabled = false;

  let titleBtn = 'Забронировать';

  if (book.booking?.order) {
    titleBtn = getDateTransformCard(book.booking.dateOrder);
    disabled = true;
  }

  useEffect(() => {
    if (id) {
      dispatch(getBookInfoTC(id));
    }
  }, [dispatch, id]);

  return (
    <section className={s.bookInfo}>
      <Header bookName={book.title} category={category} />
      <div className={classNames(s.container, { [`${s.showContent}`]: !error })}>
        <div className={s.bookInfo__content}>
          <SwiperCustom images={book?.images} />
          <div className={s.bookInfo__box}>
            <div data-test-id='book-title' className={s.bookInfo__title}>
              {book.title}
            </div>
            <div className={s.bookInfo__author}>{`${book?.authors?.join(',')}, ${book.issueYear}`}</div>
            <div className={s.bookInfo__button}>
              <button disabled={disabled} type='button'>
                {titleBtn}
              </button>
            </div>
            <Description description={book.description} showOnly='lg' />
          </div>
        </div>
        <Description description={book.description} showOnly='md' />
        <Rating ratingValue={book.rating} />
        <Info
          issueYear={book.issueYear}
          pages={book.pages}
          publish={book.publish}
          cover={book.cover}
          weight={book.weight}
          format={book.format}
          ISBN={book.ISBN}
          producer={book.producer}
        />
        <Comments comments={book.comments} />
      </div>
    </section>
  );
};
