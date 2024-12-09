import React from 'react'
import { Link } from 'react-router-dom'
import { GoTrophy } from "react-icons/go";


const UniRanking = () => {
    const top3=[
        {uniname:"GEHU, Dehradun ",image:"/src/assets/react.svg",pos:"1"},        
        {uniname:"IMS , Dehradun",image:"/src/assets/react.svg",pos:"2"},        
        {uniname:"DIT, Dehradun ",image:"/src/assets/react.svg",pos:"3"},
    ]
  return (
    <div className='drop-shadow-md rounded-md p-4 flex flex-col  items-center justify-center text-2xl'>
        <div className='grid md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-8 md:gap-12 lg:gap-14'>
            <div className='bg-white text-black p-4 rounded-2xl'>
                <div className='flex items-center justify-center p-2'>
                    <GoTrophy className="md:h-24 md:w-24 h-12 w-12 drop-shadow-md text-[#FFD700]" />
                    <h2 className='text-black uppercase text-3xl md:text-4xl lg:text-5xl font-bold'>Best Performer !!</h2>
                </div>
                <div className='flex flex-col items-center justify-center'>                
                        <div className="text-black flex flex-col gap-4 items-center p-2 justify-center" >
                            <img src={top3[0].image} className="md:h-[14rem] md:w-[14rem] drop-shadow-md rounded-md p-2  h-[8rem] w-[8rem]" alt={top3[0].uniname} />
                            <div className='flex gap-2 flex-col text-2xl md:text-5xl items-center hover:text-[#00bbf1] transition hover:font-bold'>
                                <p className='font-bold'>#{top3[0].pos}</p>
                                <p >{top3[0].uniname}</p>
                            </div>
                        </div>
                </div>
            </div>
            <div className='bg-white text-black p-4 rounded-2xl'>
                <div className='flex items-center justify-center '>
                    <GoTrophy className="md:h-24 md:w-24 h-12 w-12 text-gray-700" />
                    <h2 className='text-black uppercase text-3xl md:text-4xl lg:text-5xl font-bold'>our top 3 !!</h2>
                </div>
                <div className='flex flex-col items-start justify-between p-4'>
                {
                    top3.map(({ uniname, image, pos }) => (
                        <div className="text-black flex gap-4 items-center p-2 justify-between w-full" key={uniname}>
                            <div className='flex gap-2 text-2xl md:text-3xl items-center transition hover:font-bold'>
                                <p className=' hover:text-[#00bbf1]'>{pos}<span className='text-xl md:text-2xl font-bold'>.</span></p> 
                                <p >{uniname}</p>
                            </div>
                            <img src={image} className="md:h-[7rem] md:w-[7rem] drop-shadow-md rounded-full  h-12 w-12" alt={uniname} />
                        </div>
                    ))
                }

                </div>
            </div>
        </div>
                
    </div>
  )
}

export default UniRanking