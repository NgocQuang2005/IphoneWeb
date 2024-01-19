import SlideAirPods from './../Content/SlideAirPods'
import SlideIp from './../Content/SlideIp'
import SlideIpad from './../Content/SlideIpad'
import SlideMac from './../Content/SlideMac'
import SlidePhukien from './../Content/SlidePhukien'
import SlideWacth from './../Content/SlideWacth'
import SlideA from './../Content/slide'
import ToanboSp from './../Inherit/ToanboSp'
import Footer from './../layouts/Footer'
import Header from './../layouts/Header'
import './../../App.css'
const Home = () => {
  return (
    <>
    <Header/>
    <div className='pb-[20px] bg-[#575759] '> 
      <SlideA/>
      <div className=' Quang11 pt-16'>
        <ToanboSp name='Iphone' link=''/>
        <div className='container mx-auto w-full max-w-[1200px] min-w-[1024px] '>
          <SlideIp/>
        </div>
      </div>
      <div className=' Quang11 pt-16 '>
        <ToanboSp name='Ipad' link=''/>
        <div className='container mx-auto w-full max-w-[1200px] min-w-[1024px] '>
          <SlideIpad/>
        </div>
      </div>
      <div className=' Quang11 pt-16'>
        <ToanboSp name='Air Pods' link=''/>
        <div className='container mx-auto w-full max-w-[1200px] min-w-[1024px] '>
          <SlideAirPods/>
        </div>
      </div>
      <div className=' Quang11 pt-16'>
        <ToanboSp name='MacBook' link=''/>
        <div className='container mx-auto w-full max-w-[1200px] min-w-[1024px] '>
          <SlideMac/>
        </div>
      </div>
      <div className=' Quang11 pt-16'>
        <ToanboSp name='Phụ Kiện' link=''/>
        <div className='container mx-auto w-full max-w-[1200px] min-w-[1024px] '>
          <SlidePhukien/>
        </div>
      </div>
      <div className=' Quang11 pt-16'>
        <ToanboSp name='Wacth' link=''/>
        <div className='container mx-auto w-full max-w-[1200px] min-w-[1024px] '>
          <SlideWacth/>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home