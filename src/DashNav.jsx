import { useState } from "react";
import {NavLink, Outlet} from "react-router-dom"

export default function DashNav({dashboard}) {
 

  return (
    <>
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 text-green-600 text-xl font-bold">
            CureConnect
          </div>
          <div>
            <NavLink to={dashboard} className="bg-green-600 rounded-full text-white text-sm font-semibold h-7 w-24 flex items-center justify-center">
                 <button className="text-sm font-semibold  h-20 w-24  border-green-600 rounded-full  ">
                  Dashboard
              </button>
              </NavLink>

          </div>

          </div>
        </div>
      
    </nav>
    <Outlet/>
    </>
  );
}
