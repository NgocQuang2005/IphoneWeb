

import SlideChungSp from "../Inherit/SlideChungSp"
import Footer from "../layouts/Footer"
import Header from "../layouts/Header"
import anh1 from "./../img/slide_pk1.webp"
import anh2 from "./../img/slide_pk2.webp"
import SingleProduct from "../Inherit/Sanpham"
import { Conternns } from "../data/Conternn"
const Suachua = () => {
  return (
    <>
    <Header/>
    <div className="bg-[#575759] w-full">
      <div className="container mx-auto w-full max-w-[1200px] min-w-[1024px] ">
        <SlideChungSp TenSp="Sửa Chữa" httpsp={anh1} httpsp1={anh2}/>
        <div className="grid-container">
          {
           Conternns.map ((Conternn) =>{
            return <div className="backgr-ip">
                      <SingleProduct thumb={Conternn.thumb} name={Conternn.name} price={Conternn.price} promoPrice={Conternn.promoPrice}/>
                    </div>
           })
          };
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Suachua