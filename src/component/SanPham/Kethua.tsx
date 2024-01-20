
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

type sanpham ={
    httpsp: string;
    TenSp: string;
    httpsp1:string;
    giasp:string;
    giasp1:string;
    giamgia:string;
    dungluong:string;
    dungluong1:string;
    dungluong2:string;
}   
const Kethua = ({httpsp,httpsp1,TenSp,
    giasp,giasp1,giamgia,dungluong,dungluong1,dungluong2
}: sanpham) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
        <div className='flex'>
            <div className='w-[50%]'>
                <Slider {...settings}>
                    <div>
                        <img src={httpsp} alt="" />
                    </div>
                    <div>
                        <img src={httpsp1} alt="" />
                    </div> 
                </Slider>
            </div>
            <div>
                <h1>{TenSp}</h1>
                <h4>{giasp} * {giasp1} {giamgia}</h4>
                <p>Dung lượng</p>
                <div className="flex">
                    <input type="button" className="p-3" name={dungluong}/>
                    <input type="button" className="p-3" name={dungluong1}/>
                    <input type="button" className="p-3" name={dungluong2}/>
                </div>
                <div className="h-[300px] w-[250px] bg-slate-500">
                    <h5>KHUYẾN MÃI</h5>
                    <p>Giá khuyến mãi dự kiến áp dụng đến 23:00 | 31/1/2024</p>
                    <hr />
                    <ul>
                        <li>Thu cũ đổi mới: Giảm đến 2 triệu (tùy moden máy cũ, không kèm thanh toán qua cổng online ,mua kèm)</li>
                        <li>Hoàn tiền nếu ở đâu rẻ hơn </li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Kethua