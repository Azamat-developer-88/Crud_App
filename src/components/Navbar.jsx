
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className=" text-2xl font-bold">
          🏠
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/create" className="text-white hover:text-gray-300">
             Add User
          </Link>
          <Link to="/viev" className="text-white hover:text-gray-300">
            Show Users
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
