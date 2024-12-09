import React from 'react'
import UniGraph from './UniGraph';
import UniRanking from './UniRanking';
import UniSlider from './UniSlider';
import JudgingCriteria from './JudgingCriteria';
import Feedback from './Feedback';

const Inshome = () => {
  return (
    <div className='relative p-6 space-y-6'>
      <div className="pt-[5rem] md:pt-[7rem] gap-4 flex items-center justify-center">        
        <UniGraph />   
      </div>
      <UniRanking />      
      <UniSlider className="w-full"/>
      <JudgingCriteria />
      <Feedback />
    </div>
  )
}

export default Inshome

