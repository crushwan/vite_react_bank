import { useState } from 'react';

import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const handleChange = () => {
    setActive(navLinks.title);
    setToggle(!toggle);
  }
  
  return (
    <nav className="w-full flex py-6 justify-between item-center navbar">
      <img src={logo} alt="hoobank"  className="w-[124px] h-[32px]" />

      <ul className='list-none sm:flex hidden justify-end item-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ml-10 ${
              active === nav.title ? "text-white" : "text-dimWhite"
            }`}
            onClick={() => setActive(nav.title)}            
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
          ))}
      </ul>
      
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-0 min-w-[120px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col space-y-5">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"}`}
                onClick={handleChange}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>        

        </div>

      </div>
            
    </nav>
    
  )
}

export default Navbar