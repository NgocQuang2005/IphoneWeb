import SlideChungSp from "../Inherit/SlideChungSp"
import Footer from "../layouts/Footer"
import Header from "../layouts/Header"
import SingleProduct from "../Inherit/Sanpham"
import anh1 from "./../img/slide-ipad.webp"
import anh2 from "./../img/slide-ipad1.webp"
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
const Mac = () => {
  return (
    <>
    <Header/>
    <div className="bg-[#575759] w-full">
      <div className="container mx-auto w-full max-w-[1200px] min-w-[1024px] ">
        <SlideChungSp TenSp="Mac" httpsp={anh1} httpsp1={anh2}/>
        <div className="grid-container">
          <div className="backgr-ip">
            <SingleProduct thumb={mac1} name='mac-air-13-m1-vang' price={40000000} promoPrice={39000000}/>
          </div>
          
          <div className="backgr-ip">
            <SingleProduct thumb={mac2} name='mac-air-13-m2-bac' price={42000000}  promoPrice={41500000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={mac3} name='mac-air-13-m2-vang' price={50000000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={mac4} name='mac-air-15-m2-xam' price={53500000} promoPrice={51700000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={mac5} name='mac-pro-13-m2-bac' price={29000000} promoPrice={27500000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={mac6} name='mac-pro-13-m2-xam' price={25000000} promoPrice={24500000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={mac7} name='mac-pro-16-m2-bac' price={70000000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={mac8} name='mac-topzone-promax-black' price={65000000} promoPrice={63500000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={mac9} name='mac-topzone-promax-black' price={39000000} promoPrice={37500000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={mac10} name='mac-topzone-promax-black' price={33000000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={mac11} name='mac-topzone-spacegray' price={55000000} promoPrice={52500000}/>
          </div>

          <div className="backgr-ip">
            <SingleProduct thumb={mac12} name='mac16-topzone' price={82500000} promoPrice={80500000}/>
          </div>

        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Mac