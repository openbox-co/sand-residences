import 'swiper/css';
import { FreeMode, Keyboard, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide, } from 'swiper/react';
import SliderItem from "./SliderItem";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

export default function Slider() {
  const data = [
    {
      id: 1,
      image: '../assets/images/FormImg1.svg',
      description: 'Day 1: Arrival in Kathmandu',
    },
    {
      id: 2,
      image: '../assets/images/FormImg1.svg',
      description: 'Day 2: Kathmandu to Lukla and Phakding',
    },
    {
      id: 3,
      image: '../assets/images/FormImg1.svg',
      description: 'Day 3: Phakding to Namche Bazaar',
    },
    {
      id: 4,
      image: '../assets/images/FormImg1.svg',
      description: 'Day 4: Acclimatization day in Namche Bazaar',
    },
    {
      id: 5,
      image: '../assets/images/FormImg1.svg',
      description: 'Day 5: Namche Bazaar to Tengboche',
    },
    {
      id: 6,
      image: '../assets/images/FormImg1.svg',
      description: 'Day 6: Tengboche to Dingboche',
    },
    {
      id: 7,
      image: '../assets/images/FormImg1.svg',
      description: 'Day 7: Acclimatization day in Dingboche',
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
                description={item.description}
                sx="mr-2"
              />
            </SwiperSlide>
          </>
        ))
        }
      </Swiper>
      <section className="flex justify-between arrows-container">
        <div className="swiper-button-prev border rounded-full p-2 border-blueBroker flex justify-center items-center cursor-pointer">
          <ChevronLeftIcon className="h-5 w-5 text-blueBroker" />
        </div>
        <div className="swiper-button-next border rounded-full p-2 border-blueBroker flex justify-center items-center cursor-pointer">
          <ChevronRightIcon className="h-5 w-5 text-blueBroker" />
        </div>
      </section>
    </div>
  );
}
