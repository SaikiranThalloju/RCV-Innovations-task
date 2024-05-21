import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { MdSlowMotionVideo } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { CgStories } from "react-icons/cg";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";


const Navbar = () => {
  return (
    <div className='flex items-center justify-between my-2 top-0 sticky z-50 bg-white'>
    <div className='mx-10' >
          <img style={{width : "130px",  height : "50px"}}  src = "https://th.bing.com/th?id=OIP.2gyOhQFo8LtJOxTz4RAnyAHaC5&w=350&h=137&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt = "navbar"/>
    </div>
    <div className='flex items-center justify-center'>
          <div className='flex mx-6 text-lg font-semibold hover:cursor-pointer'>
                <MdHomeFilled  size = "30px" className='text-orange-600 mx-2'/>
                <h1 size = "30px" className='text-orange-600'>Home</h1>  
          </div>

          <div className='flex mx-6 text-lg font-semibold hover:cursor-pointer hover:text-orange-600 '>
                <MdSlowMotionVideo  size = "30px" className='mx-2' />
                <h1 size = "30px">Video</h1>  
          </div>

          <div className='flex mx-6 pr-3 text-lg font-semibold hover:cursor-pointer hover:text-orange-600  border-r border-gray-400 '>
                <IoMdSearch  size = "30px" className='mx-2' />
                <h1 size = "30px">Search</h1>  
          </div>

          <div className='flex mx-6 text-lg font-semibold hover:cursor-pointer hover:text-orange-600'>
                <CgStories  size = "30px" className='mx-2' />
                <h1 size = "30px">Web Stories</h1>  
          </div>

          <div className='flex mx-6 text-lg font-semibold hover:cursor-pointer hover:text-orange-600'>
                <IoNewspaperOutline  size = "30px" className='mx-2' />
                <h1 size = "30px">E-Paper</h1>  
          </div>

          <div className='flex mx-6 text-lg font-semibold '>
                <FaRegUserCircle   size = "30px" className='mx-1' />
                <RiArrowDropDownLine   size = "30px" />
                 
          </div>

          

    </div>
    </div>
  )
}

export default Navbar
