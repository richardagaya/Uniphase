import React from 'react';
const Navbar = () => {
  return (
    <nav className="bg-green-200 shadow">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a className="text-gray-800 text-xl font-bold" href="#">
          Uniphase Logo
        </a>
        <div className="hidden md:flex space-x-6">
      <a className="text-white bg-slate-500 rounded-full py-2 px-4" href="#">Home</a>
          <a className="text-white bg-slate-500 rounded-full py-2 px-2" href="#">Features</a>
          <a className="text-white bg-slate-500 rounded-full py-2 px-2" href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
