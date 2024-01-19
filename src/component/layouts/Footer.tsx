import './../../App.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import logo1 from './../img/logo1.png'
import logo from './../img/logo.png'
const Footer = () => {
  return (
    <footer className="w-full  bg-black">
        <div className='foot'>
            <div className='logo-foot'>
                <a href="" className="pr-2  mr-[10px]"><img src={logo} className='bg-auto	bg-center	 h-[35px] w-[120px]' alt="" /></a>
                <a href=""><img src={logo1} alt="" className='bg-auto	bg-center	 h-[32px] w-[50px]'/></a>
            </div>
            <ul className='list-foot'>
                <li>
                    <span>Tổng Đài</span>
                    <a href="">
                        <span>Mua hàng</span>
                        <b className='text-blue-600 font-normal'> 035730855</b>
                        "7:30am - 22:30pm "
                    </a>
                    <a href="">
                        <span>Khiếu nại</span>
                        <b className='text-blue-600 font-normal'> 035730855</b>
                        "8:30am - 21:30pm "
                    </a>
                    <div className='footer-social'>
                        <p className='text-[#888] mb-[10px] text-xs'>Liên hệ với chúng tôi:</p>
                        <a href="https://www.facebook.com/?locale=vi_VN" className='link-social'><FaFacebookF /></a>
                        <a href=" https://www.tiktok.com/@quang111420" className='link-social'><FaTiktok /></a>
                        <a href="https://www.instagram.com/ngocquang05_/" className='link-social'> <FaInstagram /></a>
                    </div>
                </li>
                <li>
                    <span>Hệ thống cửa hàng</span>
                    <a href="">Xem 98 cửa hàng</a>
                    <a href="">Nội quy cửa hàng</a>
                    <a href="">Chất lượng phục vụ</a>
                    <a href="">Chính sách bảo hành đổi trả</a>
                </li>
                <li>
                    <span>Hỗ trợ khách hàng</span>
                    <a href="">Điều kiện giao dịch chung </a>
                    <a href="">Hướng dẫn mua hàng online</a>
                    <a href="">Chính sách giao hàng</a>
                    <a href="">Hướng dẫn thanh toán</a>
                </li>
                <li>
                    <span>Về thương hiệu Leonn</span>
                    <a href="">Tích điểm quà vip</a>
                    <a href="">Giới thiệu Leonn</a>
                    <a href="">Bán hàng doanh nghiệp</a>
                    <a href="">Chính sách sử lý dữ liệu cá nhân</a>
                    <a href="">Xem bản mobile</a>
                </li>
                <li>
                    <span>Trung tâm bảo hành Leonn</span>
                    <a href="">Giới Thiệu về leonCart</a>
                </li>
            </ul>
            <div className='text-cpr'>
                <p>
                    " © 2018. Công ty cổ phần Thế Giới Di Động. " <br />
                    " Địa chỉ: Cẩm Sơn - Anh Sơn - Nghệ An. Điện thoại: 035730855. Địa chỉ liên hệ và gửi chứng từ:  Cẩm Sơn - Anh Sơn - Nghệ An.
                       Chịu trách nhiệm nội dung: Nguyễn Ngọc Quang. Email: Quang111420@gmail.com."
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer