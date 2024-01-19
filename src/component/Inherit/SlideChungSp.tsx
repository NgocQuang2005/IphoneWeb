import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import logo from "./../img/logo1.png"
type anhh ={
    httpsp: string;
    TenSp: string;
    httpsp1:string;
}

const SlideChungSp= ({httpsp , TenSp,httpsp1} : anhh)=>{
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
    return(
        <div className="mb-[20px]">
          <div className='flex items-center justify-center py-4'>
              <img src={logo} className='h-[34px] w-[50px]' alt="" />
              <h2 className='text-center text-2xl text-white'>{TenSp}</h2>
          </div>
          <div >
              <Slider {...settings}>
                  <div>
                    <img src={httpsp} alt="" />
                  </div>
                  <div>
                    <img src={httpsp1} alt="" />
                  </div>
              </Slider>
          </div>
        </div>
    )

}
export default SlideChungSp