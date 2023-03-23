import React from 'react'
import { watches, laptop, cameras, headphones, phones } from '../assets'

const Deals = () => {
  return (
    <div className='flex bg-white border rounded-[8px]'>
      <div className="p-[24px] border w-[250px] rounded-l-[8px]">
        <h4 className="font-semibold">
          Deals and Offers
        </h4>
        <p className="font-normal leading-none mb-[16px] text-dimmestBlack">
          Hygiene Equipments
        </p>
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-center bg-[#606060] text-white w-[45px] h-[50px] justify-center rounded-[4px]">
            <p className="font-bold leading-none">04</p>
            <span className="font-normal text-[12px]">Days</span>
          </div>
          <div className="flex flex-col items-center bg-[#606060] text-white w-[45px] h-[50px] justify-center rounded-[4px]">
            <p className="font-bold leading-none">13</p>
            <span className="font-normal text-[12px]">Hours</span>
          </div>
          <div className="flex flex-col items-center bg-[#606060] text-white w-[45px] h-[50px] justify-center rounded-[4px]">
            <p className="font-bold leading-none">34</p>
            <span className="font-normal text-[12px]">Mins</span>
          </div>
          <div className="flex flex-col items-center bg-[#606060] text-white w-[45px] h-[50px] justify-center rounded-[4px]">
            <p className="font-bold leading-none">56</p>
            <span className="font-normal text-[12px]">Secs</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 items-center w-full">
        <div className="flex flex-col items-center py-[24px] border w-full hover:bg-gray-100 cursor-pointer">
          <img src={watches} alt="" />
          <p className="font-normal mt-[24px] mb-[8px]">
            Smart Watches
          </p>
          <span className="font-medium text-[14px] text-[#EB001B] px-[16px] py-[4px] rounded-full bg-[#FFE3E3]">
            -25%
          </span>
        </div>
        <div className="flex flex-col items-center py-[24px] px-[16px] border w-full hover:bg-gray-100 cursor-pointer">
          <img src={laptop} alt="" />
          <p className="font-normal mt-[24px] mb-[8px]">
            Laptop
          </p>
          <span className="font-medium text-[14px] text-[#EB001B] px-[16px] py-[4px] rounded-full bg-[#FFE3E3]">
            -15%
          </span>
        </div>
        <div className="flex flex-col items-center py-[24px] px-[16px] border w-full hover:bg-gray-100 cursor-pointer">
          <img src={cameras} alt="" />
          <p className="font-normal mt-[24px] mb-[8px]">
            GoPro Cameras
          </p>
          <span className="font-medium text-[14px] text-[#EB001B] px-[16px] py-[4px] rounded-full bg-[#FFE3E3]">
            -40%
          </span>
        </div>
        <div className="flex flex-col items-center py-[24px] px-[16px] border w-full hover:bg-gray-100 cursor-pointer">
          <img src={headphones} alt="" />
          <p className="font-normal mt-[24px] mb-[8px]">
            Headphones
          </p>
          <span className="font-medium text-[14px] text-[#EB001B] px-[16px] py-[4px] rounded-full bg-[#FFE3E3]">
            -25%
          </span>
        </div>
        <div className="flex flex-col items-center py-[24px] px-[16px] border w-full hover:bg-gray-100 cursor-pointer">
          <img src={phones} alt="" />
          <p className="font-normal mt-[24px] mb-[8px]">
            Smart Phones
          </p>
          <span className="font-medium text-[14px] text-[#EB001B] px-[16px] py-[4px] rounded-full bg-[#FFE3E3]">
            -15%
          </span>
        </div>
      </div>
    </div>
  )
}

export default Deals