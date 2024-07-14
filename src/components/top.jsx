import React from 'react';
import { Link } from 'react-router-dom';

const Top = () => {
  return (
    <>
      {/* Image section */}
      <div className='hidden lg:flex justify-center max-w-full max-h-[985px] m-auto'>
        <img src="./footsiee.png" className='w-full h-auto' alt="Footsiee Image" />
      </div>

      {/* Text and Link s */}
      <div className='text-white text-center lg:text-left lg:w-[407px] lg:h-[197px] lg:absolute lg:top-[5em] lg:left-[223px] px-4 lg:px-0'>
        <p className=''>
          Through our collections, we blur the borders between high fashion and high performance. Like our sneakers by Stella McCartney athletic clothing collection - designed to look the part inside and outside of the gym, or some of our adidas Originals lifestyle pieces that can be worn as sports apparel too.
        </p>
        <Link to='/explore' className='block mt-4 '>
          <img src="./explore.png" className='cursor-pointer  hover:scale-105 duration-300' alt="Explore Image" />
        </Link>
      </div>

      {/* Search Image */}
      <div className='hidden lg:block absolute top-[8em] right-[2em]'>
        <img src="./search.png" className='w-[234px] h-[40px]' alt="Search Image" />
      </div>
    </>
  );
};

export default Top;
