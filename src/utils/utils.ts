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
