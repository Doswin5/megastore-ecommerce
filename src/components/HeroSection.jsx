import React from 'react'
import { heroBgImage, avatar } from '../assets'

const HeroSection = () => {
  const styles = {
    backgroundImage: `url(${heroBgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom'
  }
  return (
    <div className='bg-white px-[16px] py-[24px] rounded-[8px] flex items-stretch gap-[16px] w-full mb-[40px]'>
      <div className='w-[400px] flex flex-col justify-between'>
        <p className="font-medium p-[8px] rounded-[8px] bg-secondary">Automobiles</p>
        <p className="font-medium p-[8px]  text-dimmerBlack">Clothes and Wear</p>
        <p className="font-medium p-[8px] text-dimmerBlack">Home Interiors</p>
        <p className="font-medium p-[8px] text-dimmerBlack">Computer and Tech</p>
        <p className="font-medium p-[8px] text-dimmerBlack">Tools and Equipments</p>
        <p className="font-medium p-[8px] text-dimmerBlack">Sports and Outdoor</p>
        <p className="font-medium p-[8px] text-dimmerBlack">Animal and Pets</p>
        <p className="font-medium p-[8px] text-dimmerBlack">Machinery Tools</p>
        <p className="font-medium p-[8px] text-dimmerBlack">More Category</p>
      </div>
      <div style={styles} className='w-full text-dimBlack px-[40px] py-[60px]'>
        <h2 className="font-regular leading-1">
          Latest Trending
        </h2>
        <h1 className="font-bold leading-none mb-[24px]">
          Electronic Items
        </h1>
        <button className="btn2 font-medium">Learn More</button>
      </div>
      <div className='flex flex-col gap-[16px] w-[400px]'>
        <div className='px-[8px] py-[16px] bg-[#E3F0FF] rounded-[8px]'>
          <div className="flex justify-start items-center gap-2">
            <img src={avatar} alt="" />
            <p className='text-dimBlack'>Hi, user <br /> let’s get started</p>
          </div>
          <button className='bg-primary text-white text-[13px] w-full py-[8px] rounded-[8px] mt-[16px] mb-[8px]'>Join Now</button>
          <button className='bg-white text-primary text-[13px] w-full py-[8px] rounded-[8px]'>Log In</button>
        </div>
        <div className='p-[16px] pb-[24px] bg-[#F38332] rounded-[8px]'>
          <p className="text-white">
            Get US $10 off <br /> with a new <br /> supplier
          </p>
        </div>
        <div className='p-[16px] pb-[24px] bg-[#55BDC3] rounded-[8px]'>
          <p className="text-white">
            Send quotes with <br /> supplier <br /> preferences
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection