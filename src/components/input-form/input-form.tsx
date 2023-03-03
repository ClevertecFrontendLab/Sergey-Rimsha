import React, { useEffect, useState } from 'react';

import eye from '../../assets/icon/icon_eye.svg';
import eye_sleep from '../../assets/icon/icon_eye_sleap.svg';
import validate_pass from '../../assets/icon/icon_validate_ok.svg';

import s from './input-form.module.scss';

export const InputForm = () => {
  const propsTypeInput = 'password';
  const propsValidate = true;

  const [showPass, setShowPass] = useState(false);
  const [inputType, setInputType] = useState<'password' | 'text'>('password');

  const onClickHandlerShowPass = () => {
    setShowPass((prevState) => !prevState);
  };

  useEffect(() => {
    if (showPass) {
      setInputType('text');
    } else {
      setInputType('password');
    }
  }, [showPass]);

  return (
    <div className={s.group}>
      <div className={s.group__box}>
        <label>
          <input className={s.group__input} type={inputType} required={true} />
          <span className={s.group__title}>name</span>
          {propsTypeInput === 'password' ? (
            <React.Fragment>
              {propsValidate && <img className={s.group__validate} src={validate_pass} alt='ok' />}
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
};
