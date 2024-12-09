import React from 'react'
import Insights from './Insights'
import { FaLocationDot } from "react-icons/fa6";
import { FaListUl } from "react-icons/fa";
import BuildingAge from "./BuildingAge" ;
import LabFacalaties from "./LabFacalaties" ;
import Infrastructure from "./Infrastructure" ;
import Feedback from './Feedback';
const unidata = [
  {uniname:"graphic era hill university", location:"dehradun,uttarakhand",image: "/src/assets/react.svg",
    desc:"Graphic Era Hill University is based in the magnificent and serene city of Dehradun, nestled in the valley surrounded by Rajaji National Park on one end and Clement Town Cantonment on the other. The University prides itself in its University regime that warrants the holistic development of all the students part of the Graphic Era Fraternity. "}
]
const Inspect = () => {
  const generateReport = () => {
    
  };
  return (
  <div className='relative p-6 space-y-6 w-full'>
    <div className="pt-[5rem] gap-4  ">
    <div className='drop-shadow-md rounded-md p-4 flex flex-col  items-center justify-center text-2xl'>
        <div className='grid md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-8 md:gap-12 lg:gap-14'>
              <div className='bg-white text-black p-4 rounded-2xl '>
                  <div className='p-6 bg-white rounded-md flex flex-col  items-center justify-center '>
                    <img src={unidata[0].image} alt={unidata[0].uniname} className='w-[12rem] h-[12rem] rounded-md' />
                    <div>
                      <h1 className='text-black font-bold text-4xl text-center uppercase '>{unidata[0].uniname}</h1>  
                      <p className='text-black font-bold text-xl capitalize  gap-4 items-center justify-center flex lg:text-3xl'>
                        <FaLocationDot className='p-1' />  
                        <p className='text-xl md:text-2xl'>{unidata[0].location}</p> 
                      </p>  
                     <p className='text-base md:text-xl text-center mt-4 text-slate-500'>{unidata[0].desc}</p>
                       
                    </div>
                  </div>
              </div>
            
          <Feedback />
        </div>
                
    </div>
      
      <div >
        <h2 className='uppercase text-3xl md:text-4xl bg-white lg:text-5xl p-4 font-bold text-left'>Overview</h2>
        <Insights />
      </div>
      <div >
        <h2 className='uppercase text-3xl md:text-4xl bg-white lg:text-5xl p-4 font-bold text-left'>Insights</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 p-4'>
          <BuildingAge />
          <LabFacalaties />
          <Infrastructure />
        </div>
        <div className='p-4'>
          <button
            type="button"
            onClick={generateReport}
            className="inline-flex items-center py-3.5 px-4 text-base font-bold text-center text-white bg-[#0f4b8a] hover:bg-[#00bbf1] rounded-lg focus:ring-4 focus:ring-gray-400 "
          >
            Generate Report
          </button>

        </div>
      </div>
      </div>
    </div>
  )
}

export default Inspect