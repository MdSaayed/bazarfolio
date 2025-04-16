import React from 'react';
import { Link } from 'react-router-dom';
import { AlignJustify } from "lucide-react";
import useScrollSpy from '../../hooks/useScrollSpy'; 

const DesktopMenu = ({ setMenuOpen, menuItems }) => {
  const sectionIds = menuItems.map(item => item.path.replace('#', ''));
  const activeSection = useScrollSpy(sectionIds, 100); 

  return (
    <div className='flex items-center justify-between text-white py-4 lg:py-6'>
      <div className='flex items-center md:justify-between xl:justify-start w-full xl:w-fit gap-20'>
        <div>
          <Link to="/">LOGO</Link>
        </div>

        <nav className='hidden lg:block border border-white/50 rounded-4xl py-2 px-8'>
          <ul className='flex items-center gap-6'>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.path}
                  className={`px-4 py-2 inline-block rounded-3xl transition ${
                    activeSection === item.path.replace('#', '') ? 'bg-graphite' : ''
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className='items-center hidden xl:flex'>
        <a className="btn-primary" href='#contact'>Start a Project
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              >
              <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.9879 7C19.9919 7 19.996 7 20 7V9.0001H19.9582C15.1626 9.0198 12 12.4251 12 15.5H10C10 12.9999 11.3841 10.6065 13.6159 9.0001H0.5V7.0001H13.6161C11.3842 5.39368 10 3.00012 10 0.5H12C12 3.58118 15.1757 6.9943 19.9879 7Z"
                  fill="#0E0F11"
              />
              </svg>
        </a>                                             
      </div>

      <AlignJustify
        className="block lg:hidden rounded-3xl md:block cursor-pointer"
        onClick={() => setMenuOpen(true)}
      />
    </div>
  );
};

export default DesktopMenu;
