import React from 'react'

const Mercury = () => {
  return (
    <div id='mercury' className='w-full h-[766px] relative bg-[url("/public/assets/Mercury.png")] '>
      <img src='/assets/Group 4 (1).png' width="44.57%" height="92.16%" className='absolute  top-[1.89%] left-[-7%] md:-left-[185px] ' />

      <div className='w-[46.71%] h-[79.37%] absolute  md:top-[10.44%] left-[44%] md:left-[38%] flex flex-col gap-y-[40px]'>
            <div className='w-[100%] h-[28.94%] flex flex-col gap-y-[24px] relative'>
                <p className='  text-white font-Orbitron sm:text-[52px] md:text-[58px] lg:text-[67px] leading-[80px] tracking-[-2%]'>Mercury</p>
                <p className=' font-Inter font-medium sm:text-[12px] md:text-[14px] lg:text-[16px] leading-[24px] text-left text-white'>Mercury is the closest planet to the Sun and is known for its extreme temperatures and barren, rocky surface. It is one of the four terrestrial planets in our solar system, characterized by their solid, rocky composition.</p>
            </div>

            <div className=' w-full  h-[64.47%] flex flex-col md:flex-row left-[-60%] md:left-[0] absolute top-[50%] md:top-[35.52%] gap-y-[40px] gap-x-4'>
                <div className=' w-full md:w-[47.56%] h-[44.89%]  rounded-[16px] gap-x-[24px] px-[40px] py-[24px] flex  bg-gradient-to-br from-[#170B36] from-0% via-[#370D44] via-46% to-[#430E49] to-89% animate-pulse '>
                    <img className='absolute top-[13.63%] left-[3.40%]' width="12%" height="12%" src='/assets/donut_large.png'/>
                    <div className='w-[56.81%] h-[72.72%] absolute top-[6.81%] left-[18.18%] gap-y-[8px] flex flex-col'>
                        <p className=' font-Orbitron sm:text-[12px] md:text-[14px] lg:text-[16px] leading-[24px] text-white text-left'>Diameter</p>
                        <p className=' font-Orbitron sm:text-[28px] md:text-[32px] lg:text-[38px] leading-[48px]  text-white text-left  tracking-[-2%]'>3,032<br/> Miles</p>
                    </div>
                </div>

                <div className=' w-full md:w-[47.56%] h-[44.89%]  rounded-[16px] absolute left-[52.43%] top-[30%] md:top-[0] gap-x-[24px] px-[40px] py-[24px] flex animate-pulse bg-gradient-to-br from-[#170B36] from-0% via-[#370D44] via-46% to-[#430E49] to-89%'>
                    <img className=' absolute left-[8.40%] top-[25.63%]' width="9.35%" height="45.45%" src='/assets/Group 3.png'/>
                    <div className='w-[56.81%] h-[72.72%] absolute top-[7.81%] left-[28.18%] flex flex-col gap-y-[8px]'>
                        <p className=' font-Orbitron  sm:text-[12px] md:text-[14px]  lg:text-[16px] leading-[24px] text-white  text-left'>Day time Temperature</p>
                        <p className=' font-Orbitron sm:text-[28px] md:text-[32px] lg:text-[38px] text-white leading-[48px] text-left tracking-[-2%]'>±430° Celsius</p>

                    </div>
                </div>

                <div className=' w-full md:w-[47.56%] h-[44.89%]  rounded-[16px] absolute top-[70%] md:top-[55.10%] gap-x-[24px] px-[40px] py-[24px] animate-pulse flex bg-gradient-to-br from-[#170B36] from-0% via-[#370D44] via-46% to-[#430E49] to-89%'>
                    <img className='absolute left-[8.40%] top-[25.63%]' width="9.35%" height="45.45%" src='/assets/Group 3 (1).png'/>
                    <div className='w-[56.81%] h-[72.72%] absolute top-[7.81%] left-[28.18%] flex flex-col gap-y-[8px]'>
                        <p className=' font-Orbitron sm:text-[12px] md:text-[14px]  lg:text-[16px] leading-[24px] text-white  text-left'>Night time Temperature</p>
                        <p className=' font-Orbitron sm:text-[28px] md:text-[32px] lg:text-[38px] text-white leading-[48px] text-left tracking-[-2%]'>-180° Celsius</p>

                    </div>
                </div>

                
            </div>

        </div>
    </div>
  )
}

export default Mercury