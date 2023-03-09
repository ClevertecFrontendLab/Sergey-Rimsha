import s from './modal-form.module.scss';

export const ModalForm = () => {
  const title = 'title';

  return (
    <div className={s.modal}>
      <div className={s.modal__title}>Вход не выполнен</div>
      <div className={s.modal__message}>Что-то пошло не так. Попробуйте ещё раз</div>
      <button className={s.modal__button} type='button'>
        повторить
      </button>
    </div>
  );
};
