import React from 'react'
import { Link } from 'react-router-dom'
import { megastoreLogo, person, chat, favorite, cart, menu, flag } from '../assets'

const Navbar = () => {
  return (
    <div className='bg-white fixed left-0 right-0'>
      <div className='flex justify-between items-center px-[100px] py-[24px]'>
        <Link to='/'>
          <img src={megastoreLogo} alt="" />
        </Link>
        <div className="rounded-[8px] border-2 border-primary">
          <input type="text" placeholder='Search' className='rounded-tl-[8px] rounded-bl-[8px] text-dimmestBlack pl-[8px] py-[8px] border-r border-primary w-[300px] outline-none' />
          <select className='px-[8px] outline-none text-dimBack'>
            <option value="">All Category</option>
          </select>
          <button className='btn1 py-[8px] px-[24px] rounded-tr-[5px] rounded-br-[5px] ml-2 border-none'>Search</button>
        </div>
        <div className="flex items-center justify-end gap-[24px]">
          <div className='flex flex-col items-center gap-[4px]'>
            <img src={person} alt="" />
            <h6 className="dimmestBlack">Profile</h6>
          </div>
          <div className='flex flex-col items-center gap-[4px]'>
            <img src={chat} alt="" />
            <h6 className="dimmestBlack">Message</h6>
          </div>
          <div className='flex flex-col items-center gap-[4px]'>
            <img src={favorite} alt="" />
            <h6 className="dimmestBlack">Orders</h6>
          </div>
          <div className='flex flex-col items-center gap-[4px]'>
            <img src={cart} alt="" />
            <h6 className="dimmestBlack">My Cart</h6>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center py-[16px] border-y px-[100px]">
        <div className="flex items-center gap-[24px]">
          <div className="flex gap-2 items-center">
            <img src={menu} alt="" />
            <p className="font-medium">All Category</p>
          </div>
          <p className="font-medium">Hot Offers</p>
          <p className="font-medium">Gift Boxes</p>
          <p className="font-medium">Projects</p>
          <p className="font-medium">Menu Items</p>
          <select className="font-medium outline-none">
            <option value="">Help</option>
          </select>
        </div>
        <div className="flex items-center gap-[24px]">
          <select className="font-medium outline-none">
            <option value="">English, USD</option>
          </select>
          <div className="flex gap-2 items-center">
            <p className="font-medium">Ship to</p>
            <img src={flag} alt="" />
            <select className="font-medium outline-none">
              <option value=""></option>
            </select>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar