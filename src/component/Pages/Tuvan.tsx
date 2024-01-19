import Footer from "../layouts/Footer"
import Header from "../layouts/Header"
import logo from "./../img/logo1.png"
import './../../App.css'
import { SlLike } from "react-icons/sl";
import StarRating from "../Inherit/StarRating"
import React from "react";
import { FcLike } from "react-icons/fc";
const Tuvan = () => {
  const [index , setIndex] = React.useState(0);
  const Clickme = () =>{
    setIndex (index + 1);
  };
  const [like , setLike] = React.useState (false);
  const ClickLike = () =>{
    setLike(!like);
  }
  return (
    <>
      <Header/>
      
      <div className="bg-[#575759] w-full">
        <div className="container mx-auto w-full max-w-[1200px] min-w-[1024px] "> 
        <button onClick={Clickme} className="w-5 h-5 bg-red-400">
          <FcLike />
        </button>
        <h3>{index}</h3>
        <button onClick={ClickLike} className="my-2 mx-2" >
          <SlLike />
        </button>
        <button className="bg-red-300 py-2 px-3 rounded-md">{like ? 'Đã like' : 'Like'}</button>
       
          <div className='flex items-center justify-center py-4'>
              <img src={logo} className='h-[34px] w-[50px]' alt="" />
              <h2 className='text-center text-2xl text-white'>TƯ VẪN và ĐÁNH GIÁ</h2>
          </div>
          <div className="flex">
            <div className="mt-5 w-[50%]">
              <div className="mb-3">
                <b className="text-white">1, Bạn hãy nhập nội dung bạn cần hỗ trợ vào ô phía dưới:</b>
              </div>
              <textarea name="" id="" placeholder="Hãy nhập nội dung ..." cols={20} rows={5} className="w-[500px] pl-1 rounded"></textarea>
              <div className="py-2">
                <button type="button" className="border border-solid py-1 px-2 text-white bg-emerald-400	rounded"> Submit</button>
              </div>
              <div className="mb-2">
                <b className="text-white">2, Các vẫn đề thường gặp:</b>
              </div>
              <form className="text-white cla mb-2">
                <input type="checkbox" name=""/>
                <label htmlFor="">Dưới 79% pin đã nên thay pin hay chưa</label><br/>
                <input type="checkbox" name=""/>
                <label htmlFor="">Máy 98% có gặp nhiều vấn đề hơn máy 99% hay không</label><br/>
                <input type="checkbox" name=""/>
                <label htmlFor="">Tại sao các màu lại có các giá tiền khác nhau</label><br/>
                <input type="checkbox" name=""/>
                <label htmlFor="">Shop có bán máy iphone cũ không?</label><br/>
                <input type="checkbox" name=""/>
                <label htmlFor="">Bây giờ nên lựa chọn những dòng máy nào nhất?</label><br/>
              </form>
            </div>
            <div className="mt-5 w-[50%]">
              <div>
                <b className="text-white"> Hãy đánh giá cho chúng tôi:</b>
              </div>
              <div>
                <StarRating/>
              </div>
              <div className="text-white">
                Các bạn đừng vội đánh giá thấp sao , có gì sai xót thì hãy liên hệ với shop để được hỗ trợ <br />
                LH Số HOTLINE : 0356730855.<br />
                CẢM ƠN VỀ ĐÁNH GIÁ CỦA BẠN! 
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Tuvan