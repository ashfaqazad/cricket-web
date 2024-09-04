import React, { useState, useEffect } from 'react';
import { MenuItems, basketballDropdown, footballDropdown, soccerDropdown, formula1Dropdown } from './MenuItems'; // Importing all dropdown menu items
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [basketballDropdownOpen, setBasketballDropdownOpen] = useState(false);
  const [footballDropdownOpen, setFootballDropdownOpen] = useState(false);
  const [soccerDropdownOpen, setSoccerDropdownOpen] = useState(false);
  const [formula1DropdownOpen, setFormula1DropdownOpen] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Function to close the navbar when a navigation link is clicked
    const closeNavbar = () => {
      setOpen(false);
      setBasketballDropdownOpen(false);
      setFootballDropdownOpen(false);
      setSoccerDropdownOpen(false);
      setFormula1DropdownOpen(false);
    };

    // Add event listener to all navigation links
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
      link.addEventListener('click', closeNavbar);
    });

    // Remove event listener when component unmounts
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', closeNavbar);
      });
    };
  }, [basketballDropdownOpen, footballDropdownOpen, soccerDropdownOpen, formula1DropdownOpen]);

  const handleBasketballDropdown = () => {
    setBasketballDropdownOpen(!basketballDropdownOpen);
    setFootballDropdownOpen(false);
    setSoccerDropdownOpen(false);
    setFormula1DropdownOpen(false);
  };

  const handleFootballDropdown = () => {
    setFootballDropdownOpen(!footballDropdownOpen);
    setBasketballDropdownOpen(false);
    setSoccerDropdownOpen(false);
    setFormula1DropdownOpen(false);
  };

  const handleSoccerDropdown = () => {
    setSoccerDropdownOpen(!soccerDropdownOpen);
    setBasketballDropdownOpen(false);
    setFootballDropdownOpen(false);
    setFormula1DropdownOpen(false);
  };

  const handleFormula1Dropdown = () => {
    setFormula1DropdownOpen(!formula1DropdownOpen);
    setBasketballDropdownOpen(false);
    setFootballDropdownOpen(false);
    setSoccerDropdownOpen(false);
  };

  const handleToggleNavbar = () => {
    setOpen(!open);
    setBasketballDropdownOpen(false);
    setFootballDropdownOpen(false);
    setSoccerDropdownOpen(false);
    setFormula1DropdownOpen(false);
  };

  return (
    <nav className='bg-red-600'>
  <div className='flex items-center justify-between font-medium'>
    <div className="md:w-auto w-full flex justify-between items-center py-3">
      <NavLink to="/" className='inline-flex ml-2 font-semibold text-xl text-white tracking-tight'>HDStreams</NavLink>
      <div className='lg:hidden flex border items-center text-2xl text-white px-1 mr-2 rounded' onClick={handleToggleNavbar}>
        <ion-icon name={open ? "close" : "menu"}></ion-icon>
      </div>
    </div>

    {/* For large screens */}
    <ul className={`hidden lg:flex flex-row text-black font-sans items-center gap-8 font-medium cursor-pointer m-4`}>
      {MenuItems && MenuItems.map((item, index) => (
        <li key={index} className="font-medium text-teal-200 hover:text-white"
            onMouseEnter={item.title === "Basketball" ? handleBasketballDropdown :
                         item.title === "Football" ? handleFootballDropdown :
                         item.title === "Soccer" ? handleSoccerDropdown :
                         item.title === "Formula 1" ? handleFormula1Dropdown : null}
            onMouseLeave={() => { 
              setBasketballDropdownOpen(false);
              setFootballDropdownOpen(false);
              setSoccerDropdownOpen(false);
              setFormula1DropdownOpen(false); 
            }}>
          <NavLink to={item.path} className={`nav-link ${item.title === "Basketball" || item.title === "Football" ? 'text-orange-400' : 'text-white'}`}>
            {item.title}
          </NavLink>

          {item.title === "Basketball" && basketballDropdownOpen && <DropDown menuItems={basketballDropdown} closeNavbar={() => setBasketballDropdownOpen(false)} />}
          {item.title === "Football" && footballDropdownOpen && <DropDown menuItems={footballDropdown} closeNavbar={() => setFootballDropdownOpen(false)} />}
          {item.title === "Soccer" && soccerDropdownOpen && <DropDown menuItems={soccerDropdown} closeNavbar={() => setSoccerDropdownOpen(false)} />}
          {item.title === "Formula 1" && formula1DropdownOpen && <DropDown menuItems={formula1Dropdown} closeNavbar={() => setFormula1DropdownOpen(false)} />}

        </li>
      ))}
    </ul>
  


        {/* For mobile screens */}
        <ul className={`md:hidden z-20 top-0 mt-[60px] bg-white h-screen fixed w-full flex flex-col items-start py-5 transform transition-transform duration-500 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
          {MenuItems.map((item, index) => (
            <li key={index} className='px-3'>
              <NavLink
                to={item.path}
                className={`nav-link block px-4 py-2 text-black hover:text-orange-400 ${item.title === "Basketball" || item.title === "Football"}`}
                onTouchStart={() => {
                  if (item.title === "Basketball") {
                    handleBasketballDropdown();
                  } else if (item.title === "Football") {
                    handleFootballDropdown();
                  } else if (item.title === "Soccer") {
                    handleSoccerDropdown();
                  } else if (item.title === "Formula 1") {
                    handleFormula1Dropdown();
                  }
                }}
              >
                {item.title}
                {/* Add the down arrow icon next to the item title */}
                {item.title === "Basketball" &&
                  <ion-icon name="caret-down-outline" style={{ paddingLeft: '10px', cursor: 'pointer'  }}></ion-icon>
                }
                {item.title === "Football" &&
                  <ion-icon name="caret-down-outline" style={{ paddingLeft: '10px', cursor: 'pointer'  }}></ion-icon>
                }
                {item.title === "Soccer" &&
                  <ion-icon name="caret-down-outline" style={{ paddingLeft: '10px', cursor: 'pointer'  }}></ion-icon>
                }
                {item.title === "Formula 1" &&
                  <ion-icon name="caret-down-outline" style={{ paddingLeft: '10px', cursor: 'pointer'  }}></ion-icon>
                }

              </NavLink>
              {item.title === "Basketball" && basketballDropdownOpen && <DropDown menuItems={basketballDropdown} closeNavbar={() => setBasketballDropdownOpen(false)} />}
              {item.title === "Football" && footballDropdownOpen && <DropDown menuItems={footballDropdown} closeNavbar={() => setFootballDropdownOpen(false)} />}
              {item.title === "Soccer" && soccerDropdownOpen && <DropDown menuItems={soccerDropdown} closeNavbar={() => setSoccerDropdownOpen(false)} />}
              {item.title === "Formula 1" && formula1DropdownOpen && <DropDown menuItems={formula1Dropdown} closeNavbar={() => setFormula1DropdownOpen(false)} />}
            </li>
          ))}
        </ul>



      </div>
    </nav>
  );
};

const DropDown = ({ menuItems, closeNavbar }) => {
  const handleClick = () => {
    // Close the navbar when a dropdown menu item is clicked
    closeNavbar();
  };

  return (
    <ul className='w-40 absolute z-1 top-17 text-left list-none'>
      {menuItems.map((item, index) => (
        <li className='bg-white shadow' key={index}>
          <NavLink to={item.path} className={`${item.cName} nav-link block w-full h-full text-black text-decoration-none hover:bg-red-600`} style={{ padding: "16px" }} onClick={handleClick}>
            {item.title}
          </NavLink>

        </li>
      ))}
    </ul>
  );
};

export default Navbar;
