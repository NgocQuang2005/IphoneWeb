import { Navigation,Pagination , Scrollbar, A11y} from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Iphone1 from './../img/iphone-11-black-thumbtz-650x650.webp'
import Iphone2 from './../img/iphone-12-red-thumbtz-650x650.webp'
import Iphone3 from './../img/iphone-13-pink-thumbtz-650x650.webp'
import Iphone4 from './../img/iphone-14-blue-thumbtz-650x650.webp'
import Iphone5 from './../img/iphone-14-plus-gold-thumbtz-650x650.webp'
import Iphone6 from './../img/iphone-14-pro-max-purple-thumbtz-650x650.webp'
import Iphone7 from './../img/iphone-14-pro-purple-thumbtz-650x650.webp'
import Iphone8 from './../img/iphone-14-purple-thumbtz-650x650.webp'
import Iphone9 from './../img/iphone-15-black-thumbtz_0-650x650.webp'
import Iphone10 from './../img/iphone-15-plus-blue-thumbtz-1-650x650.webp'
import Iphone11 from './../img/iphone-15-pro-blue-thumbtz-650x650.webp'
import Iphone12 from './../img/iphone-15-pro-max-blue-thumbtz-650x650.webp'
import SingleProduct from '../Inherit/Sanpham';
const SlideIp= ()=>{
    return(
        <Swiper
            modules={[Navigation,Pagination, Scrollbar, A11y]}
            spaceBetween={50}// khoảng cách giữa các slider
            slidesPerView={5}// số lượng slider hiện trên 1 màn hình
            navigation
            
            onSlideChange={() => console.log('slide change')}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide>
                <SingleProduct thumb={Iphone1} name='Iphone 11 Black 64Gb' price={13000000} />
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct thumb={Iphone2} name='Iphone 12 Red 128Gb' price={130000000} promoPrice={125000000}/>
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct thumb={Iphone3} name='Iphone 13 pink 256Gb' price={25000000 } promoPrice={23500000}/>
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct thumb={Iphone4} name='Iphone 14 Blue 64Gb' price={21000000} promoPrice={20400000}/>
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct thumb={Iphone5} name='Iphone 14 Plus Gold 128Gb' price={24000000} promoPrice={20400000}/>
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct thumb={Iphone6} name='Iphone 14 Pro Max 512Gb' price={30000000} promoPrice={28500000}/>
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct thumb={Iphone7} name='Iphone 14 Pro purple 128Gb' price={25000000} />
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct thumb={Iphone8} name='Iphone 14 purple 64Gb' price={23000000} />
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct thumb={Iphone9} name='Iphone 15 Black 256Gb' price={31000000} promoPrice={29300000}/>
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct thumb={Iphone10} name='Iphone 15 Plus blue 512Gb' price={38000000} promoPrice={35900000}/>
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct thumb={Iphone11} name='Iphone 15 Pro blue 256Gb' price={41000000} promoPrice={39299000}/>
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct thumb={Iphone12} name='Iphone 15 Pro Max blue 1T Gb' price={55000000} promoPrice={50000000}/>
            </SwiperSlide>
        </Swiper>
    )

}
export default SlideIp