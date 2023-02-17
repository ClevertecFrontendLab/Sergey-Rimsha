import s from './info.module.scss';

interface InfoPropsI {
  issueYear: string;
  publish: string;
  pages: string;
  cover: string;
  weight: string;
  format: string;
  ISBN: string;
  producer: string;
}

export const Info = ({ issueYear, publish, pages, cover, weight, format, producer, ISBN }: InfoPropsI) => (
  <div className={s.info}>
    <div className={s.info__title}>Подробная информация</div>
    <div className={s.info__box}>
      <div className={s.info__group}>
        <div className={s.info__item}>
          <div className={s.info__subTitle}>Издательство</div>
          <div className={s.info__description}>{publish}</div>
        </div>
        <div className={s.info__item}>
          <div className={s.info__subTitle}>Год издания</div>
          <div className={s.info__description}>{issueYear}</div>
        </div>
        <div className={s.info__item}>
          <div className={s.info__subTitle}>Страниц</div>
          <div className={s.info__description}>{pages}</div>
        </div>
        <div className={s.info__item}>
          <div className={s.info__subTitle}>Переплёт</div>
          <div className={s.info__description}>{cover}</div>
        </div>
        <div className={s.info__item}>
          <div className={s.info__subTitle}>Формат</div>
          <div className={s.info__description}>{format}</div>
        </div>
      </div>
      <div className={s.info__group}>
        <div className={s.info__item}>
          <div className={s.info__subTitle}>Жанр</div>
          <div className={s.info__description}>Компьютерная литература</div>
        </div>
        <div className={s.info__item}>
          <div className={s.info__subTitle}>Вес</div>
          <div className={s.info__description}>{`${weight}г`}</div>
        </div>
        <div className={s.info__item}>
          <div className={s.info__subTitle}>ISBN</div>
          <div className={s.info__description}>{ISBN}</div>
        </div>
        <div className={s.info__item}>
          <div className={s.info__subTitle}>Изготовитель</div>
          <div className={s.info__description}>{producer}</div>
        </div>
      </div>
    </div>
  </div>
);
