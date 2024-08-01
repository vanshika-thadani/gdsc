import React from 'react'

const Jupiter = () => {
  return (
    <div id='jupiter' className='w-full h-[769px] relative bg-[url("/public/assets/Earth.png")] overflow-hidden bg-cover bg-no-repeat z-[20]'>
        <div className=' w-full lg:w-[22.22%] h-[22.88%] rounded-[16px] absolute top-[66.71%] left-[6.18%] animate-pulse gap-x-[24px] px-[40px] py-[24px] flex bg-gradient-to-br from-[#170B36] from-0% via-[#370D44] via-46% to-[#430E49] to-89%'>
            <img className='absolute left-[5.33%] top-[30.98%]' src='/assets/Group 3 (1).png'/>
            <div className='w-[56.81%] h-[72.72%] absolute top-[13.63%] left-[29.67%] flex flex-col gap-y-[8px]'>
                <p className=' font-Orbitron sm:text-[12px] md:text-[14px] lg:text-[16px] leading-[24px] text-white  text-left'> Temperature</p>
                <p className='  font-Orbitron sm:text-[22px] md:text-[26px] lg:text-[38px] text-white leading-[48px] text-left tracking-[-2%]'>-108° Celsius</p>
            </div>
        </div>

        <div>
            <img src="/assets/Layer 2 (4).png" height="111.44%" width="51.45%" className='absolute left-[50%] md:left-[55.46%] md:top-[-23.91%] rotate-[70deg] '/>
        </div>

        <div className=' w-full lg:w-[22.22%] h-[22.88%] absolute top-[40.57%] left-[6.18%] rounded-[16px] animate-pulse gap-x-[24px] px-[40px] py-[24px] flex bg-gradient-to-br from-[#170B36] from-0% via-[#370D44] via-46% to-[#430E49] to-89% '>
            <img className='absolute top-[30.98%] left-[5.33%] w-[10.77%] h-[40.30%]' src='/assets/donut_large.png'/>
            <div className='w-[56.81%] h-[72.72%] absolute top-[13.63%] left-[29.67%] gap-y-[8px] flex flex-col'>
                <p className=' font-Orbitron sm:text-[12px] md:text-[14px] lg:text-[16px] leading-[24px] text-white text-left'>Diameter</p>
                <p className=' font-Orbitron sm:text-[22px] md:text-[26px] lg:text-[38px] leading-[48px]  text-white text-left  tracking-[-2%]'>86.881 Miles</p>
            </div>
        </div>

        <div className='absolute top-[10.40%] left-[6.18%] w-[38.51%] h-[19.76%] flex flex-col gap-y-[24px]'>
            <p className=' font-Orbitron sm:text-[52px] md:text-[56px] lg:text-[67px] text-white  leading-=[80px] tracking-[-2%] text-left'>5.Jupiter</p>
            <p className=' font-Inter font-medium  sm:text-[12px] md:text-[14px] lg:text-[16px] text-white leading-[24px] text-left  '>Jupiter, the largest planet in our solar system, is a gas giant known for its <br/> immense size, powerful storms, and numerous moons.</p>
        </div>
      
    </div>
  )
}

export default Jupiter
