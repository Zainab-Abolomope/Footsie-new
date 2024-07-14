import React from 'react';
import { Link } from 'react-router-dom';
import { CiShoppingCart, CiBatteryFull, CiSearch } from "react-icons/ci";
import { FaSignal, FaWifi } from "react-icons/fa";

const Nav = () => {
  return (
    <>
      {/* Desktop navigation */}
      <div className='hidden lg:flex items-center justify-between p-4'>
        {/* Logo */}
        <img className='w-24' src="./Footsie.png" alt="Footsie Logo" />

        {/* Main navigation  */}
        <div className='flex gap-4 text-white'>
          <Link to='/'>Men</Link>
          <Link to='/'>Women</Link>
          <Link to='/'>Kids</Link>
        </div>

        {/* Cart button */}
        <Link to='/cartAdd'>
          <button className='flex items-center  px-4 py-2 text-white  hover:scale-105 duration-300'>
            <span className='mr-2'>Your Bag</span>
            <CiShoppingCart className='text-2xl' />
          </button>
        </Link>
      </div>

      {/* Mobile */}
      <div className='lg:hidden'>
        {/* Top bar with time, signal, wifi, battery */}
        <div className='flex justify-between items-center p-4 text-white'>
          <div>
            <h1>10:41</h1>
          </div>
          <div className='flex gap-4'>
            <FaSignal />
            <FaWifi />
            <CiBatteryFull />
          </div>
        </div>

        {/* Bottom bar with search and cart icons */}
        <div className='flex justify-between items-center p-4'>
          <div>
            <img src="./new.png" alt="Search bar" />
          </div>
          <div className='flex gap-4 text-white'>
            <CiSearch />
            <Link to='/cart'>
              <CiShoppingCart />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
