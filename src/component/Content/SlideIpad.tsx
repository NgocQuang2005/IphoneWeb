import { Navigation,Pagination , Scrollbar, A11y} from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import ipad1 from './../img/ipad-9-wifi-cellular-grey-label-650x650.webp'
import ipad2 from './../img/ipad-air-5-wifi-startlight-label-650x650.webp'
import ipad3 from './../img/ipad-gen-9-silver-label-650x650 (1).webp'
import ipad4 from './../img/ipad-gen-9-silver-label-650x650.webp'
import ipad5 from './../img/ipad-mini-6-startlight-thumbtz-650x650.webp'
import ipad6 from './../img/iPad-Pro-M2-11-grey-thumb-label-650x650.webp'
import ipad7 from './../img/iPad-Pro-M2-11-sliver-thumb-label-650x650.webp'
import ipad8 from './../img/iPad-gen-10-pink-thumbtz-650x650.webp'
import ipad9 from './../img/iPad-gen-10-sliver-thumbtz-650x650.webp'
import ipad10 from './../img/iPad-Pro-M2-129-sliver-thumb-label-650x650.webp'
import ipad11 from './../img/air-5-m1-wifi-cellular-trang-thumb-label-650x650.webp'
import ipad12 from './../img/air-5-m1-wifi-cellular-xanh-thumb-label-650x650.webp'
import SingleProduct from '../Inherit/Sanpham';
const SlideIpad= ()=>{
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
                <SingleProduct thumb={ipad1} name='ipad-9-wifi-cellular-grey' price={13000000} />
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct thumb={ipad2} name='ipad-air-5-wifi-startlight' price={130000000} promoPrice={125000000}/>
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct thumb={ipad3} name='ipad-gen-9-silver' price={25000000 } promoPrice={23500000}/>
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct thumb={ipad4} name='ipad-gen-9-silver 2' price={24000000} promoPrice={20400000}/>
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct thumb={ipad5} name='ipad-mini-6-startlight' price={30000000} promoPrice={28500000}/>
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct thumb={ipad6} name='iPad-Pro-M2-11-grey' price={25000000} />
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct thumb={ipad7} name='iPad-Pro-M2-11-sliver' price={23000000} />
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct thumb={ipad8} name='iPad-gen-10-pink' price={31000000} promoPrice={29300000}/>
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct thumb={ipad9} name='iPad-gen-10' price={38000000} promoPrice={35900000}/>
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct thumb={ipad10} name='iPad-Pro-M2-129' price={41000000} promoPrice={39299000}/>
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct thumb={ipad11} name='air-5-m1-wifi-cellular' price={55000000} promoPrice={50000000}/>
            </SwiperSlide>
            <SwiperSlide>
                <SingleProduct thumb={ipad12} name='air-5-m1-wifi-cellular-xanh' price={55000000} promoPrice={50000000}/>
            </SwiperSlide>
        </Swiper>
    )

}
export default SlideIpad