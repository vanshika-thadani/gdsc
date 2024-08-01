import React from 'react'

const Saturn = () => {
  return (
    <div id='saturn' className='w-full h-[808px] relative bg-[url("/public/assets/Earth.png")] bg-cover bg-no-repeat'>
        <div>
            <img src="/assets/Layer 2.png" width="62.48%"  height="122.17%" className='rotate-[-22deg] absolute left-[-12.31%] '/>
        </div>

        <div className=' w-full h-[20%] lg:w-[22.22%] left-[1%] top-[46%] lg:h-[21.78%] absolute lg:top-[41.58%] lg:left-[62.5%] rounded-[16px] animate-pulse gap-x-[24px] px-[40px] py-[24px] flex bg-gradient-to-br from-[#170B36] from-0% via-[#370D44] via-46% to-[#430E49] to-89% '>
            <img className='absolute top-[27.27%] left-[6.81%] w-[6.72%] h-[52.72%] lg:w-[22.42%]' src='/assets/donut_large.png'/>
            <div className='w-[56.81%] h-[72.72%] absolute top-[13.63%] left-[36.36%] gap-y-[8px] flex flex-col'>
                <p className=' font-Orbitron text-[12px] md:text-[14px] lg:text-[16px] leading-[24px] text-white text-left'>Diameter</p>
                <p className=' font-Orbitron text-[20px] md:text-[22px] lg:text-[36px] leading-[48px]  text-white text-left  tracking-[-2%]'>74.898 Miles</p>
            </div>
        </div>

        <div className=' w-full  h-[20%] left-[1%] lg:w-[22.22%] lg:h-[21.78%] rounded-[16px] absolute top-[68.31%] lg:left-[62.5%] animate-pulse gap-x-[24px] px-[40px] py-[24px] flex bg-gradient-to-br from-[#170B36] from-0% via-[#370D44] via-46% to-[#430E49] to-89%'>
            <img className='absolute left-[6.81%] top-[27.27%] w-[6.72%] h-[52.72%]' src='/assets/Group 3 (1).png'/>
            <div className='w-[56.81%] h-[72.72%] absolute top-[13.63%] left-[36.36%] flex flex-col gap-y-[8px]'>
                <p className=' font-Orbitron  text-[12px] md:text-[14px] lg:text-[16px] leading-[24px] text-white  text-left'> Temperature</p>
                <p className=' font-Orbitron text-[20px] md:text-[22px] lg:text-[36px] text-white leading-[48px] text-left tracking-[-2%]'>-139° Celsius</p>
            </div>
        </div>

        <div className='absolute top-[10%] lg:top-[9.90%] left-[50%] lg:left-[40.02%] w-[44.69%] h-[21.78%] flex flex-col gap-y-[24px]'>
            <p className='  font-Orbitron sm:text-[52px] md:text-[58px] lg:text-[67px] text-white  leading-=[80px] tracking-[-2%] text-right'>6.Saturn</p>
            <p className=' font-Inter font-medium sm:text-[12px] md:text-[14px] lg:text-[16px] text-white leading-[24px] text-right '> Saturn, often referred to as the "Ringed Planet," is known for its stunning system of rings that encircle the planet's equator. It's the sixth planet from the Sun and is one of the most visually distinctive objects in our solar system, with more than 80 known satellites.</p>
        </div>
    </div>
  )
}

export default Saturn
