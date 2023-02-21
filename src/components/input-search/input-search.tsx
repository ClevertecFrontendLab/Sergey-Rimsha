import React, { ChangeEvent, useCallback, useState } from 'react';
import classNames from 'classnames';

import icon_search from '../../assets/icon/icon_search.svg';

import s from './input-search.module.scss';

interface InputSearchPropsI {
  search: string;
  onChangeSearchInput: (text: string) => void;
}

export const InputSearch = React.memo(({ search, onChangeSearchInput }: InputSearchPropsI) => {
  const [focusInput, setFocusInput] = useState<boolean>(false);

  const onHandlerClickInput = () => {
    setFocusInput((prevState) => !prevState);
  };

  const onChangeSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChangeSearchInput(e.currentTarget.value);
    },
    [onChangeSearchInput]
  );

  const onFocusInput = () => {
    setFocusInput(true);
  };

  const onHandlerClearInput = useCallback(() => {
    onChangeSearchInput('');
    setFocusInput(false);
  }, [onChangeSearchInput]);

  return (
    <div className={s.input}>
      <button
        data-test-id='button-search-open'
        className={classNames(s.input__img, { [`${s.input__img_show}`]: focusInput })}
        onClick={onHandlerClickInput}
        type='button'>
        <img src={icon_search} alt='search' />
      </button>
      <div className={classNames(s.input__box, { [`${s.input__box_show}`]: focusInput })}>
        <input
          data-test-id='input-search'
          className={classNames(s.input__item, { [`${s.input__item_change}`]: focusInput })}
          onFocus={onFocusInput}
          onChange={onChangeSearch}
          value={search}
          type='text'
          placeholder='Поиск книги или автора…'
        />
        <button
          data-test-id='button-search-close'
          className={classNames(s.input__close, { [`${s.input__close_show}`]: focusInput })}
          onClick={onHandlerClearInput}
          type='button'>
          <span>{}</span>
          <span>{}</span>
        </button>
      </div>
    </div>
  );
});
