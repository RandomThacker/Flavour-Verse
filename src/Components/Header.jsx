import React from 'react'
import { Banner1, Banner2, Banner3, Banner4, Banner5} from "../images"

function Header() {
    const images = [Banner1, Banner2, Banner3, Banner4, Banner5]
  return (
    <div className='w-full h-[100vh]'>
      <div className='w-full h-full relative '>
        <img src={images[Math.floor(Math.random()*images.length)]} className='w-full h-full object-cover'/>
      </div>
      <div className='absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4'></div>
    </div>
  )
}

export default Header
