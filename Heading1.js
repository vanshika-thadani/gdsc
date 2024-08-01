import React, { useState } from 'react';

const Heading1 = () => {
  const [clicked, setClicked] = useState(false);

  const clickHandlerbtn = () => {
    console.log('Button clicked'); // Debug log
    setClicked(true);
    const section = document.getElementById('mercury');
    if (section) {
      console.log('Scrolling to section:', section); // Debug log
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log('Section not found'); // Debug log
    }
  };

  return (
    <div className='w-[961px] h-[594px] flex flex-col gap-y-[56px] items-center absolute top-[215px] left-[238px]'>
      <div className='flex flex-col gap-y-[24px] justify-start'>
        <h1 className='w-[961px] font-Orbitron font-black text-[90px] leading-[126px] text-center mx-auto text-white z-50'>
          Let's Get To Know Our Solar System Galaxy
        </h1>
        <p className='h-[48px] font-medium text-[16px] font-Inter leading-[24px] text-white text-center align-top absolute top-[402px]'>
          Embark on a cosmic journey across the ethereal expanse of the
          <br /> solar system Galaxy and follow the orchestration of the cosmos and the planets weaving stories of their timeless existence.
        </p>
      </div>
      
      <button onClick={clickHandlerbtn} className='w-[246px] h-[88px] flex flex-row justify-center items-center gap-x-[8px] px-[40px] py-[28px] bg-gradient-to-br from-[#2500FF] to-[#CD1013] absolute top-[506px] left-[357.5px] rounded-[8px]'>
        <p className='font-Orbitron text-[21px] leading-[32px] tracking-[-2%] text-white'>
          Learn More
        </p>
        <img width='32px' height='32px' className='px-[5px] py-[2px] animate-bounce' src='/assets/south.png' alt='Down Arrow' />
      </button>
    </div>
  );
};

export default Heading1;
