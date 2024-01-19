import SlideChungSp from "../Inherit/SlideChungSp"
import Footer from "../layouts/Footer"
import Header from "../layouts/Header"
import SingleProduct from "../Inherit/Sanpham"
import anh1 from "./../img/slide-ipad3.webp"
import anh2 from "./../img/slide-ipad4.webp"
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
const Ipad = () => {
  return (
    <>
    <Header/>
    <div className="bg-[#575759] w-full">
      <div className="container mx-auto w-full max-w-[1200px] min-w-[1024px] ">
        <SlideChungSp TenSp="iPad" httpsp={anh1} httpsp1={anh2}/>
        <div className="grid-container">
          <div className="backgr-ip">
            <SingleProduct thumb={ipad1} name='ipad-9-wifi-cellular-grey' price={13000000} />
          </div>
          
          <div className="backgr-ip">
            <SingleProduct thumb={ipad2} name='ipad-air-5-wifi-startlight' price={130000000} promoPrice={125000000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={ipad3} name='ipad-gen-9-silver' price={25000000 } promoPrice={23500000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={ipad4} name='ipad-gen-9-silver 2' price={24000000} promoPrice={20400000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={ipad5} name='ipad-mini-6-startlight' price={30000000} promoPrice={28500000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={ipad6} name='iPad-Pro-M2-11-grey' price={25000000} />
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={ipad7} name='iPad-Pro-M2-11-sliver' price={23000000} />
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={ipad8} name='iPad-gen-10-pink' price={31000000} promoPrice={29300000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={ipad9} name='iPad-gen-10' price={38000000} promoPrice={35900000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={ipad10} name='iPad-Pro-M2-129' price={41000000} promoPrice={39299000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={ipad11} name='air-5-m1-wifi-cellular' price={55000000} promoPrice={50000000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={ipad12} name='air-5-m1-wifi-cellular-xanh' price={55000000} promoPrice={50000000}/>
          </div>

        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Ipad