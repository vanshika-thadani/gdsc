import React from 'react'

const Sun = () => {
  return (
    <div id='sun' className='w-full h-screen relative bg-[url("/public/assets/Mercury.png")] bg-cover'>
      <img className='w-full h-auto absolute top-0 left-1/2 transform -translate-x-[54%] -translate-y-[65%] md:-translate-y-3/4 lg:-translate-y-[67%]' src="/assets/sun (2).png" />
      <div className='w-full md:w-3/4 lg:w-1/2 absolute bottom-[16px] left-[16px] md:left-[24px] lg:left-[32px] p-[16px] flex flex-col gap-y-[40px]'>
        <div className='flex flex-col gap-y-[24px]'>
          <p className='text-left text-white font-Orbitron text-4xl md:text-5xl lg:text-6xl'>.SUN</p>
          <p className='text-white font-Inter font-[16px] leading-[24px]  md:text-lg lg:text-xl text-left'>
            The Sun is a huge, glowing ball of hot plasma at the centre of our solar system and provides the vital energy needed for life on Earth. This energy radiates outward in the form of light and heat, providing warmth and light to the entire solar system.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-[16px]'>
          <div className='flex rounded-lg p-[24px] bg-gradient-to-br from-[#170B36] via-[#370D44] to-[#430E49] animate-pulse'>
            <img className='w-[80px] h-[80px]' src='/assets/donut_large.png' alt="Diameter" />
            <div className='ml-[24px]'>
              <p className='font-Orbitron text-lg text-white'>Diameter</p>
              <p className='font-Orbitron text-2xl text-white'>87,000 miles</p>
            </div>
          </div>
          <div className='flex rounded-lg p-[24px] bg-gradient-to-br from-[#170B36] via-[#370D44] to-[#430E49] animate-pulse'>
            <img className='w-[32px] h-[80px]' src='/assets/Group 3.png' alt="Temperature" />
            <div className='ml-[24px]'>
              <p className='font-Orbitron text-lg text-white'>Temperature</p>
              <p className='font-Orbitron text-2xl text-white'>±5,500° Celsius</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sun
