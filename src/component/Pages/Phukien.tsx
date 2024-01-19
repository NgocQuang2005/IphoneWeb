
import SlideChungSp from "../Inherit/SlideChungSp"
import Footer from "../layouts/Footer"
import Header from "../layouts/Header"
import anh1 from "./../img/slide_pk1.webp"
import anh2 from "./../img/slide_pk2.webp"
import SingleProduct from "../Inherit/Sanpham"
import pk1 from './../img/259283.webp'
import pk2 from './../img/adapter-sac-type-c-20w-cho-iphone-ipad-apple-mhje3-(6).webp'
import pk3 from './../img/apple-tv-4k-64gb-mxh02-(1).webp'
import pk4 from './../img/op-lung-magsafe-iphone-14-pro-da-apple-mppk3-thumb-650x650.webp'
import pk5 from './../img/op-lung-magsafe-iphone-15-pro-max-vai-apple-mt4w3-thumb-650x650.webp'
import pk6 from './../img/pin-apple-magsafe-battery-pack.webp'
import pk7 from './../img/thiet-bi-dinh-vi-thong-minh-airtag-1-pack-mx532-(1).webp'
import pk8 from './../img/true-wireless-beats-fit-pro-earbuds-den-tn-650x650.webp'
import pk9 from './../img/magic-keyboard-(1).webp'
import pk10 from './../img/beats-studio-buds-trang-tn-650x650.webp'
import pk11 from './../img/imac-24-xanh-fix-650x650.webp'
import pk12 from './../img/bluetooth-high-performance-beats-mwnv2-mwnw2-mwnx2-trang-tn-650x650.webp'
const Phukien = () => {
  return (
    <>
    <Header/>
    <div className="bg-[#575759] w-full">
      <div className="container mx-auto w-full max-w-[1200px] min-w-[1024px] ">
        <SlideChungSp TenSp="Phụ Kiện" httpsp={anh1} httpsp1={anh2}/>
        <div className="grid-container">
          <div className="backgr-ip">
            <SingleProduct thumb={pk1} name='Dây sạc Iphone' price={1200000} promoPrice={1000000}/>
          </div>
          
          <div className="backgr-ip">
            <SingleProduct thumb={pk2} name='Củ sạc nhanh 20w' price={800000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={pk3} name='Apple tv' price={15000000} promoPrice={14500000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={pk4} name='Ốp lưng iphone 14 pro' price={800000} promoPrice={699000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={pk5} name='Ốp lưng iphone 15 pro max' price={700000} promoPrice={650000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={pk6} name='pin-apple-magsafe-battery' price={1200000} />
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={pk7} name='thiet-bi-dinh-vi-thong-minh' price={25000000} promoPrice={24500000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={pk8} name='true-wireless-beats-fit-pro-earbuds-den' price={900000} promoPrice={870000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={pk9} name='Bàn phím cơ' price={3000000} />
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={pk10} name='beats-studio-buds' price={25000000} promoPrice={24500000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={pk11} name='mac để bàn' price={21000000} promoPrice={20000000}/>
          </div>
          
          <div className="backgr-ip">
            <SingleProduct thumb={pk12} name='tai nghe Bluetooth' price={600000} promoPrice={590000}/>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Phukien