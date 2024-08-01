import React from 'react'

const Earth = () => {
  return (
    <div id='earth' className='w-full h-[893px] relative bg-[url("/public/assets/Earth.png")] bg-cover bg-no-repeat'>
        <div className='absolute top-[33.14%] left-[18.68%] max-w-[42.73%] h-[13.43%] flex flex-col md:gap-y-[24px] z-[1]'>
            <p className=' font-Orbitron sm:text-[18px] md:text-[26px] lg:text-[38px] text-white  leading-=[48px] tracking-[-2%] text-right '>Moon Planet</p>
            <p className=' font-Inter font-medium text-[10px] md:text-[14px] lg:text-[16px] text-white leading-[24px] text-right '>Earth has one natural satellite, the Moon, which plays a role in stabilizing the planet's rotation and tides. The Moon's gravitational pull causes ocean tides to rise and fall.</p>
        </div>

        <div className='absolute top-[7.16%] left-[6.18%] w-[42.73%] h-[19.70%] flex flex-col  md:gap-y-[24px]'>
            <p className='font-Orbitron md:text-[50px] lg:text-[67px] text-white  leading-[80px] tracking-[-2%] text-left'>3.Earth</p>
            <p className='  font-Inter font-medium  text-[11px]  md:text-[14px] lg:text-[16px] text-white leading-[24px] text-left  '>Earth is the third planet from the Sun and the only known planet to support life. Earth is the only planet known to harbor life. It's a diverse and dynamic world with a wide range of ecosystems, climates, and geological features.</p>
        </div>

        <div className=' w-[30%] md:w-[22.22%] h-[19.70%] rounded-[16px] absolute top-[7.16%]  animate-pulse left-[62.5%] gap-x-[24px] px-[40px] py-[24px] flex bg-gradient-to-br from-[#170B36] from-0% via-[#370D44] via-46% to-[#430E49] to-89% '>
            <img className='absolute top-[20%] left-[3%] w-[30%] h-[30%] md:w-[80px] md:h-[80px]' src='/assets/donut_large.png'/>
            <div className=' absolute top-[6.81%] left-[44%] md:left-[46.36%] gap-y-[8px] flex flex-col'>
                <p className=' font-Orbitron sm:text-[12px] md:text-[14px] lg:text-[16px] leading-[24px] text-white text-left'>Diameter</p>
                <p className=' font-Orbitron sm:text-[18px]  md:text-[25px] lg:text-[38px] leading-[48px]  text-white text-left  tracking-[-2%]'>7,918 <br/> Miles</p>
            </div>
        </div>

        <div>
            <img src="/assets/Group (1).png" className='absolute md:top-[266px] md:left-[62%] lg:left-[950.17px] left-[62%] top-[32%] w-[20%] md:w-auto'/>
        </div>

        <div>
            <img src='/assets/Group (2).png' className='absolute top-[425px] -left-[12px] w-[20%] h-[10%]  md:w-auto md:h-auto'/>
        </div>

        <div>
            <img src="/assets/Layer 2 (8).png" height="1399.88px" width="1263px"  className='absolute top-[50%] md:top-[355px] left-[20%] md:left-[29px] z-[0] w-[60%] md:w-auto'/>
        </div>
    </div>
  )
}

export default Earth