import {Pagination } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../img/slide1.webp'
import slide2 from '../img/slide2.webp'
import slide3 from '../img/slide3.webp'
import slide4 from '../img/slide4.webp'
import slide5 from '../img/slide5.webp'
import slide6 from '../img/slide6.webp'
import 'swiper/css/navigation';
const SlideA= ()=>{
    return(
        <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slide6} alt="" /></SwiperSlide>
        </Swiper>
    )

}
export default SlideA