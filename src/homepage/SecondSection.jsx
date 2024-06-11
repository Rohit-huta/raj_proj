import React from 'react'
import secondsection from '../assets/secondsection.jpg'
const SecondSection = () => {
  return (
    <div className='h-8 flex justify-center items-center'>
        <div className='w-50 flex justify-end'>
            <img src={secondsection} alt="" className='second-sec-img object-cover p-2 ' />
        </div>
        <div className='second-s-desc w-50 flex-col '>
            <div className='flex items-center'>
              <p className='text-blue mr-2'>ABOUT LAMIA & ASSOCIATES, PC </p>
              <div className='hr-2'></div>
            </div>
            <h2>Building Relationships that matter</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolorum placeat minima mollitia </p>
        </div>
    </div>
  )
}

export default SecondSection