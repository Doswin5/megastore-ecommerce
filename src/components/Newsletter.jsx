import React from 'react'
import { email } from '../assets'

const Newsletter = () => {
  return (
    <div className='p-[40px] flex items-center flex-col bg-[#e7e8e9]'>
      <h4 className="text-center font-semibold text-dimBlack">
        Subscribe on our newsletter
      </h4>
      <p className="font-normal text text-dimmestBlack mb-[24px]">
        Get daily news on upcoming offers from many suppliers all over the world
      </p>
      <div className="flex items-center gap-[12px]">
        <div className="flex items-center gap-2 bg-white rounded-[8px] pl-[8px]">
          <img src={email} alt="" />
          <input type="text" placeholder='Email' className="text-dimmestBlack font-normal p-[8px] rounded-r-[8px] w-[274px]" />
        </div>
        <button className="btn1 py-[8px] px-[24px] rounded-[8px]">Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter