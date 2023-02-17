import { useState } from 'react';
import { FreeMode, Navigation, Pagination, Scrollbar, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import book_default_lg from '../../../../assets/jpg/book_default_lg.jpg';
import { getBookUrl } from '../../../../utils/utils';

import './swiper-custom.scss';

import 'swiper/scss';
import 'swiper/scss/free-mode';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/thumbs';
import 'swiper/scss/effect-coverflow';
import 'swiper/scss/scrollbar';

interface SwiperCustomI {
  images: Array<{ url: string }> | null;
}

export const SwiperCustom = ({ images }: SwiperCustomI) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  let showPagination = false;

  if (images) {
    if (images.length > 1) {
      showPagination = true;
    }
  }

  return (
    <div className='swiperCustom'>
      <Swiper
        data-test-id='slide-big'
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        pagination={true}
        modules={[FreeMode, Navigation, Pagination, Thumbs]}
        className='swiperCustom__swiperMain'>
        {images?.map((img, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide key={index}>
            <img className='swiperCustom__imgLg' src={getBookUrl(img) || book_default_lg} alt='img_book' />
          </SwiperSlide>
        ))}
      </Swiper>
      {showPagination && (
        <div className='swiperCustom__pagination'>
          <Swiper
            data-test-id='slide-mini'
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={5}
            freeMode={true}
            scrollbar={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Scrollbar, Thumbs]}
            className='swiperCustom__mySwiper'>
            {images?.map((img, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <SwiperSlide key={index}>
                <img className='swiperCustom__img' src={getBookUrl(img) || book_default_lg} alt='img_book' />
              </SwiperSlide>
            ))}
          </Swiper>
          <span className='swiperCustom__pagination_blur'>{}</span>
          <span className='swiperCustom__pagination_blur'>{}</span>
        </div>
      )}
    </div>
  );
};
