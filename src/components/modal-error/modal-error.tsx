import { useEffect, useState } from 'react';
import classNames from 'classnames';

import icon_close from '../../assets/icon/icon_close.svg';
import error_icon from '../../assets/icon/icon_error.svg';
import { ErrorMessage } from '../../enum/error';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { ErrorResponseI } from '../../interface/utils-i/utils-i';
import { setAppError } from '../../store/app-reducer';

import s from './modal-error.module.scss';

export const ModalError = () => {
  const dispatch = useAppDispatch();

  const [showModal, setShowModal] = useState<boolean>(false);

  const error = useAppSelector<ErrorResponseI | null>((state) => state.app.error);

  const onClickCloseModal = () => {
    dispatch(setAppError(null));
  };

  useEffect(() => {
    if (error) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [error]);

  return (
    <div className={s.modal}>
      <div className={s.container}>
        <div data-test-id='error' className={classNames(s.modal__box, { [`${s.modal__box_show}`]: showModal })}>
          <div className={s.modal__wrap}>
            <img className={s.modal__image} src={error_icon} alt='error' />
            <div className={s.modal__message}>{ErrorMessage.MESSAGE}</div>
          </div>
          <button className={s.modal__button} onClick={onClickCloseModal} type='button'>
            <img src={icon_close} alt='close' />
          </button>
        </div>
      </div>
    </div>
  );
};
