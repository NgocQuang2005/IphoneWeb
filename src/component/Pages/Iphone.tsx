import SlideChungSp from "../Inherit/SlideChungSp"
import Footer from "../layouts/Footer"
import Header from "../layouts/Header"
import anh1 from "./../img/Slide8.webp"
import anh2 from "./../img/Slide7.webp"
import SingleProduct from "../Inherit/Sanpham"
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
const Iphone = () => {
  return (
    <>
    <Header/>
    <div className="bg-[#575759] w-full">
      <div className="container mx-auto w-full max-w-[1200px] min-w-[1024px] ">
        <SlideChungSp TenSp="iPhone" httpsp={anh1} httpsp1={anh2}/>
        <div className="grid-container">
          <div className="backgr-ip">
            <SingleProduct thumb={Iphone1} name='Iphone 11 Black 64Gb' price={13000000} />
          </div>
          
          <div className="backgr-ip">
            <SingleProduct thumb={Iphone2} name='Iphone 12 Red 128Gb' price={13000000} promoPrice={12500000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={Iphone3} name='Iphone 13 pink 256Gb' price={25000000 } promoPrice={23500000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={Iphone4} name='Iphone 14 Blue 64Gb' price={21000000} promoPrice={20400000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={Iphone5} name='Iphone 14 Plus Gold 128Gb' price={24000000} promoPrice={20400000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={Iphone6} name='Iphone 14 Pro Max 512Gb' price={30000000} promoPrice={28500000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={Iphone7} name='Iphone 14 Pro purple 128Gb' price={25000000} />
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={Iphone8} name='Iphone 14 purple 64Gb' price={23000000} />
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={Iphone9} name='Iphone 15 Black 256Gb' price={31000000} promoPrice={29300000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={Iphone10} name='Iphone 15 Plus blue 512Gb' price={38000000} promoPrice={35900000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={Iphone11} name='Iphone 15 Pro blue 256Gb' price={41000000} promoPrice={39299000}/>
          </div>
          
          <div className="backgr-ip">
            <SingleProduct thumb={Iphone12} name='Iphone 15 Pro Max blue 1T Gb' price={55000000} promoPrice={50000000}/>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Iphone