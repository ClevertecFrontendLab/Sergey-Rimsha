import React, { useEffect, useState } from 'react';

import eye from '../../assets/icon/icon_eye.svg';
import eye_sleep from '../../assets/icon/icon_eye_sleap.svg';
import validate_pass from '../../assets/icon/icon_validate_ok.svg';

import s from './input-form.module.scss';

interface InputFormPropsI {
  label: string;
  type: 'text' | 'password';
  validate: boolean;
}

export const InputForm = React.memo(({ label, type, validate }: InputFormPropsI) => {
  // const propsTypeInput = 'password';
  // const propsValidate = true;

  const [showPass, setShowPass] = useState(validate);
  const [inputType, setInputType] = useState<'password' | 'text'>('text');

  const onClickHandlerShowPass = () => {
    setShowPass((prevState) => !prevState);
    setInputType((prevState) => (prevState === 'password' ? 'text' : 'password'));
  };

  useEffect(() => {
    if (type === 'password') {
      setInputType(type);
    }
  }, [type]);

  return (
    <div className={s.group}>
      <div className={s.group__box}>
        <label>
          <input className={s.group__input} type={inputType} required={true} />
          <span className={s.group__title}>{label}</span>
          {type === 'password' ? (
            <React.Fragment>
              {validate && <img className={s.group__validate} src={validate_pass} alt='ok' />}
              <button className={s.group__eye} onClick={onClickHandlerShowPass} type='button'>
                <img src={showPass ? eye : eye_sleep} alt='eye' />
              </button>
            </React.Fragment>
          ) : (
            ''
          )}
        </label>
      </div>
      <div className={s.group__message}>Используйте для логина латинский алфавит и цифры</div>
    </div>
  );
});
