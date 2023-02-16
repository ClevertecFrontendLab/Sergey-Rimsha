import s from './description.module.scss';

interface DescriptionI {
  showOnly: 'lg' | 'md';
  description: string;
}

export const Description = ({ showOnly, description }: DescriptionI) => {
  let showStyle = `${s.showOnly__lg}`;

  if (showOnly === 'md') {
    showStyle = `${s.showOnly__md}`;
  }

  console.log(description);

  return (
    <div className={`${s.description} ${showStyle}`}>
      <div className={s.description__subTitle}>О книге</div>
      <div className={s.description__text}>
        <p>{description}</p>
      </div>
    </div>
  );
};
