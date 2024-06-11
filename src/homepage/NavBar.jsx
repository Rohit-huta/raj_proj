import React, {useState} from 'react'


import Logo from '../assets/logo_lamia.png'

const NavBar = () => {
  const [clicked, setClicked] = useState(false)

  const toggleAcc = () => {
    setClicked(!clicked)
  }
  return (
    <nav className='nav flex justify-between items-center'>
        <img src={Logo} className='logo'/>

        {/* navitems */}
        <div>
          <ul className='menus flex list-none justify-between '>
            <li className='text-bold text-blue underline'>Home</li>
            <li className='position-relative'>
              <p className='text-bold cursor-pointer' onClick={() => toggleAcc()}>Services</p>

            {clicked && (  <div className='card-nav drop-down'>
                  <p className='text-1xl'>Tax</p>
                  <hr />
                  <p className='text-1xl'>Accounting</p>
                  <hr />
                  <p className='text-1xl'>Business Consulting & advisoring for tax</p>
              </div>)}
            </li>
            <li className='text-bold'>Industries</li>
            <li className='text-bold'>About Us</li>
          </ul>
        </div>

        <div className='flex-col items-end '>
          {/* call us */}
          <div className='flex'>
            <i class="fa-solid fa-phone mr-1"></i>
            <p className='text-sm'>Call us: +1 412-760-5408</p>
          </div>
          
          {/* email */}
          <div className='flex'>
            <i class="fa-regular fa-envelope mr-1"></i>
            <p className='text-sm'>info@lamaiacpa.com</p>
          </div>

          {/* some text */}
          <div className='flex'>
            <i class="fa-regular fa-circle"></i>
            <p className='text-sm'>Secure Upload files to Lamia CPA</p>
          </div>
         
        </div>

    </nav>
  )
}

export default NavBar