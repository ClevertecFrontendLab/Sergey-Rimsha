import facebook from '../../assets/icon/icon_facebook.svg';
import linkedin from '../../assets/icon/icon_in.svg';
import instagram from '../../assets/icon/icon_instagram.svg';
import vk from '../../assets/icon/icon_vk.svg';

import s from './footer.module.scss';

export const FooterPage = () => (
  <footer className={s.footer}>
    <div className={s.container}>
      <div className={s.footer__wrap}>
        <div className={s.footer__title}>© 2020-2023 Cleverland. Все права защищены.</div>
        <div className={s.footer__social}>
          <img className={s.footer__facebook} src={facebook} alt='facebook' />
          <img className={s.footer__instagram} src={instagram} alt='instagram' />
          <img className={s.footer__vk} src={vk} alt='vk' />
          <img className={s.footer__linkedin} src={linkedin} alt='linkedin' />
        </div>
      </div>
    </div>
  </footer>
);
