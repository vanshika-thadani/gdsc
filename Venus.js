import React from 'react'

const Venus = () => {
  return (
    <div id='venus' className='w-full h-[785px]  relative bg-[url("/public/assets/Mercury.png")] bg-cover bg-no-repeat  overflow-hidden'>
      <div className='w-[37.6%] h-[624px] flex flex-col absolute top-[80px] left-[98px] gap-y-[80px]'>
        <div className='w-full h-[24.35%] flex flex-col gap-y-[24px]'>
            <p className=' font-Orbitron text-[67px] leading-[80px] tracking-[-2%] text-left text-white'>2.Venus</p>
            <p className=' Font-Inter font-medium text-[16px] leading-[24px] text-white text-left'>Venus is often referred to as Earth's "sister planet" due to its similar size and composition, but it stands out with its extremely inhospitable environment</p>
        </div>

        <div className='absolute top-[232px] w-[597px] h-[392px] flex flex-wrap gap-x-40 gap-y-40'>
            <div className='w-[352px] h-[176px] rounded-[16px] gap-x-[24px] px-[40px] py-[24px] flex animate-pulse bg-gradient-to-br from-[#170B36] from-0% via-[#370D44] via-46% to-[#430E49] to-89% '>
                <img className='absolute top-[48px] left-[24px]' width="80px" height="80px" src='/assets/donut_large.png'/>
                <div className='w-[200px] h-[128px] absolute top-[24px] left-[128px] gap-y-[8px] flex flex-col'>
                    <p className='w-[81px] h-[24px] font-Orbitron text-[16px] leading-[24px] text-white text-left'>Diameter</p>
                    <p className='w-[200px] h-[96px] absolute top-[32px] font-Orbitron text-[38px] leading-[48px]  text-white text-left  tracking-[-2%]'>7,521<br/> Miles</p>
                </div>
            </div>

            <div className='w-[352px] h-[176px] rounded-[16px] absolute top-[216px] animate-pulse gap-x-[24px] px-[40px] py-[24px] flex bg-gradient-to-br from-[#170B36] from-0% via-[#370D44] via-46% to-[#430E49] to-89%'>
                <img className='absolute left-[47.54px] top-[48px]' width="32.92px" height="80px" src='/assets/Group 3.png'/>
                <div className='w-[201px] h-[128px] absolute top-[24px] left-[103.96px] flex flex-col gap-y-[8px]'>
                    <p className='w-[201px] h-[24px] font-Orbitron text-[16px] leading-[24px] text-white  text-left'>Day time Temperature</p>
                    <p className='w-[200px] h-[96px] absolute top-[32px] font-Orbitron text-[38px] text-white leading-[48px] text-left tracking-[-2%]'>±475° Celsius</p>
                </div>
            </div>

        </div>
      </div>
      <img src="/assets/Layer 2 (7).png" width="1242px" height="1242px"  className='absolute left-[650px]'/>
    </div>
  )
}

export default Venus
