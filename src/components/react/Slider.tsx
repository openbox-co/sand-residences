import 'swiper/css';
import { FreeMode, Keyboard, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide, } from 'swiper/react';
import SliderItem from "./SliderItem";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { getLangFromUrl, useTranslations } from "@/utils/i18n";

interface SliderProps {
  url: URL
}

export default function Slider({ url }: SliderProps) {
  const lang = getLangFromUrl(url);
  const t = useTranslations(lang);
  const data = [
    {
      id: 1,
      image: '../assets/images/Slider1.webp',
      title: t('slider1Title'),
      description: t('slider1'),
    },
    {
      id: 2,
      image: '../assets/images/Slider2.webp',
      title: t('slider2Title'),
      description: t('slider2'),
    },
    {
      id: 3,
      image: '../assets/images/Slider3.webp',
      title: t('slider3Title'),
      description: t('slider3'),
    },
    {
      id: 4,
      image: '../assets/images/Slider1.webp',
      title: t('slider4Title'),
      description: t('slider4'),
    },
  ]
  return (
    <div className="mt-10">
      <Swiper
        keyboard={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[FreeMode, Pagination, Keyboard, Navigation]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        freeMode={true}
        breakpoints={{
          360: {
            slidesPerView: 1.2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2.3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 30,
          },
        }}
        scrollbar={{ draggable: true }}
        effect='fade'
        threshold={10}
        fadeEffect={{ crossFade: true }}
      >
        {data?.map((item, index) => (
          <>
            <SwiperSlide className="cursor-grabbing" key={index}>
              <SliderItem
                key={item?.id}
                image={item.image}
                title={item.title}
                description={item.description}
                sx="mr-2"
              />
            </SwiperSlide>
          </>
        ))
        }
      </Swiper>
      <section className="flex justify-between arrows-container">
        <div className="swiper-button-prev border rounded-full p-2 border-blueBroker flex justify-center items-center cursor-pointer mt-5">
          <ChevronLeftIcon className="h-5 w-5 text-blueBroker" />
        </div>
        <div className="swiper-button-next border rounded-full p-2 border-blueBroker flex justify-center items-center cursor-pointer mt-5">
          <ChevronRightIcon className="h-5 w-5 text-blueBroker" />
        </div>
      </section>
    </div>
  );
}
