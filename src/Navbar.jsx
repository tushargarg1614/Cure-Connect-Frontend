import { useEffect, useState } from "react";
import {NavLink, Outlet, useLocation, useNavigate} from "react-router-dom"


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  var navigate=useNavigate();
  var location=useLocation();
  useEffect(()=>{
   if(location.pathname=='/home'&& location.hash==""){
     setIsOpen(false);
   }
  },[location])
  
  var hideAnchors=location.pathname=='/home'||location.pathname=='/';

  return (
    <>
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex-shrink-0 text-green-600 text-xl font-bold flex gap-1">
          <img className="h-7 w-7 "  src="../pill.png" alt="" />
            CureConnect
          </div>

          {/* Hamburger (Mobile) */}
          <div className="flex sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-700 hover:text-green-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          <div className="hidden sm:flex sm:space-x-6 items-center">
            <NavLink to="/home"  className="text-gray-700 hover:text-green-600 font-medium">Home</NavLink>
            {hideAnchors&&(<>
            <a href="#process"  className="text-gray-700 hover:text-green-600 font-medium">How It Works</a>
            <a href="#whyUs" className="text-gray-700 hover:text-green-600 font-medium">Why Us</a>
            <a href="#Creator" className="text-gray-700 hover:text-green-600 font-medium">Creator</a>
            <a href="#Contact" className="text-gray-700 hover:text-green-600 font-medium">Contact Us</a>
            </>)}
            
            <div className="ml-4 flex space-x-2">
              <NavLink to="/login" className={(e)=>e.isActive?"bg-green-600 rounded-full text-white":"bg-white  text-green-600 rounded-full"}>
                 <button className="text-sm font-semibold px-4 py-1.5 border border-green-600 rounded-full  ">
              Login 
              </button>
              </NavLink>

              <NavLink to="/signup" className={(e)=>e.isActive?"bg-green-600 text-white rounded-full":"bg-white  text-green-600 rounded-full"}> 
              <button className="text-sm font-semibold px-4 py-1.5 border border-green-600 rounded-full  ">
                Sign Up
              </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="sm:hidden px-4 pb-4">
          <div className="flex flex-col space-y-2">
            <NavLink to='/home'  className="text-gray-700 hover:text-green-600">Home</NavLink>
           
            {hideAnchors && ( 
              <><a href="#process" className="text-gray-700 hover:text-green-600">How It Works</a>
            <a href="#Creator" className="text-gray-700 hover:text-green-600">Creator</a>
            <a href="#Contact" className="text-gray-700 hover:text-green-600">Contact Us</a>
              </>
               )}
            <div className="flex space-x-2 mt-2">
              <NavLink to='/login' className={(e)=>e.isActive?"bg-green-600 rounded-full text-white":"bg-white  text-green-600 rounded-full"}>
              <button className="text-sm font-semibold px-4 py-1.5 border border-green-600 rounded-full ">
                Login
              </button>
              </NavLink>

              <NavLink to='/signup' className={(e)=>e.isActive?"bg-green-600 rounded-full text-white":"bg-white  text-green-600 rounded-full"}>
              <button className="text-sm font-semibold px-4 py-1.5 border border-green-600 rounded-full" >
                Sign Up
              </button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
    <Outlet></Outlet>
                  </>
  );
}
