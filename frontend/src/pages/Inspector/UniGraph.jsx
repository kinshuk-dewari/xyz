import React from 'react';
import { PureComponent } from 'react';
import { BarChart,Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Uni A',score: 4000 },
  { name: 'Uni B',score: 3000 },
  { name: 'Uni C',score: 2000 },
  { name: 'Uni D',score: 2780 },
  { name: 'Uni E',score: 1890 },
  { name: 'Uni F',score: 2390 },
  { name: 'Uni G',score: 3490 },
];


const UniGraph = () => {
  return (
    <div className='rounded-md bg-white h-[40rem] w-full md:max-w-[60%] text-black text-2xl drop-shadow-md contain'>
      <h2 className='uppercase text-3xl md:text-4xl bg-white lg:text-5xl p-4 font-bold text-center'>Score board</h2>      
      <ResponsiveContainer width="90%" height="85%">
        <BarChart width={80} height={40} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="score"  fill="#00bbf1" activeBar={<Rectangle fill="#0f4b8a" stroke="#155396" />} />
        </BarChart>
      </ResponsiveContainer>
    
    </div>
  )
}

export default UniGraph