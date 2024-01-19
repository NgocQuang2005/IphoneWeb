
import SlideChungSp from "../Inherit/SlideChungSp"
import Footer from "../layouts/Footer"
import Header from "../layouts/Header"
import anh1 from "./../img/Slide8.webp"
import anh2 from "./../img/Slide7.webp"
import SingleProduct from "../Inherit/Sanpham"
import airP1 from './../img/airpods-3-hop-sac-khong-day-thumb-650x650.webp'
import airP2 from './../img/airpods-pro-2-thumb-650x650.webp'
import airP3 from './../img/beats-studio-buds-trang-tn-650x650.webp'
import airP4 from './../img/bluetooth-airpods-max-apple-xam-tn-650x650.webp'
import airP5 from './../img/bluetooth-high-performance-beats-mwnv2-mwnw2-mwnx2-trang-tn-650x650.webp'
import airP6 from './../img/khong-day-powerbeats-pro-do-tn-650x650.webp'
import airP7 from './../img/tai-nghe-bluetooth-airpods-2-apple-tn-650x650.webp'
import airP8 from './../img/tai-nghe-chup-tai-beats-solo3-mx432-mv8t2-mx472-den-tn-1-650x650.webp'
import airP9 from './../img/tai-nghe-chup-tai-beats-studio3-mx422-mx432-den-do-tn-650x650.webp'
import airP10 from './../img/tai-nghe-earpods-apple-mnhf2-tn-1-650x650.webp'
import airP11 from './../img/tai-nghe-sony-mdr-zx110ap-den-tn-650x650.webp'
import airP12 from './../img/true-wireless-beats-fit-pro-earbuds-den-tn-650x650.webp'
const AirPods = () => {
  return (
    <>
    <Header/>
    <div className="bg-[#575759] w-full">
      <div className="container mx-auto w-full max-w-[1200px] min-w-[1024px] ">
        <SlideChungSp TenSp="AirPods" httpsp={anh1} httpsp1={anh2}/>
        <div className="grid-container">
          <div className="backgr-ip">
            <SingleProduct  thumb={airP1} name='Air Pods 3 ' price={3000000} promoPrice={2700000} />
          </div>
          
          <div className="backgr-ip">
            <SingleProduct thumb={airP2} name='Air Pods pro 2' price={4500000} promoPrice={4300000} />
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={airP3} name='Air Pods' price={3700000} promoPrice={3650000} />
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={airP4} name='Air Pods max Bluetooth' price={1200000}  />
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={airP5} name='bluetooth-high-performance' price={500000}  />
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={airP6} name='khong-day-powerbeats-pro' price={1000000} promoPrice={900000} />
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={airP7} name='Air Pods 2' price={3000000} promoPrice={2800000} />
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={airP8} name='Tai nghe Beats solo3' price={3450000} promoPrice={3200000} />
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={airP9} name='Tai nghe Beats Studio3' price={3000000} promoPrice={2500000} />
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={airP10} name='tai-nghe-earpods-apple' price={3000000}  />
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={airP11} name='tai-nghe-sony' price={300000}  />
          </div>
          
          <div className="backgr-ip">
            <SingleProduct thumb={airP12} name='Tai nghe xịn' price={2000000} />
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default AirPods