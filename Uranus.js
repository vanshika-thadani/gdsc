import React from 'react'

const Uranus = () => {
  return (
    <div id='uranus' className='w-full h-[819px] relative bg-[url("/public/assets/Earth.png")] overflow-hidden bg-cover bg-no-repeat'>
        <div className='w-[45.45%] h-[21.48%]  flex flex-col md:flex-row  absolute top-[9.76%] left-[50%] lg:left-[39.26%] gap-x-[4.54%]'>
            <div className=' w-full lg:w-[48.88%] h-[50%] lg:h-[176px]  rounded-[16px] gap-x-[24px] px-[40px] py-[24px] flex animate-pulse bg-gradient-to-br from-[#170B36] from-0% via-[#370D44] via-46% to-[#430E49] to-89% '>
                <img className='absolute top-[18%] left-[9%] lg:top-[30.27%] lg:left-[3.81%] w-[6.72%] h-[24.72%]' src='/assets/donut_large.png'/>
                <div className='w-[56.81%] lg:h-[72.72%] absolute left-[40%] lg:top-[12.63%] lg:left-[23.36%]  flex flex-col '>
                    <p className=' font-Orbitron text-[10px] md:text-[12px] lg:text-[18px] leading-[24px] text-white text-left'>Diameter</p>
                    <p className='absolute top-[2%] lg:top-[0] font-Orbitron text-[10px] md:text-[20px] lg:text-[38px] leading-[48px] mt-1 lg:mt-5 lg:-ml-3 text-white text-left  tracking-[-2%]'>31,518<br/> Miles</p>
                </div>
            </div>

            <div className=' w-full h-[50%] lg:w-[45.88%] lg:h-[176px] rounded-[16px] absolute top-[60%]  lg:top-[0] lg:left-[51.11%] animate-pulse gap-x-[24px] px-[40px] py-[24px] flex bg-gradient-to-br from-[#170B36] from-0% via-[#370D44] via-46% to-[#430E49] to-89%'>
                <img className='absolute left-[6.81%] top-[27.27%] w-[9.35%] h-[45.45%]' src='/assets/Group 3 (1).png'/>
                <div className='w-[56.81%] h-[72.72%] absolute top-[13.63%] left-[29.67%] flex flex-col gap-y-[8px]'>
                    <p className=' font-Orbitron sm:text-[12px] md:text-[14px] lg:text-[16px] leading-[24px] text-white  text-left'> Temperature</p>
                    <p className=' font-Orbitron text-[12px] md:text-[20px] lg:text-[38px] text-white leading-[48px] text-left tracking-[-2%]'>-224° Celsius</p>
                </div>
            </div>
        </div>

        <div className='absolute top-[9.76%] left-[6.18%] w-[31.81%] h-[21.48%] flex flex-col gap-y-[24px]'>
            <p className=' font-Orbitron sm:text-[55px] md:text-[58px] lg:text-[67px] text-white  leading-=[80px] tracking-[-2%] text-left'>7.Uranus</p>
            <p className=' font-Inter font-medium sm:text-[12px] md:text-[14px] lg:text-[16px] text-white leading-[24px] text-left '>Uranus, often referred to as the "Ice Giant," is a unique and mysterious planet in our solar system. It stands out due to its distinct blue-green color and its unusual rotation axis.</p>
        </div>

        <div>
            <img src="/assets/Group 11 (1).png " className=' w-[80%] h-[50%] lg:w-[90.53%] lg:h-[179.24%] absolute top-[45%] lg:top-[40.04%]  left-[10%] lg:left-[5.05%]'/>
        </div>
      
    </div>
  )
}

export default Uranus
