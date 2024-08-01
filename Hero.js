import React from 'react'
import Navbar from './Navbar'
import Heading1 from './Heading1'


const Hero = () => {
  return (
      <div className='w-[1440px] h-[1024px] flex flex-col  relative z-10 overflow-hidden bg-[url("/public/assets/Hero.png")] bg-cover bg-no-repeat'>
        <div className='w-full h-[96px] px-[98px] py-[32px]'>
          <Navbar />
        </div>
        
        <Heading1/>
        <img className='absolute top-[98px]  left-[-99.55px] ' width="294.55px" height="247.22px" src='/assets/Group 2.png'/>
        <img className='absolute top-[466.96px] left-[263.28px]' width="62.67px" height="62.69px" src='/assets/Layer 2 (5).png'/>
        <img className='absolute top-[134px] left-[733px] ' width="130.68px" height="144.85px" src='/assets/Layer 2 (2).png'/>
        <img className='absolute top-[881px] -left-[22px]' width="166px" height="169.93px" src='/assets/Layer 2 (6).png'/>
        <img className='absolute top-[349px] left-[-350.51px] ' width="675.51px" height="547.06px" src='/assets/layer 2.png'/>
        <img className='absolute top-[111px] left-[1170.85px]' width="485.85px" height="435.74px" src='/assets/Layer 2 (3).png '/>
        <img className='absolute top-[681px] left-[1049px]' width="499.88px" height="517.01px" src='/assets/Layer 2 (4).png'/>
        <img className='absolute top-[873px] left-[584px]' width="226px" height="221.49px" src='/assets/Layer 2 (1).png'/>
      </div>

  )
}

export default Hero
