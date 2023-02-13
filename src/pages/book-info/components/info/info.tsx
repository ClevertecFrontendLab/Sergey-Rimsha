import s from './info.module.scss';

export const Info = () => (
  <div className={s.info}>
    <div className={s.info__title}>Подробная информация</div>
    <div className={s.info__box}>
      <div className={s.info__group}>
        <div className={s.info__item}>
          <div className={s.info__subTitle}>Издательство</div>
          <div className={s.info__description}>Питер</div>
        </div>
        <div className={s.info__item}>
          <div className={s.info__subTitle}>Год издания</div>
          <div className={s.info__description}>2019</div>
        </div>
        <div className={s.info__item}>
          <div className={s.info__subTitle}>Страниц</div>
          <div className={s.info__description}>288</div>
        </div>
        <div className={s.info__item}>
          <div className={s.info__subTitle}>Переплёт</div>
          <div className={s.info__description}>Мягкая обложка</div>
        </div>
        <div className={s.info__item}>
          <div className={s.info__subTitle}>Формат</div>
          <div className={s.info__description}>70х100</div>
        </div>
      </div>
      <div className={s.info__group}>
        <div className={s.info__item}>
          <div className={s.info__subTitle}>Жанр</div>
          <span className={s.info__description}>Компьютерная литература</span>
        </div>
        <div className={s.info__item}>
          <div className={s.info__subTitle}>Вес</div>
          <span className={s.info__description}>370 г</span>
        </div>
        <div className={s.info__item}>
          <div className={s.info__subTitle}>ISBN</div>
          <span className={s.info__description}>978-5-4461-0923-4</span>
        </div>
        <div className={s.info__item}>
          <div className={s.info__subTitle}>Изготовитель</div>
          <span className={s.info__description}>
            ООО«Питер Мейл». РФ, 198206, г.Санкт-Петербург, Петергофское ш, д.73, лит. А29
          </span>
        </div>
      </div>
    </div>
  </div>
);
