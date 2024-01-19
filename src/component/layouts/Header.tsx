import './../../App.css'
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import logo1 from './../img/logo1.png'
import logo from './../img/logo.png'
import { Link } from 'react-router-dom';
import { navigations } from './../data/navigation';
import  { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const showHide = () => {
    setIsSearchVisible((prev) => !prev);
  };
  return (
    <header className="w-full h-[60px] bg-black">
      <div className="flex justify-between items-center max-w-[1200px] min-w-[1024px] container mx-auto w-full h-[60px] relative">
        <div className="float-left flex ">
          <a href="/Home" className="pr-2  mr-[10px]"><img src={logo} className='bg-auto	bg-center	 h-[43px] w-[150px]' alt="" /></a>
          <a href="/Home"><img src={logo1} alt="" className='bg-auto	bg-center	 h-[43px] w-[65px]'/></a>
        </div>
        <ul className='menu'>
        {
           navigations.map((item)=>{
            return <li className=' relative  ' key={item.id} >
              <Link className='no-underline text-[White] text-lg hover:text-black' to={item.url}>
                  {item.name}
              </Link>
            </li>
           }) 
        }
        </ul>
        <div className='float-right position-relative'>
          <div className='search-sp' onClick={showHide}>
            <i className='mx-auto my-[2px]'><IoSearch /></i>
          </div>
          <a href="" className='cart'>
            <i className='mx-auto my-[2px]' ><IoCartOutline /></i>
          </a>
        </div>
      </div>
      <div id="Search" style={{
                          display: isSearchVisible ? 'block' : 'none',
                          width: '100%',
                          height: '100%',
                          border: '1px solid #ccc',
                          position: 'fixed',
                          bottom: '0px',
                          zIndex: '1999',
                          background: '#0b0b0b',
                          opacity: '.8',
      }}
    >
      <input
        type="button"
        value="X"
        onClick={showHide}
        style={{
          fontSize: '30px',
          background: 'none',
          border: 'none',
          color: '#fff',
          float: 'right',
          paddingRight: '28px',
        }}
      />
      <div
        className="container"
        style={{
          width: '100%',
          height: '100%',
          textAlign: 'center',
          paddingTop: '276px',
        }}
      >
        <div className="row">
          <input type="search" className="onhap pl-[7px]" placeholder="Tìm kiếm..." />
          <button type='submit' className='pt-[5px] pb-[4px] pr-[4px] pl-[7px] mt-2 text-white ml-1 bg-red-400 w-10 h-[38px] text-center' >
           <IoSearchOutline />
          </button>
        </div>
      </div>
    </div>
    </header>
  )
}

export default Header