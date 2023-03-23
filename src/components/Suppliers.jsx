import React from 'react'
import { suppliers } from '../constants'

const Suppliers = () => {
  return (
    <div className='my-[40px]'>
      <h3 className="font-semibold text-dimBlack mb-[16px]">
        Suppliers by Region
      </h3>
      <div className="grid grid-cols-5 gap-[24px]">
        {
          suppliers.map(supplier => (
            <div className="flex items-center gap-[10px]">
              <img src={supplier.flag} alt="" />
              <div>
                <p className="font-normal text-dimBlack">
                  {supplier.country}
                </p>
                <h6 className="text-dimmestBlack font-normal">
                  {supplier.webUrl}
                </h6>
              </div>
            </div>
          ))
        } 
      </div>
    </div>
  )
}

export default Suppliers