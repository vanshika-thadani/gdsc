import React, { useState } from 'react'
import Navbar from './Navbar'

const Footer = () => {

  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    setIsClicked(true);
    const section = document.getElementById('sun'); 
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className='w-full h-[583px] relative bg-[url("/public/assets/Earth.png")] bg-cover bg-no-repeat overflow-hidden z-[10]'>
      <div >
        {/* <img src="/assets/Group 16.png"/> */}
      </div>

      <footer className=' w-[1336px] h-[448px] absolute top-[68px] left-[52px] flex flex-col gap-y-[80px] px-[8px] py-[40px] bg-[#1E1E1E] rounded-[40px]'>
        <div className='w-[797px] h-[256px] absolute top-[40px] left-[269.5px] flex flex-col gap-y-[56px]'>
            <div className='w-[797px] h-[128px] flex flex-col gap-y-[24px] items-center relative'>
                <p className='w-[797px] h-[56px] font-Orbitron text-[50px] leading-[56px] tracking-[-2%] text-center text-[#FFFFFF]'>Join The Education Comunity</p>
                <p className='absolute top-[120px] w-[797px] h-[48px] font-Inter font-medium text-[16px] leading-[24px] text-center text-[#FFFFFF]'>Join the Education Community today and be part of a movement that's transforming minds and shaping tomorrows.</p>
            </div>

            <button className='w-[530px] h-[72px] absolute top-[184px] left-[133.5px] rounded-[40px] flex flex-row gap-x-[8px] px-[15px] py-[8px] bg-[#FFFFFF] '>
                <p className='w-[337px] h-[24px] absolute top-[24px] left-[15px] text-[#000000] text-left font-Inter font-medium text-[16px] leading-[24px]'>Enter your email</p>
                <button onClick={clickHandler} className=' w-[155px] h-[56px] absolute top-[8px] left-[360px] rounded-[40px] flex gap-x-[8px] px-[8px] py-[8px] bg-gradient-to-tl from-[#CD1013] from-0% via-[#FF0004] via-1% to-[#2500FF] to-94% '>
                    <p className='w-[91px] h-[24px] absolute top-[16px] left-[8px] text-[#FFFFFF] text-center text-Orbitron  text-[16px] leading-[24px] '>Subscribe</p>
                    <button className=' w-[40px] h-[40px] absolute top-[8px] left-[107px] bg-[#FFFFFF] rounded-[40px]'>
                      <img src="/assets/east.png" className='absolute left-[8px] top-[8px]'/>
                    </button>
                </button>
            </button>
        </div>
        <div className='absolute top-[376px] left-[59.19px]'>
          <Navbar/>
        </div>
      </footer>
    </div>
  )
}

export default Footer
