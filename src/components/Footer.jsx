import React from 'react'
import { appStore, expandLess, facebook, megastoreLogo, usFlag } from '../assets'

const Footer = () => {
  return (
    <div className='pt-[40px]'>
      <div className="px-[100px] flex justify-between pb-[80px]">
        <div className='w-[25%]'>
          <img src={megastoreLogo} alt="" />
          <p className="font-normal text-dimmerBlack my-[16px]">
            Best information about the company gies here but now lorem ipsum is
          </p>
          <div className="flex items-center gap-[10px]">
            <img src={facebook} alt="" />
            <img src={facebook} alt="" />
            <img src={facebook} alt="" />
            <img src={facebook} alt="" />
            <img src={facebook} alt="" />
          </div>
        </div>
        <div>
          <p className="font-medium text-dimBlack mb-[8px]">
            About
          </p>
          <p className="font-normal text-dimmestBlack mb-[4px]">
            About Us
          </p>
          <p className="font-normal text-dimmestBlack mb-[4px]">
            Find Store
          </p>
          <p className="font-normal text-dimmestBlack mb-[4px]">
            Categories
          </p>
          <p className="font-normal text-dimmestBlack mb-[4px]">
            Blogs
          </p>
        </div>
        <div>
          <p className="font-medium text-dimBlack mb-[8px]">
            Partnerships
          </p>
          <p className="font-normal text-dimmestBlack mb-[4px]">
            About Us
          </p>
          <p className="font-normal text-dimmestBlack mb-[4px]">
            Find Store
          </p>
          <p className="font-normal text-dimmestBlack mb-[4px]">
            Categories
          </p>
          <p className="font-normal text-dimmestBlack mb-[4px]">
            Blogs
          </p>
        </div>
        <div>
          <p className="font-medium text-dimBlack mb-[8px]">
            Information
          </p>
          <p className="font-normal text-dimmestBlack mb-[4px]">
            About Us
          </p>
          <p className="font-normal text-dimmestBlack mb-[4px]">
            Find Store
          </p>
          <p className="font-normal text-dimmestBlack mb-[4px]">
            Categories
          </p>
          <p className="font-normal text-dimmestBlack mb-[4px]">
            Blogs
          </p>
        </div>
        <div>
          <p className="font-medium text-dimBlack mb-[8px]">
            For Users
          </p>
          <p className="font-normal text-dimmestBlack mb-[4px]">
            About Us
          </p>
          <p className="font-normal text-dimmestBlack mb-[4px]">
            Find Store
          </p>
          <p className="font-normal text-dimmestBlack mb-[4px]">
            Categories
          </p>
          <p className="font-normal text-dimmestBlack mb-[4px]">
            Blogs
          </p>
        </div>
        <div>
          <p className="font-medium text-dimBlack mb-[16px]">
            Get Apps
          </p>
          <img src={appStore} alt="" className='mb-[8px]' />
          <img src={appStore} alt="" className='mb-[8px]' />
        </div>
      </div>
      <div className="flex justify-between items-center py-[24px] bg-secondary px-[100px] ">
        <p className="font-normal text-dimmerBlack">
          © 2023 Ecommerce. 
        </p>
        <div className="flex items-center">
          <img src={usFlag} alt="" />
          <p className="font-normal text-dimmerBlack ml-[4px]">
            English 
          </p>
          
          <img src={expandLess} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer