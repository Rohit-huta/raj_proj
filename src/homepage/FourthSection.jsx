import React from 'react'

const FourthSection = () => {
  return (
    <div className='bg-gray h-90vh'>
      <div className='flex-col justify-center items-center h-90vh'>
        <div className='flex items-center'>
          <p className='text-blue mr-2'>CONTACT US</p>
          <div className='hr-2'></div>
        </div>
        <h1>Send a message!</h1>
        <form action="">
          <div className='grid'>
            <input type="text" placeholder='Your name*' />
            <input type="text" placeholder='Your Email*' />
            <input type="text" placeholder='Your Phone*' />
            <input type="text" placeholder='Your Subject*' />
            <input type="text" placeholder='Your Address*' />
            <input type="text" placeholder='Zip Code*' />
          </div>
          <textarea rows={7} placeholder='Message*'></textarea>
          <button className='btn bg-brown text-bold'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default FourthSection