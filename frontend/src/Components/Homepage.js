import React from 'react'
import Navbar from './Navbar'
import RightSideBar from './RightSideBar'
import NewsSection from './NewsSection'
import Footer from './Footer'
import RightSideComponent from './RightSideComponent'
import Image from './Image'
const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Image/>
      <div className='flex'>
      <RightSideBar/>
      <NewsSection/>
      <RightSideComponent/>
      </div>

      <Footer/>
    </div>
  )
}

export default Homepage
