import { useEffect, useState } from 'react';

import icon_filter from '../../assets/icon/icon_filter_lg.svg';
import icon_grid from '../../assets/icon/icon_grid.svg';
import icon_grid_active from '../../assets/icon/icon_grid_active.svg';
import icon_list from '../../assets/icon/icon_list.svg';
import icon_list_active from '../../assets/icon/icon_list_active.svg';
import book from '../../assets/jpg/book_lg.jpg';
import { BookCard } from '../../components/book-card';
import { InputSearch } from '../../components/input-search';

import s from './main-page.module.scss';

export interface BookingI {
  status: 'open' | 'close' | 'complete';
  message: string;
}

export interface CommentI {
  id: string;
  name: string;
  data: string;
  rating: number;
  message: string | undefined;
}

export interface CardI {
  id: string;
  image: string[];
  title: string;
  description: string;
  rating: number;
  booking: BookingI;
  comments?: CommentI[];
}

export const cards: CardI[] = [
  {
    id: '1',
    image: [''],
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
    description: 'Адитья Бхаргава, 2019',
    rating: 4.3,
    booking: { status: 'open', message: 'Забронировать' },
    comments: [
      { id: '1', name: 'Иван Иванов', data: '5 января 2019', rating: 4.3, message: '' },
      {
        id: '2',
        name: 'Иван Иванов',
        data: '20 июня 2018',
        rating: 4.3,
        message:
          'Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.',
      },
    ],
  },
  {
    id: '2',
    image: [book],
    title: 'Грокаем алгоритмы. Иллюстрированное',
    description: 'Адитья Бхаргава, 2019',
    rating: 0,
    booking: { status: 'open', message: 'Забронировать' },
  },
  {
    id: '3',
    image: [book, book],
    title: 'Грокаем алгоритмы.',
    description: 'Адитья Бхаргава, 2019',
    rating: 4.3,
    booking: { status: 'close', message: 'занята до 03.05' },
  },
  {
    id: '4',
    image: [book, '', book, book, ''],
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
    description: 'Адитья Бхаргава, 2019',
    rating: 4.3,
    booking: { status: 'open', message: 'Забронировать' },
  },
  {
    id: '5',
    image: [book, '', book, book, ''],
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
    description: 'Адитья Бхаргава, Патрик Нимейер, 2019',
    rating: 4.3,
    booking: { status: 'complete', message: 'Забронирована' },
  },
  {
    id: '6',
    image: [''],
    title: 'Грокаем алгоритмы. Иллюстрированное',
    description: 'Адитья Бхаргава, Патрик Нимейер, 2019',
    rating: 4.3,
    booking: { status: 'close', message: 'Занята до 23.04' },
  },
  {
    id: '7',
    image: [book, '', book, book, ''],
    title: 'Грокаем алгоритмы.',
    description: 'Адитья Бхаргава, Патрик Нимейер, 2019',
    rating: 4.3,
    booking: { status: 'open', message: 'Забронировать' },
  },
  {
    id: '8',
    image: [book, '', book, book, ''],
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
    description: 'Адитья Бхаргава, Патрик Нимейер, 2019',
    rating: 4.3,
    booking: { status: 'open', message: 'Забронировать' },
  },
  {
    id: '9',
    image: [book, '', book, book, ''],
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
    description: 'Адитья Бхаргава, 2019',
    rating: 4.3,
    booking: { status: 'open', message: 'Забронировать' },
  },
  {
    id: '10',
    image: ['', '', book, book, ''],
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для програ...',
    description: 'Адитья Бхаргава, 2019',
    rating: 4.3,
    booking: { status: 'open', message: 'Забронировать' },
  },
];

export const MainPage = () => {
  const [viewCards, setViewCards] = useState<'GRID' | 'LIST'>('GRID');
  const [styleViewGrid, setStyleViewGrid] = useState(`${s.menu__item} ${s.menu__item_active}`);
  const [styleViewList, setStyleViewList] = useState(`${s.menu__item}`);

  const [contentView, setContentView] = useState(`${s.main__content_grid}`);

  const onClickView = () => {
    setViewCards((prevState) => (prevState === 'GRID' ? 'LIST' : 'GRID'));
  };

  useEffect(() => {
    const styleActive = `${s.menu__item} ${s.menu__item_active}`;
    const styleDefault = `${s.menu__item}`;

    if (viewCards === 'GRID') {
      setStyleViewGrid(styleActive);
      setStyleViewList(styleDefault);
      setContentView(`${s.main__content_grid}`);
    } else if (viewCards === 'LIST') {
      setStyleViewList(styleActive);
      setStyleViewGrid(styleDefault);
      setContentView(`${s.main__content_list}`);
    }
  }, [viewCards]);

  return (
    <section className={s.main}>
      <div className={s.main__header}>
        <form className={s.from}>
          <InputSearch />
          <div className={s.from__filter}>
            <button type='button'>
              <img src={icon_filter} alt='sort' />
              <span>По рейтингу</span>
            </button>
          </div>
        </form>
        <div className={s.menu}>
          <button className={styleViewGrid} type='button' onClick={onClickView} data-test-id='button-menu-view-window'>
            <img src={viewCards === 'GRID' ? icon_grid_active : icon_grid} alt='grid' />
          </button>
          <button className={styleViewList} type='button' onClick={onClickView} data-test-id='button-menu-view-list'>
            <img src={viewCards === 'LIST' ? icon_list_active : icon_list} alt='table' />
          </button>
        </div>
      </div>
      <div className={`${s.main__content} ${contentView}`}>
        {cards.map((card) => (
          <BookCard
            key={card.id}
            id={card.id}
            view={viewCards}
            description={card.description}
            title={card.title}
            booking={card.booking}
            image={card.image}
            rating={card.rating}
          />
        ))}
      </div>
    </section>
  );
};
