import React from 'react'
import { quotesBg } from '../assets'

const Quotes = () => {
  const styles = {
    backgroundImage: `url(${quotesBg})`
  }

  return (
    <div style={styles} className='p-[40px] flex rounded-[8px] gap-[178px] my-[40px]'>
      <div className='w-full'>
        <h1 className='text-white font-semibold'>
          An easy way to send requests to all suppliers
        </h1>
        <p className="font-normal text-white mt-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
        </p>
      </div>
      <div className="bg-white p-[24px] w-full rounded-[8px]">
        <h4 className="font-semibold">
          Send quote to suppliers
        </h4>
        <form className='mt-[24px] gap-[16px] flex flex-col'>
          <input type="text" placeholder='What Item you need?' className="text-dimmestBlack font-normal p-[8px] border rounded-[8px] w-full" />
          <textarea type="text" placeholder='Type more details' className="text-dimmestBlack font-normal p-[8px] border rounded-[8px] w-full h-[70px] resize-none" />
          <div className="flex items-center gap-4 w-full">
            <input type="text" placeholder='Quantity' className="text-dimmestBlack font-normal p-[8px] border rounded-[8px] w-[70%]" />
            <select className="text-dimmestBlack font-normal p-[8px] border rounded-[8px] w-[30%]">
              <option value="">Pcs</option>
            </select>
          </div>
          <button className="btn1 py-[8px] rounded-[8px]">Send Inquiry</button>
        </form>
      </div>
    </div>
  )
}

export default Quotes