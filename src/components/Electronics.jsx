import React from 'react'
import { electronicsBg } from '../assets'
import { electronics } from '../constants'

const Electronics = () => {
  const styles = {
    backgroundImage: `url(${electronicsBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top right'
  }
  return (
    <div className='my-[24px] flex bg-white rounded-[8px]'>
      <div style={styles} className="p-[24px] border w-[310px] rounded-l-[8px]">
        <h4 className="font-semibold text-dimBlack">
          Consumer <br /> Electronics and <br /> Gadgets
        </h4>
        <button className="btn2 mt-[16px] font-medium">Source Now</button>
      </div>
      <div className="grid grid-cols-4 w-full">
        {
          electronics.map(electronic => (
            <div className="flex flex-col p-[16px] border hover:bg-gray-100 cursor-pointer">
              <p className="text-dimBlack">
                {electronic.itemName}
              </p>
              <div className='flex items-center justify-between'>
                <p className="text-dimmestBlack">
                  From <br />
                  USD {electronic.price}
                </p>
                <img src={electronic.image} alt="" />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Electronics