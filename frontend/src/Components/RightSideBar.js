import React from 'react'
import { BsFire } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { TbHandFinger } from "react-icons/tb";
import { MdSportsCricket } from "react-icons/md";
import { FaSun } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FcClapperboard } from "react-icons/fc";
import { SiStylelint } from "react-icons/si";
import { RiGraduationCapFill } from "react-icons/ri";
import { IoWoman } from "react-icons/io5";
import { GiIndiaGate } from "react-icons/gi";
import { GiWorld } from "react-icons/gi";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { GiStarSattelites } from "react-icons/gi";
import { FaMobileAlt } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { MdOutlineSportsMartialArts } from "react-icons/md";
import { AiOutlineStop } from "react-icons/ai";
import { SiGooglehangouts } from "react-icons/si";
import { FaCircle } from "react-icons/fa";
import { GiPapers } from "react-icons/gi";
import { GiDna2 } from "react-icons/gi";
import { GiLightBulb } from "react-icons/gi";

const RightSideBar = () => {
  return (
    <div className='w-[25%] my-3 h-screen  overflow-y-scroll   scrollbar-hide'>
           
           <div className='w-[80%] mx-8  font-semibold '>
                   <div className='flex justify-start items-center  bg-gray-100 p-2 rounded-md ml-3'>
                      <BsFire size= "40px" className='text-orange-400 pr-4'/>
                      <h1 size = "40px" >Top News</h1>
                   </div>

                   <div className='flex justify-start items-center  p-2 rounded-md ml-3 hover:bg-gray-100'>
                      <FaLocationDot size= "40px" className='text-orange-600 pr-4'/>
                      <h1 size = "40px" >State-city</h1>
                   </div>


                   <div className='flex justify-start items-center p-2 rounded-md ml-3  hover:bg-gray-100 '>
                      <TbHandFinger size= "40px" className='text-orange-200 pr-4'/>
                      <h1 size = "40px" >Lok Sabha Elections</h1>
                   </div>
   

                   <div className='flex justify-start items-center p-2 rounded-md ml-3  hover:bg-gray-100 '>
                      <MdSportsCricket size= "40px" className='text-blue-700 pr-4'/>
                      <h1 size = "40px" >IPL-2024</h1>
                   </div>

                   <div className='flex justify-start items-center p-2 rounded-md ml-3  hover:bg-gray-100 '>
                      <FaStar size= "40px" className='text-orange-400 pr-4'/>
                      <h1 size = "40px" >Bhaskar-Khass</h1>
                   </div>

                   <div className='flex justify-start items-center p-2 rounded-md ml-3  hover:bg-gray-100 '>
                      <FaSun size= "40px" className='text-yellow-500 pr-4'/>
                      <h1 size = "40px" >DB Original</h1>
                   </div>

                   <div className='flex justify-start items-center p-2 rounded-md ml-3  hover:bg-gray-100 '>
                      <FcClapperboard  size= "40px" className='text-purple-600 pr-4'/>
                      <h1 size = "40px" >Bollywood</h1>
                   </div>

                   <div className='flex justify-start items-center p-2 rounded-md ml-3  hover:bg-gray-100 '>
                      <SiStylelint  size= "40px" className='text-purple-600 pr-4'/>
                      <h1 size = "40px" >LifeStyle</h1>
                   </div>

                   <div className='flex justify-start items-center p-2 rounded-md ml-3  hover:bg-gray-100 '>
                      < RiGraduationCapFill size= "40px" className='text-gray-500 pr-4'/>
                      <h1 size = "40px" >Job-Education</h1>
                   </div>

                   <div className='flex justify-start items-center p-2 rounded-md ml-3  hover:bg-gray-100 '>
                      <IoWoman size= "40px" className='text-pink-600 pr-4'/>
                      <h1 size = "40px">Woman</h1>
                   </div>
                     
                   <div className='flex justify-start items-center p-2 rounded-md ml-3  hover:bg-gray-100 '>
                      <GiIndiaGate size= "40px" className='text-orange-300 pr-4'/>
                      <h1 size = "40px" >National</h1>
                   </div>

                   <div className='flex justify-start items-center p-2 rounded-md ml-3  hover:bg-gray-100 '>
                      <GiWorld size= "40px" className='text-blue-500 pr-4'/>
                      <h1 size = "40px" >International</h1>
                   </div>

                   <div className='flex justify-start items-center p-2 rounded-md ml-3  hover:bg-gray-100 '>
                      <RiMoneyRupeeCircleFill size= "40px" className='text-green-600 pr-4'/>
                      <h1 size = "40px" >Business</h1>
                   </div>

                   <div className='flex justify-start items-center p-2 rounded-md ml-3  hover:bg-gray-100 '>
                      <GiStarSattelites size= "40px" className='text-orange-800 pr-4'/>
                      <h1 size = "40px" >Zodiac</h1>
                   </div>

                   <div className='flex justify-start items-center p-2 rounded-md ml-3  hover:bg-gray-100 '>
                      <FaMobileAlt size= "40px" className='text-blue-300 pr-4'/>
                      <h1 size = "40px" >Tech-Auto</h1>
                   </div>

                   <div className='flex justify-start items-center p-2 rounded-md ml-3  hover:bg-gray-100 '>
                      <IoBookSharp size= "40px" className='text-orange-700 pr-4'/>
                      <h1 size = "40px" >Life Quotes</h1>
                   </div>
                   
                   <div className='flex justify-start items-center p-2 rounded-md ml-3  hover:bg-gray-100 '>
                      <MdOutlineSportsMartialArts size= "40px" className='text-blue-700 pr-4'/>
                      <h1 size = "40px" >Sports</h1>
                   </div>

                   <div className='flex justify-start items-center p-2 rounded-md ml-3  hover:bg-gray-100 '>
                      <AiOutlineStop size= "40px" className='text-red-600 pr-4'/>
                      <h1 size = "40px" >Fake News Expose</h1>
                   </div>

                   <div className='flex justify-start items-center p-2 rounded-md ml-3  hover:bg-gray-100 '>
                      <SiGooglehangouts size= "40px" className='text-blue-900 pr-4'/>
                      <h1 size = "40px" >Opinion</h1>
                   </div>

                   <div className='flex justify-start items-center p-2 rounded-md ml-3  hover:bg-gray-100 '>
                      <FaCircle size= "40px" className='text-pink-900 pr-4'/>
                      <h1 size = "40px" >Beautiful</h1>
                   </div>

                   <div className='flex justify-start items-center p-2 rounded-md ml-3  hover:bg-gray-100 '>
                      <GiPapers size= "40px" className='text-gray-600 pr-4'/>
                      <h1 size = "40px" >Magazine</h1>
                   </div>


                   <div className='flex justify-start items-center p-2 rounded-md ml-3  hover:bg-gray-100 '>
                      <GiDna2 size= "40px" className='text-blue-700 pr-4'/>
                      <h1 size = "40px" >Life-Science</h1>
                   </div>

                   <div className='flex justify-start items-center p-2 rounded-md ml-3  hover:bg-gray-100 '>
                      <GiLightBulb size= "40px" className='text-yellow-300 pr-4'/>
                      <h1 size = "40px" >Utility</h1>
                   </div>
           </div>
    </div>
  )
}

export default RightSideBar
