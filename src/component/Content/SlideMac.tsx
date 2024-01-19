import { Navigation,Pagination , Scrollbar, A11y} from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import mac1 from './../img/mac-air-13-m1-vang-650x650.webp'
import mac2 from './../img/mac-air-13-m2-bac-650x650.webp'
import mac3 from './../img/mac-air-13-m2-vang-650x650.webp'
import mac4 from './../img/mac-air-15-m2-xam-650x650.webp'
import mac5 from './../img/mac-pro-13-m2-bac-650x650.webp'
import mac6 from './../img/mac-pro-13-m2-xam-650x650.webp'
import mac7 from './../img/mac-pro-16-m2-bac-650x650.webp'
import mac8 from './../img/mac-topzone-promax-black-650x650 (1).webp'
import mac9 from './../img/mac-topzone-promax-black-650x650 (2).webp'
import mac10 from './../img/mac-topzone-promax-black-650x650.webp'
import mac11 from './../img/mac-topzone-spacegray-650x650.webp'
import mac12 from './../img/mac16-topzone-silver-650x650.webp'
import SingleProduct from '../Inherit/Sanpham';
const SlideMac= ()=>{
    return(
        <Swiper
            modules={[Navigation,Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={5}
            navigation
            
            onSlideChange={() => console.log('slide change')}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide>
                <SingleProduct thumb={mac1} name='mac-air-13-m1-vang' price={40000000} promoPrice={39000000}/>
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct thumb={mac2} name='mac-air-13-m2-bac' price={42000000}  promoPrice={41500000}/>
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct thumb={mac3} name='mac-air-13-m2-vang' price={50000000}/>
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct thumb={mac4} name='mac-air-15-m2-xam' price={53500000} promoPrice={51700000}/>
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct thumb={mac5} name='mac-pro-13-m2-bac' price={29000000} promoPrice={27500000}/>
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct thumb={mac6} name='mac-pro-13-m2-xam' price={25000000} promoPrice={24500000}/>
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct thumb={mac7} name='mac-pro-16-m2-bac' price={70000000}/>
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct thumb={mac8} name='mac-topzone-promax-black' price={65000000} promoPrice={63500000}/>
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct thumb={mac9} name='mac-topzone-promax-black' price={39000000} promoPrice={37500000}/>
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct thumb={mac10} name='mac-topzone-promax-black' price={33000000}/>
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct thumb={mac11} name='mac-topzone-spacegray' price={55000000} promoPrice={52500000}/>
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct thumb={mac12} name='mac16-topzone' price={82500000} promoPrice={80500000}/>
            </SwiperSlide>
        </Swiper>
    )
}
export default SlideMac