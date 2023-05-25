
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Sports Analytics</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
          <svg viewBox="0 0 20 20" fill="currentColor" className="menu w-6 h-6"><path fillRule="evenodd" d="M2 4a2 2 0 012-2h14a2 2 0 112 2H4a2 2 0 01-2-2zm0 6a2 2 0 012-2h14a2 2 0 112 2H4a2 2 0 01-2-2zm0 6a2 2 0 012-2h14a2 2 0 112 2H4a2 2 0 01-2-2z" clipRule="evenodd"></path></svg>
        </button>
      </div>
    </nav>
  )
}

export default Navbar;
