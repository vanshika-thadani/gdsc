import React from 'react'

const Mars = () => {
  return (
    <div id='mars' className='w-full h-[761px] relative bg-[url("/public/assets/Earth.png")] bg-cover bg-no-repeat'>
        <div className='w-[22.22%] h-[9.09%] absolute top-[65%] md:top-[28%] md:left-[40%] lg:top-[53.38%] lg:left-[37.62%] flex flex-col z-[20]'>
            <p className=' font-Orbitron text-[11px] md:text-[26px] lg:text-[38px] leading-[48px] tracking-[-2%] text-left text-white'>Martial Moons</p>
            <p className=' font-Inter text-[10px] md:text-[14px] lg:text-[16px] leading-[24px] text-left text-white'>Mars has two small moons, Phobos and Deimos, which are irregularly shaped and thought to be captured asteroids.</p>
        </div>

        <div>
            <img src="/assets/Vector (1).png"   className=' absolute top-[50%] left-[30%] md:top-[50%] lg:top-[351px] lg:left-[539.08px] w-[10%] md:w-auto' />
        </div>

        <div>
            <img src="assets/Group 9 (1).png"   className='absolute top-[45%] md:top-[295.44px]  left-[2%] md:left-[-399px] w-[50%] h-[30%] md:h-[862.84px] md:w-[953px] z-[10]'/>
        </div>

        <div className='absolute top-[5.05%] left-[6.18%] w-[41.47%] h-[11.11%] flex flex-col gap-y-[24px]'>
            <p className=' font-Orbitron text-[42px] md:text-[58px] lg:text-[67px] text-white  leading-[80px] tracking-[-2%] text-left'>4.Mars</p>
            <p className=' font-Inter font-medium text-[10px] md:text-[14px] lg:text-[16px] text-white leading-[24px] text-left  '>Mars, often referred to as the "Red Planet," is the fourth planet from the Sun and has captivated human imagination for centuries with its reddish appearance and potential for hosting life..</p>
        </div>


        <div className=' w-[30%] md:w-[22.22%] h-[23.12%] absolute top-[5.05%] left-[62.5%] animate-pulse rounded-[16px] gap-x-[24px] px-[40px] py-[24px] flex bg-gradient-to-br from-[#170B36] from-0% via-[#370D44] via-46% to-[#430E49] to-89% '>
            <img className='absolute top-[30%] lg:top-[27.09%] left-[5.33%] w-[30%] lg:w-[80px] md:h-[80px]' src='/assets/donut_large.png'/>
            <div className='w-[56.81%] h-[450.56%] absolute top-[6.81%] left-[36.36%] gap-y-[8px] flex flex-col'>
                <p className=' font-Orbitron text-[12px] lg:text-[16px] leading-[24px] text-white text-left'>Diameter</p>
                <p className=' font-Orbitron text-[28px] lg:text-[38px] leading-[48px]  text-white text-left  tracking-[-2%]'>4,212<br/> Miles</p>
            </div>
        </div>

        <div className=' w-[30%] md:w-[22.22%] h-[23.12%] rounded-[16px] absolute top-[35.68%] left-[62.5%] animate-pulse gap-x-[24px] px-[40px] py-[24px] flex bg-gradient-to-br from-[#170B36] from-0% via-[#370D44] via-46% to-[#430E49] to-89%'>
            <img className='absolute left-[5.33%] top-[27.09%] lg:w-[32.92px] lg:h-[80px] 'src='/assets/Group 3.png'/>
            <div className='w-[56.81%] h-[450.56%] absolute top-[6.81%] left-[36.36%] flex flex-col gap-y-[8px]'>
                <p className=' font-Orbitron text-[10px] md:text-[14px] lg:text-[16px] leading-[24px] text-white  text-left'>Day time Temperature</p>
                <p className='  font-Orbitron sm:text-[22px] md:text-[26px] lg:text-[38px] text-white leading-[48px] text-left tracking-[-2%]'>±20° Celsius</p>
            </div>
        </div>

        <div className=' w-[30%] md:w-[22.22%] h-[23.12%] rounded-[16px] absolute top-[67.27%] animate-pulse left-[62.5%] gap-x-[24px] px-[40px] py-[24px] flex bg-gradient-to-br from-[#170B36] from-0% via-[#370D44] via-46% to-[#430E49] to-89%'>
            <img className='absolute left-[5.33%] top-[27.09%]' width="32.92px" height="80px" src='/assets/Group 3 (1).png'/>
            <div className='w-[59.94%] h-[72.72%] absolute top-[6.81%] left-[36.36%] flex flex-col gap-y-[8px]'>
                <p className=' font-Orbitron text-[10px] md:text-[14px] lg:text-[16px] leading-[24px] text-white  text-left'>Night time Temperature</p>
                <p className='font-Orbitron text-[20px] md:text-[26px] lg:text-[38px] text-white leading-[48px] text-left tracking-[-2%]'>-73° Celsius</p>
            </div>
        </div>

    </div>
  )
}

export default Mars
