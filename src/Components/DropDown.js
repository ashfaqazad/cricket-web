import React, { useState } from 'react';
import { footballDropdown, basketballDropdown, formula1Dropdown, soccerDropdown } from './MenuItems';
import { Link } from 'react-router-dom';

const DropDown = () => {
  const [basketballDropdownOpen, setBasketballDropdownOpen] = useState(false);
  const [footballDropdownOpen, setFootballDropdownOpen] = useState(false);
  const [soccerDropdownOpen, setSoccerDropdownOpen] = useState(false);
  const [formula1DropdownOpen, setFormula1DropdownOpen] = useState(false);

  
  return (
    <>
    {/* For Large Screen */}
      <ul className={`${basketballDropdownOpen ? 'clicked' : ''} w-40 absolute top-17 text-left list-none`} onClick={() => setBasketballDropdownOpen(!basketballDropdownOpen)}>
        {basketballDropdown.map((item, index) => (
          <li className='bg-white shadow' key={index}>
            <Link to={item.path} className={`${item.cName} block w-full h-full text-black text-decoration-none hover:bg-red-600`} style={{ padding: "16px" }} onClick={() => setBasketballDropdownOpen(false)}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

          {/* For Mobile view */}
          {/* <ul className={`${basketballDropdownOpen ? 'clicked' : ''} w-40 absolute top-17 text-left list-none`} onClick={() => setBasketballDropdownOpen(!basketballDropdownOpen)}>
        {basketballDropdown.map((item, index) => (
          <li className='bg-white shadow' key={index}>
            <Link to={item.path} className={`${item.cName} block w-full h-full text-black text-decoration-none hover:bg-red-600`} style={{ padding: "16px" }} onClick={() => setBasketballDropdownOpen(false)}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul> */}

          {/* For Large screen */}
      <ul className={`${footballDropdownOpen ? 'clicked' : ''} w-40 absolute top-17 text-left list-none`} onClick={() => setFootballDropdownOpen(!footballDropdownOpen)}>
        {footballDropdown.map((item, index) => (
          <li className='bg-white shadow' key={index}>
            <Link to={item.path} className={`${item.cName} block w-full h-full text-black text-decoration-none hover:bg-red-600`} style={{ padding: "16px" }} onClick={() => setFootballDropdownOpen(false)}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <ul className={`${soccerDropdownOpen ? 'clicked' : ''} w-40 relative z-1 top-17 text-left list-none`} onClick={() => setSoccerDropdownOpen(!soccerDropdownOpen)}>
        {soccerDropdown.map((item, index) => (
          <li className='bg-white shadow' key={index}>
            <Link to={item.path} className={`${item.cName} block w-full h-full text-black text-decoration-none hover:bg-red-600`} style={{ padding: "16px" }} onClick={() => setSoccerDropdownOpen(false)}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      
      <ul className={`${formula1DropdownOpen ? 'clicked' : ''} w-40 relative z-1 top-17 text-left list-none`} onClick={() => setFormula1DropdownOpen(!formula1DropdownOpen)}>
        {formula1Dropdown.map((item, index) => (
          <li className='bg-white shadow' key={index}>
            <Link to={item.path} className={`${item.cName} block w-full h-full text-black text-decoration-none hover:bg-red-600`} style={{ padding: "16px" }} onClick={() => setFormula1DropdownOpen(false)}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

    </>
  );
};

export default DropDown;
