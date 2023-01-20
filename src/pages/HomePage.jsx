import React from 'react'
import { HeroSection, Deals, Homes, Electronics, Quotes, Recommended, Suppliers, Services } from '../components'

const HomePage = () => {
  return (
    <div className='bg-secondary px-[100px] pt-[180px] pb-[40px]'>
      <HeroSection />
      <Deals />
      <Homes />
      <Electronics />
      <Quotes />
      <Recommended />
      <Services />
      <Suppliers />
    </div>
  )
}

export default HomePage