import { getStars } from '../../../../utils/utils';

import s from './rating.module.scss';

interface RatingI {
  ratingValue: number | undefined;
}

export const Rating = ({ ratingValue = 0 }: RatingI) => (
  <div className={s.rating}>
    <div className={s.rating__title}>Рейтинг</div>
    <div className={s.rating__wrap}>
      <div className={s.rating__box}>
        {getStars(ratingValue).map((el, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <img key={i} className={s.rating__star} src={el} alt='star' />
        ))}
      </div>
      {ratingValue === 0 ? (
        <div className={s.rating__message}>ещё нет оценок</div>
      ) : (
        <div className={`${s.rating__value}`}>{ratingValue}</div>
      )}
    </div>
  </div>
);
