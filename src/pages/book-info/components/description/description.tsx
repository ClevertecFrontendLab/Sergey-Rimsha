import s from './description.module.scss';

interface DescriptionI {
  showOnly: 'lg' | 'md';
}

export const Description = ({ showOnly }: DescriptionI) => {
  let showStyle = `${s.showOnly__lg}`;

  if (showOnly === 'md') {
    showStyle = `${s.showOnly__md}`;
  }

  return (
    <div className={`${s.description} ${showStyle}`}>
      <div className={s.description__subTitle}>О книге</div>
      <div className={s.description__text}>
        <p>
          Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то
          решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить
          многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?
        </p>

        <p>
          Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать
          алгоритмы — это веселое и увлекательное занятие.
        </p>
      </div>
    </div>
  );
};
