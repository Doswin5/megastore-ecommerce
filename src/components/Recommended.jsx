import React from 'react'
import { recs } from '../constants'

const Recommended = () => {
  return (
    <div className='my-[40px]'>
      <h3 className="font-semibold text-dimBlack mb-[16px]">
        Recommended Items
      </h3>
      <div className="grid grid-cols-5 gap-[24px]">
        {
          recs.map(rec => (
            <div className="flex flex-col bg-white rounded-[8px] p-[16px] border hover:scale-105 transform duration-300 cursor-pointer">
              <img src={rec.image} alt="" />
              <p className="font-semibold text-dimBlack mt-[16px] mb-[4px]">${rec.price.toFixed(2)}</p>
              <p className="font-normal text-dimmerBlack">
                {rec.description}
              </p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Recommended