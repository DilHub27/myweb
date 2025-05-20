import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Headar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `hover:text-blue-600 ${
      isActive ? " text-[red] font-semibold" : ""
    }`;

  return (
    <header className="bg-gradient-to-r from-[#5353eb] via-[#ed91ed] to-pink shadow-md px-6 py-4  bg-red-300">
      <div className="flex justify-between items-center">
        <h1 className="text-[30px] font-bold text-[#090b0b] font-sans">
          Dilshan
        </h1>

       
        <button
          className="sm:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <nav className="hidden sm:block">
          <ul className="flex space-x-6 text-gray-700 font-medium text-[20px]">
            <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/AboutUs" className={navLinkClass}>About</NavLink></li>
            <li><NavLink to="/Project" className={navLinkClass}>Projects</NavLink></li>
            <li><NavLink to="/Skill" className={navLinkClass}>Skill</NavLink></li>
            <li><NavLink to="/Contact" className={navLinkClass}>Contact</NavLink></li>
          </ul>
        </nav>
      </div>

    
      {isOpen && (
        <nav className="sm:hidden mt-4">
          <ul className="flex flex-col space-y-2 text-slate-950 font-medium text-[18px]">
            <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/AboutUs" className={navLinkClass}>About</NavLink></li>
            <li><NavLink to="/Project" className={navLinkClass}>Projects</NavLink></li>
            <li><NavLink to="/Skill" className={navLinkClass}>Skill</NavLink></li>
            <li><NavLink to="/Contact" className={navLinkClass}>Contact</NavLink></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
