import React, { useState } from 'react';
import { MenuItems, basketballDropdown, footballDropdown, soccerDropdown, formula1Dropdown } from './MenuItems'; // Importing all dropdown menu items
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [basketballDropdownOpen, setBasketballDropdownOpen] = useState(false);
  const [footballDropdownOpen, setFootballDropdownOpen] = useState(false);
  const [soccerDropdownOpen, setSoccerDropdownOpen] = useState(false); // State for soccer dropdown
  const [formula1DropdownOpen, setFormula1DropdownOpen] = useState(false); // State for formula1 dropdown
  const [open, setOpen] = useState(false);

  const handleBasketballDropdown = () => {
    setBasketballDropdownOpen(!basketballDropdownOpen);
    setFootballDropdownOpen(false);
    setSoccerDropdownOpen(false); // Close soccer dropdown when opening basketball dropdown
    setFormula1DropdownOpen(false); // Close formula1 dropdown when opening basketball dropdown
  };

  const handleFootballDropdown = () => {
    setFootballDropdownOpen(!footballDropdownOpen);
    setBasketballDropdownOpen(false);
    setSoccerDropdownOpen(false); // Close soccer dropdown when opening football dropdown
    setFormula1DropdownOpen(false); // Close formula1 dropdown when opening football dropdown
  };

  const handleSoccerDropdown = () => {
    setSoccerDropdownOpen(!soccerDropdownOpen);
    setBasketballDropdownOpen(false);
    setFootballDropdownOpen(false); // Close football dropdown when opening soccer dropdown
    setFormula1DropdownOpen(false); // Close formula1 dropdown when opening soccer dropdown
  };

  const handleFormula1Dropdown = () => {
    setFormula1DropdownOpen(!formula1DropdownOpen);
    setBasketballDropdownOpen(false);
    setFootballDropdownOpen(false); // Close football dropdown when opening formula1 dropdown
    setSoccerDropdownOpen(false); // Close soccer dropdown when opening formula1 dropdown
  };

  // const handleToggleNavbar = () => {
  //   setOpen(!open)
  // }

  return (

<nav className='bg-red-600'>
  <div className='flex items-center justify-between font-medium'>
    <div className="md:w-auto w-full flex justify-between items-center py-3">

      <NavLink to="/" className='inline-flex ml-2 font-semibold text-xl text-white tracking-tight' >HDStreams</NavLink>

      <div className='lg:hidden flex border items-center text-2xl px-1 mr-1 rounded ' onClick={() => setOpen(!open)}>
        <ion-icon name={open ? "close" : "menu"}></ion-icon>
      </div>
    </div>

    {/* For large screens */}
    <ul className={`hidden lg:flex flex-row text-black font-sans items-center gap-8 font-medium cursor-pointer m-4 duration-500 ${open ? "left-0" : "left-[100%]"}`}>
      {MenuItems.map((item, index) => (
        <li key={index} className="font-medium text-teal-200 hover:text-white" onMouseEnter={item.title === "Basketball" ? handleBasketballDropdown : item.title === "Football" ? handleFootballDropdown : item.title === "Soccer" ? handleSoccerDropdown : item.title === "Formula 1" ? handleFormula1Dropdown : null} onMouseLeave={() => { setBasketballDropdownOpen(false); setFootballDropdownOpen(false); setSoccerDropdownOpen(false); setFormula1DropdownOpen(false); }}>
          <Link to={item.path} className={item.title === "Basketball" || item.title === "Football" ? 'text-orange-400' : 'text-white'}>
            {item.title}
          </Link>
          {item.title === "Basketball" && basketballDropdownOpen && <DropDown menuItems={basketballDropdown} />}
          {item.title === "Football" && footballDropdownOpen && <DropDown menuItems={footballDropdown} />}
          {item.title === "Soccer" && soccerDropdownOpen && <DropDown menuItems={soccerDropdown} />}
          {item.title === "Formula 1" && formula1DropdownOpen && <DropDown menuItems={formula1Dropdown} />}
        </li>
      ))}
    </ul>

    {/* For mobile screens */}
    <ul className={`md:hidden z-20 top-0 mt-[60px] bg-white h-screen fixed w-full flex flex-col items-start py-5 transform transition-transform duration-500 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
      {MenuItems.map((item, index) => (
        <li key={index} className='px-3' onMouseEnter={item.title === "Basketball" ? handleBasketballDropdown : item.title === "Football" ? handleFootballDropdown : item.title === "Soccer" ? handleSoccerDropdown : item.title === "Formula 1" ? handleFormula1Dropdown : null} onMouseLeave={() => { setBasketballDropdownOpen(false); setFootballDropdownOpen(false); setSoccerDropdownOpen(false); setFormula1DropdownOpen(false); }}>
          <Link to={item.path} className={`block px-4 py-2 text-black hover:text-orange-400 ${item.title === "Basketball" || item.title === "Football" ? 'hover:border-b-4 border-orange-400' : 'hover:border-b-4 border-white'}`}>
            {item.title}
          </Link>
          {item.title === "Basketball" && basketballDropdownOpen && <DropDown menuItems={basketballDropdown} />}
          {item.title === "Football" && footballDropdownOpen && <DropDown menuItems={footballDropdown} />}
          {item.title === "Soccer" && soccerDropdownOpen && <DropDown menuItems={soccerDropdown} />}
          {item.title === "Formula 1" && formula1DropdownOpen && <DropDown menuItems={formula1Dropdown} />}
        </li>
      ))}
    </ul>
  </div>
</nav>

  );
};

const DropDown = ({ menuItems }) => {
  return (
    <ul className='w-40 absolute z-1 top-17 text-left list-none'>
      {menuItems.map((item, index) => (
        <li className='bg-white shadow' key={index}>
          <Link to={item.path} className={`${item.cName} block w-full h-full text-black text-decoration-none hover:bg-red-600`} style={{ padding: "16px" }}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
