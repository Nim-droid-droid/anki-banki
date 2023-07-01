import React from 'react'
import './style.css'
import Dropdown from '../../components/dropdown'
// import data from './'
const MyBank = () => {
  // console.log(data[0])

const data = [
  {
    type: [
      'Behaviourial',
      {
        'technical':['HTML',
      'CSS',
      'JavaScript',
      'Node',
      'CS Theory',]
    },
      
    ],
  },
  {
    status: ['unanswered', {'answered':['Great!', 'Good', 'OK', 'Not So Good']} ],
  },
];

  return (
    <article>
      <div className='flex mx-14 mt-6 items-center'>
        <h2 className='text-4xl font-bold text-orange'>myBank</h2>
        <div className='filter-container'>
          <button className='btn'>filter by :</button>
          <div className='relative'>

            <button className='btn w-[200px]'>type</button>
             <Dropdown  />
          </div>
          <div className='relative'>
          <button className='btn w-[230px]'>status</button>
           <Dropdown/>
          </div>
        <button className='btn'>+</button>
      </div>
      </div>
    </article>

  )
}

export default MyBank