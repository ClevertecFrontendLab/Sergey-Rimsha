import { useState } from 'react';
import classNames from 'classnames';

import comment_avatar from '../../../../assets/png/comment_avatar.png';
import { getStars } from '../../../../utils/utils';
import { CommentI } from '../../../main/main-page';

import s from './comments.module.scss';

interface CommentsI {
  comments: CommentI[] | undefined;
}

export const Comments = ({ comments = [] }: CommentsI) => {
  const [showComments, setShowComments] = useState<boolean>(false);

  const onClickHandlerShowComments = () => {
    setShowComments((prevState) => !prevState);
  };

  return (
    <div className={s.comment}>
      <div className={s.comment__box}>
        <div className={s.comment__title}>Отзывы</div>
        <div className={s.comment__value}>{comments?.length}</div>
        <button
          data-test-id='button-hide-reviews'
          className={classNames(`${s.comment__arrow} ${s.arrow}`, { [`${s.arrow_show}`]: showComments })}
          onClick={onClickHandlerShowComments}
          type='button'>
          {}
        </button>
      </div>
      {comments?.map((el) => (
        <div key={el.id} className={classNames(s.comment__content, { [`${s.comment__content_show}`]: !showComments })}>
          <div className={s.comment__wrap}>
            <img className={s.comment__img} src={comment_avatar} alt='avatar' />
            <div className={s.comment__block}>
              <div className={s.comment__name}>{el.name}</div>
              <div className={s.comment__date}>{el.data}</div>
            </div>
          </div>
          <div className={s.comment__rating}>
            {getStars(el.rating).map((item, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <img key={i} src={item} alt='star' />
            ))}
          </div>
          <div className={s.comment__message}>{el.message?.length ? el.message : ''}</div>
        </div>
      ))}
      <div data-test-id='button-rating' className={s.comment__button}>
        <button type='button'>оценить книгу</button>
      </div>
    </div>
  );
};
