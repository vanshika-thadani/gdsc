import React from 'react'

const Navbar = () => {
  return (
      <div className='w-[1218px] h-[32px] flex  mx-auto items-center justify-between'>
        <div className=' w-[272.61px] h-[32px] flex items-center gap-x-1'>
          <img  width="32px" height="32px" src='/assets/eco.png'/>
          <img width="232.61px" height="32px" className='' src='/assets/Universe.png'/>'
        </div>

        <nav className='w-[422px] h-[24px] '>
          <ul className=' w-[422px] h-[24px] flex gap-x-12 text-white leading-[24px] text-[16px]'>
            <li  className="text-white font-semibold hover:text-yellow-400 transition duration-300 cursor-pointer"><a href='#mercury'>Mercury</a></li>
            <li className="text-white font-semibold hover:text-yellow-400 transition duration-300 cursor-pointer"><a  href='#venus'>Venus</a></li>
            <li className="text-white font-semibold hover:text-yellow-400 transition duration-300 cursor-pointer"><a href='#earth'>Earth</a></li>
            <li className="text-white font-semibold hover:text-yellow-400 transition duration-300 cursor-pointer"><a href='#mars'>Mars</a></li>
            <li>...</li>
            <li className='hidden'>Jupiter</li>
            <li className='hidden'>Saturn</li>
            <li className='hidden'>Uranus</li>
            <li className='hidden'>Neptune</li>
          </ul>
        </nav>

        <div className='w-[206px] h-[24px] text-white leading-[24px] text-[16px]'>
          <p>©2023 Solarsystemdesign</p>
        </div>
      </div>
  )
}

export default Navbar
