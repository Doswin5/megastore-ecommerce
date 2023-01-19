import React from 'react'
import { HeroSection, Deals, Homes, Electronics, Quotes, Recommended, Suppliers, Services, Newsletter } from '../components'

const HomePage = () => {
  return (
    <div className='bg-secondary px-[100px] pt-[180px]'>
      <HeroSection />
      <Deals />
      <Homes />
      <Electronics />
      <Quotes />
      <Recommended />
      <Services />
      <Suppliers />
      <Newsletter />
    </div>
  )
}

export default HomePage