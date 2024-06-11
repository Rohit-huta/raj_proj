import React from 'react'
import tax from '../assets/tax.jpg'
import accounting from '../assets/accounting.jpg'
import consult from '../assets/consult.jpg'
const ThirdSection = () => {
  return (
    <div>
        {/* Grey Background */}
        <div className='bg-gray flex justify-evenly'>
            <div className='flex justify-between items-center services-grey'>
                <div className=''>
                    <div className='flex items-center'>
                        <p className='text-blue mb-1 text-sm'>OUR SERVICES</p>
                        <div className='hr-2'></div>
                    </div>
                    <h2>Comprehensive CPA Services to Propel Your Bussiness Forward</h2>
                </div>
                <div className='vl mr-3'></div>
                <div>
                    <p className='text-sm'>Our tailor-made solutions are designed to meet your unique financial needs <span className='text-blue'>More Services</span></p>
                </div>
            </div>
        </div>
        
        
        
    {/* White BG */}
        <div className='services-white flex justify-evenly items-center'>
   
            {/* card */}
            <div className='card position-relative flex-col justify-center items-center'>
                <img src={tax} alt="" className='service-img position-absolute'/>
                <div className=''>
                    <h3>Tax</h3>
                </div>
                <i className="fa-solid fa-greater-than arrow-bg text-white" ></i>
            </div>
   
            {/* card */}
            <div className='card position-relative flex-col justify-center items-center'>
                <img src={accounting} alt="" className='service-img position-absolute'/>
                <div className=''>
                    <h3>Accounting</h3>
                </div>
                <i className="fa-solid fa-greater-than arrow-bg text-white"></i>
            </div>

            {/* card */}
            <div className='card position-relative flex-col justify-center items-center'>
                <img src={consult} alt="" className='service-img position-absolute'/>
                <div className=''>
                    <h3>Bussiness Consulting & Advisory</h3>
                </div>
                <i className="fa-solid fa-greater-than arrow-bg text-white"></i>
            </div>

           

            
        </div>
        
    </div>
  )
}

export default ThirdSection