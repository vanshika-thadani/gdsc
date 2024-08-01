import React from 'react'

const Neptune = () => {
  return (
    <div id='neptune' className='w-[1440px] h-[1024px] relative bg-[url("/public/assets/Earth.png")] bg-cover bg-no-repeat'>
        <div className='w-[744px] h-[176px]  flex flex-row absolute top-[312px] left-[348px] gap-x-[40px]'>
            <div className='w-[352px] h-[176px] rounded-[16px] gap-x-[24px] animate-pulse px-[40px] py-[24px] flex bg-gradient-to-br from-[#170B36] from-0% via-[#370D44] via-46% to-[#430E49] to-89% '>
                <img className='absolute top-[48px] left-[24px]' width="80px" height="80px" src='/assets/donut_large.png'/>
                <div className='w-[200px] h-[128px] absolute top-[24px] left-[128px] gap-y-[8px] flex flex-col'>
                    <p className='w-[81px] h-[24px] font-Orbitron text-[16px] leading-[24px] text-white text-left'>Diameter</p>
                    <p className='w-[200px] h-[96px] absolute top-[32px] font-Orbitron text-[38px] leading-[48px]  text-white text-left  tracking-[-2%]'>30,775 Miles</p>
                </div>
            </div>

            <div className='w-[352px] h-[176px] rounded-[16px] absolute left-[392px] gap-x-[24px] animate-pulse px-[40px] py-[24px] flex bg-gradient-to-br from-[#170B36] from-0% via-[#370D44] via-46% to-[#430E49] to-89%'>
                <img className='absolute left-[42.04px] top-[48px]' width="32.92px" height="80px" src='/assets/Group 3 (1).png'/>
                <div className='w-[200px] h-[128px] absolute top-[24px] left-[104.46px] flex flex-col gap-y-[8px]'>
                    <p className='w-[211px] h-[24px] font-Orbitron text-[16px] leading-[24px] text-white  text-left'> Temperature</p>
                    <p className='w-[200px] h-[96px] absolute top-[32px] font-Orbitron text-[38px] text-white leading-[48px] text-left tracking-[-2%]'>-218° Celsius</p>
                </div>
            </div>
        </div>

        <div className='absolute top-[80px] left-[183px] w-[1075px] h-[152px] flex flex-col gap-y-[24px]'>
            <p className=' w-[385px] h-[80px]  font-Orbitron text-[67px] text-white  leading-=[80px] tracking-[-2%] mx-auto'>8.Neptune</p>
            <p className='absolute top-[104px] w-[1075px] h-[48px] font-Inter font-medium text-[16px] text-white leading-[24px] text-center '>Neptune, often called the "Blue Giant," is the eighth and farthest planet from the Sun in our solar system. It is a gas giant known for its <br/> striking blue color and turbulent atmosphere.</p>
        </div>

        <div>
            <img   src="/assets/Group 12 (1).png" className='absolute top-[253.83px] left-[-396.65px] z-0' />
        </div>
    </div>
  )
}

export default Neptune
