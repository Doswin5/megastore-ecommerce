import React from 'react'
import { homeBg, chair, sofa, kitchenChair, pots, mixer, coffeeMaker, appliance, flowerVase } from '../assets'

const Homes = () => {
  const styles = {
    backgroundImage: `url(${homeBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top right'
  }
  return (
    <div className='my-[24px] flex bg-white rounded-[8px]'>
      <div style={styles} className="p-[24px] border w-[310px] rounded-l-[8px]">
        <h4 className="font-semibold text-dimBlack">
          Home and <br /> Outdoor
        </h4>
        <button className="btn2 mt-[16px] font-medium">Source Now</button>
      </div>
      <div className="grid grid-cols-4 w-full">
        <div className="flex flex-col p-[16px] border hover:bg-gray-100 cursor-pointer">
          <p className="text-dimBlack">
            Soft Chairs
          </p>
          <div className='flex items-center justify-between'>
            <p className="text-dimmestBlack">
              From <br />
              USD 19
            </p>
            <img src={chair} alt="" />
          </div>
        </div>
        <div className="flex flex-col p-[16px] border hover:bg-gray-100 cursor-pointer">
          <p className="text-dimBlack">
            Sofa & Chairs
          </p>
          <div className='flex items-center justify-between'>
            <p className="text-dimmestBlack">
              From <br />
              USD 19
            </p>
            <img src={sofa} alt="" />
          </div>
        </div>
        <div className="flex flex-col p-[16px] border hover:bg-gray-100 cursor-pointer">
          <p className="text-dimBlack">
            Kitchen Chair
          </p>
          <div className='flex items-center justify-between'>
            <p className="text-dimmestBlack">
              From <br />
              USD 19
            </p>
            <img src={kitchenChair} alt="" />
          </div>
        </div>
        <div className="flex flex-col p-[16px] border hover:bg-gray-100 cursor-pointer">
          <p className="text-dimBlack">
            Cooking Pot
          </p>
          <div className='flex items-center justify-between'>
            <p className="text-dimmestBlack">
              From <br />
              USD 19
            </p>
            <img src={pots} alt="" />
          </div>
        </div>
        <div className="flex flex-col p-[16px] border hover:bg-gray-100 cursor-pointer">
          <p className="text-dimBlack">
            Kitchen Mixer
          </p>
          <div className='flex items-center justify-between'>
            <p className="text-dimmestBlack">
              From <br />
              USD 100
            </p>
            <img src={mixer} alt="" />
          </div>
        </div>
        <div className="flex flex-col p-[16px] border hover:bg-gray-100 cursor-pointer">
          <p className="text-dimBlack">
            Flower Vase
          </p>
          <div className='flex items-center justify-between'>
            <p className="text-dimmestBlack">
              From <br />
              USD 39
            </p>
            <img src={flowerVase} alt="" />
          </div>
        </div>
        <div className="flex flex-col p-[16px] border hover:bg-gray-100 cursor-pointer">
          <p className="text-dimBlack">
            Home Appliance
          </p>
          <div className='flex items-center justify-between'>
            <p className="text-dimmestBlack">
              From <br />
              USD 19
            </p>
            <img src={appliance} alt="" />
          </div>
        </div>
        <div className="flex flex-col p-[16px] border hover:bg-gray-100 cursor-pointer">
          <p className="text-dimBlack">
            Coffee Maker
          </p>
          <div className='flex items-center justify-between'>
            <p className="text-dimmestBlack">
              From <br />
              USD 10
            </p>
            <img src={coffeeMaker} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homes