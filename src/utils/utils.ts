import star from '../assets/icon/icon_star.svg';
import star_active from '../assets/icon/icon_star_active.svg';

export const getStars = (ratingValue: number) => {
  const stars = [];

  const showStar = (idStar: number) => {
    if (idStar <= ratingValue) {
      return star_active;
    }

    return star;
  };

  for (let i = 1; i <= 5; i++) {
    stars.push(showStar(i));
  }

  return stars;
};

export const getDateTransformCard = (data: string) => {
  const mount = new Date(data).getMonth() + 1;
  const day = new Date(data).getDate();

  const reformat = (value: number) => (value > 10 ? value : `0${value}`);

  return `занято до ${reformat(day)}.${reformat(mount)}`;
};

export const getBookUrl = (img: { url: string } | null) => {
  const BaseUrl = 'https://strapi.cleverland.by';

  if (img) {
    return `${BaseUrl}${img.url}`;
  }

  return '';
};
