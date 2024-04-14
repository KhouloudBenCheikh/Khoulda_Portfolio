export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import'swiper/css/pagination';
import 'swiper/css/free-mode';
import {Pagination} from 'swiper';
import {BsArrowRight} from 'react-icons/bs';
import { RxArrowTopRight } from "react-icons/rx";
import Image from 'next/image';

const WorkSlider = () => {
  return ( 
    <Swiper 
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={{Pagination}}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlider.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
            {slide.images.map((image, index) => (
              <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={index}>
                <div className='flex items-center justify-center relative overflow-hidden'>
                  {/* image */}
                  <Image src={image.path} width={500} height={300} alt='' />
                  {/* overlay gradient*/}
                  <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd 
                    opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                  {/* title */}
                  <div>
                    <div>
                      {/* title part1*/}
                      <div>Title part1</div>
                        
                      {/* title part2*/}
                    <div>Title part2</div>
                    </div>
                    </div>
                  </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;



