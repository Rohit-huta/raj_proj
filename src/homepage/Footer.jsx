import React from 'react'
import picpa_logo from '../assets/picpa_logo.png'
import aicpa_logo from '../assets/aicpa_logo.png'
const Footer = () => {
  return (
    <>
    <div className='bg-white-f'></div>
    <div className='h-5 bg-blue flex-col justify-evenly'>
        <div className='bg-brown text-center text-white py-4'>
            <h5 className='text-bold'>Come Visit us</h5>
            <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, eaque.</p>
        </div>
        <div className='flex justify-center'>
            <div className='hr'></div>
        </div>
        <div className='flex justify-center'>
            <div className='w-75 flex justify-between'>
                <p className='text-2sm text-white'>Copyright ©2023 www.lamiacpa.com</p>
                <ul className='m-0  menus-f flex list-none justify-evenly'>
                    <li className='text-2sm text-white'>Home</li>
                    <li className='text-2sm text-white'>Services</li>
                    <li className='text-2sm text-white'>Industries</li>
                    <li className='text-2sm text-white'>About Us</li>
                </ul>
                <div className='flex '>
                    <img src={picpa_logo} className='mr-2' height="40px"/>
                    <img src={aicpa_logo} alt="" height="40px"/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer