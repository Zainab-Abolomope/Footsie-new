import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const NextCart = () => {
  return (
    <>
      {/* Main  */}
      <div className='flex flex-col lg:flex-row items-center justify-between lg:py-16 lg:px-16 px-4'>
        {/* Color  */}
        <div className='flex gap-6 mb-4 lg:mb-0 mt-[2em]'>
          <div className=''>
            <div className='bg-gray-200 w-12 h-12 rounded-full'></div>
            <h1>White</h1>
          </div>
          <div className=''>
            <div className='bg-amber-950 w-12 h-12 rounded-full'> </div>
            <h1>Brown</h1>
          </div>
          <div className=''>
            <div className='bg-black w-12 h-12 rounded-full'></div>
            <h1>Black</h1>
          </div>
        </div>

        <div className='w-full lg:w-[407px]'>
          <p className='text-sm lg:text-base'>
            Through our collections, we blur the borders between high fashion and high performance. Like our sneakers by Stella McCartney athletic clothing collection - designed to look the part inside and outside of the gym, or some of our adidas Originals lifestyle pieces that can be worn as sports apparel too.
          </p>
        </div>
      </div>

      {/* Options */}
      <div className='lg:pl-20 px-4'>
        {/* Size and quantity buttons */}
        <div className='flex flex-col lg:flex-row gap-8 mb-8'>
          <button className='flex items-center gap-2'>
            <h1 className='text-sm lg:text-base'>Size</h1>
            <i><RiArrowDropDownLine/></i>
          </button>

          <button className='flex items-center gap-2'>
            <h1 className='text-sm lg:text-base'>Quantity</h1>
            <i><RiArrowDropDownLine/></i>
          </button>
        </div>

        {/* details */}
        <div className='flex flex-col lg:flex-row gap-8'>
          <div className='px-6 lg:px-8 py-4 text-black border border-black mb-4 lg:mb-0'>45ER</div>
          <div className='px-6 lg:px-8 py-4 text-black border border-black mb-4 lg:mb-0'>1 Pair</div>
        </div>

        {/* Proceed to checkout button */}
        <div className='mt-8 lg:mt-20'>
          <Link to='/checkout'>
            <button className='px-6 lg:px-8 py-4 text-black border border-black cursor-pointer rounded-2xl hover:scale-105 translate-x-6 text-orange-400'>
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>

      {/* Divider */}
      <hr className='mt-16 lg:mt-40 border-solid border-black' />
    </>
  );
};

export default NextCart;
