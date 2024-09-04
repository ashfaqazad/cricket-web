import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faWhatsapp, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function SocialIcons() {
  return (
    <>
      <div className=''>
        <div className="text-white flex flex-col justify-center h-screen fixed left-0">
          <ul>

            <li className='flex w-[160px] justify-between items-center mt-1 rounded'>
              <NavLink to="/facebook" className='flex h-[40px] justify-between items-center w-full bg-blue-600 ml-[-120px] hover:ml-[0px] duration-300'>
                Facebook <FontAwesomeIcon size='2x' icon={faSquareFacebook} className='mr-1'/>
              </NavLink>
            </li>

            <li className='flex w-[160px] justify-between items-center mt-1 rounded'>
              <NavLink to="/whatsapp" className='flex h-[40px] justify-between items-center w-full bg-green-600 ml-[-120px] hover:ml-[0px] duration-300'>
                Whatsapp <FontAwesomeIcon size='2x' icon={faWhatsapp} className='mr-1'/>
              </NavLink>
            </li>

            <li className='flex w-[160px] justify-between items-center mt-1 rounded'>
              <NavLink to="/twitter" className='flex h-[40px] justify-between items-center w-full bg-blue-400 ml-[-120px] hover:ml-[0px] duration-300'>
                Twitter <FontAwesomeIcon size='2x' icon={faTwitter} className='mr-1'/>
              </NavLink>
            </li>

            <li className='flex w-[160px] justify-between items-center mt-1'>
              <NavLink to="/instagram" className='flex h-[40px] justify-between items-center w-full bg-pink-600 ml-[-120px] hover:ml-[0px] duration-300'>
                Instagram <FontAwesomeIcon size='2x' icon={faInstagram} className='mr-1'/>
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </>
  );
}
