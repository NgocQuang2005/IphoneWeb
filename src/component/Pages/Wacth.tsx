
import SlideChungSp from "../Inherit/SlideChungSp"
import Footer from "../layouts/Footer"
import Header from "../layouts/Header"
import anh1 from "./../img/watch1slide.webp"
import anh2 from "./../img/watch2slide.webp"
import SingleProduct from "../Inherit/Sanpham"
import DT1 from './../img/apple-watch-s8-41mm-trang-kem-thumb-1-650x650.webp'
import DT2 from './../img/apple-watch-s8-gps-45mm-black-thumbtz-2-650x650.webp'
import DT3 from './../img/apple-watch-s8-ultra-cao-su-vang-thumbtz-1-1-650x650.webp'
import DT4 from './../img/apple-watch-s9-gps-41mm-vien-nhom-day-silicone-hong-tn-650x650.webp'
import DT5 from './../img/apple-watch-s9-lte-41mm-vien-nhom-day-silicone-xanh-nhat-thumb-650x650.webp'
import DT6 from './../img/apple-watch-s9-lte-45mm-vien-nhom-day-silicone-trang-starlight-thumb-650x650.webp'
import DT7 from './../img/apple-watch-se-2022-44mm-vien-nhom-den-xanh-thumbtz-1-650x650.webp'
import DT8 from './../img/apple-watch-se-2022-gps-40mm-thumbtz-2-650x650.webp'
import DT9 from './../img/apple-watch-se-2022-lte-40mm-den-xanh-thumbtz-1-650x650.webp'
import DT10 from './../img/apple-watch-ultra-lte-49mm-vien-titanium-day-alpine-size-m-nau-tb-650x650.webp'
import DT11 from './../img/apple-watch-s9-lte-45mm-vien-thep-khong-gi-day-silicone-vang-tb-650x650.webp'
import DT12 from './../img/apple-watch-s9-lte-41mm-vien-nhom-day-silicone-xanh-nhat-thumb-650x650.webp'
const Wacth = () => {
  return (
    <>
    <Header/>
    <div className="bg-[#575759] w-full">
      <div className="container mx-auto w-full max-w-[1200px] min-w-[1024px] ">
        <SlideChungSp TenSp="Watch" httpsp={anh1} httpsp1={anh2}/>
        <div className="grid-container">
          <div className="backgr-ip">
            <SingleProduct thumb={DT1} name='apple-watch-s8-41mm' price={6000000} promoPrice={5800000}/>
          </div>
          
          <div className="backgr-ip">
            <SingleProduct thumb={DT2} name='apple-watch-s8-gps-45mm-black' price={10800000} promoPrice={10300000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={DT3} name='apple-watch-s8-ultra-cao-su-vang' price={4450000} />
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={DT4} name='apple-watch-s9-gps-41mm-vien-nhom-day-silicone-hong' price={21000000} promoPrice={20000000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={DT5} name='apple-watch-s9-lte-41mm-vien-nhom-day-silicone-xanh-nhat' price={12000000} promoPrice={11300000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={DT6} name='apple-watch-s9-lte-45mm-vien-nhom-day-silicone-trang' price={30200000} promoPrice={29700000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={DT7} name='apple-watch-se-2022-44mm-vien-nhom-den-xanh' price={12300000} promoPrice={11600000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={DT8} name='apple-watch-se-2022-gps-40mm' price={1200000} />
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={DT9} name='apple-watch-se-2022-lte-40mm-den-xanh' price={31000000} promoPrice={27500000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={DT10} name='apple-watch-ultra-lte-49mm-vien-titanium-nau' price={12000000} promoPrice={10000000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={DT11} name='apple-watch-s9-lte-45mm-vien-thep-khong-gi-day-vang' price={26400000} promoPrice={24500000}/>
          </div>
          
          <div className="backgr-ip">
            <SingleProduct thumb={DT12} name='apple-watch-s9-lte-41mm-vien-nhom-day-silicone-xanh-nhat' price={12000000} promoPrice={11300000}/>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Wacth