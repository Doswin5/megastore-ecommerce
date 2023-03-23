import React from 'react'
import { services } from '../constants'

const Services = () => {
  return (
    <div className='mt-[40px]'>
      <h3 className="font-semibold text-dimBlack mb-[16px]">
        Our Services
      </h3>
      <div className="grid grid-cols-4 gap-[24px]">
        {
          services.map(service => (
            <div className="flex flex-col bg-white rounded-[8px] border pb-[24px] hover:bg-gray-50 cursor-pointer">
              <img src={service.image} alt="" className='h-[150px]' />
              <p className="font-medium text-dimBlack px-[16px] -mt-[16px] w-[75%]">
                {service.title}
              </p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Services