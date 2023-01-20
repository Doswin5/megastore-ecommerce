import React from 'react'
import { service1 } from '../assets'

const Services = () => {
  return (
    <div className='mt-[40px]'>
      <h3 className="font-semibold text-dimBlack mb-[16px]">
        Our Services
      </h3>
      <div className="grid grid-cols-4 gap-[24px]">
        <div className="flex flex-col bg-white rounded-[8px] border pb-[24px]">
          <img src={service1} alt="" className='h-[150px]' />
          <p className="font-medium text-dimBlack px-[16px] -mt-[16px]">
            Source from Industry <br /> Hubs
          </p>
        </div>
        <div className="flex flex-col bg-white rounded-[8px] border pb-[24px]">
          <img src={service1} alt="" className='h-[150px]' />
          <p className="font-medium text-dimBlack px-[16px] -mt-[16px]">
            Source from Industry <br /> Hubs
          </p>
        </div>
        <div className="flex flex-col bg-white rounded-[8px] border pb-[24px]">
          <img src={service1} alt="" className='h-[150px]' />
          <p className="font-medium text-dimBlack px-[16px] -mt-[16px]">
            Source from Industry <br /> Hubs
          </p>
        </div>
        <div className="flex flex-col bg-white rounded-[8px] border pb-[24px]">
          <img src={service1} alt="" className='h-[150px]' />
          <p className="font-medium text-dimBlack px-[16px] -mt-[16px]">
            Source from Industry <br /> Hubs
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services