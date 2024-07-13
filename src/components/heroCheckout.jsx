import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";

const HeroCheckout = () => {
    return (
        <>
            <div className='text-4xl lg:text-8xl font-bold text-center mt-6 text-black'>
                <h1>Checkout</h1>
            </div>

            <div className='flex flex-col lg:flex-row items-center p-4 lg:p-12'>
                {/*  image */}
                <div className='lg:mr-12 mb-4 lg:mb-0'>
                    <img src="./product3.png" alt="Product Image" className='w-64 lg:w-auto mx-auto lg:mx-0' />
                </div>
                
                {/*  details */}
                <div className='flex flex-col lg:ml-12'>
                    <h1 className='text-2xl lg:text-4xl mb-2'>Loafers Foam X</h1>
                    
                    {/* Color */}
                    <div className='flex items-center gap-4 mb-4'>
                        <div className='w-10 h-10 rounded-full bg-gray-300'></div>
                        <h1 className='text-lg lg:text-xl'>White</h1>
                    </div>
                    
                    {/* Size and Quantity buttons */}
                    <div className='flex flex-col lg:flex-row gap-4 mb-4'>
                        <button className='flex items-center gap-2'>
                            <h1 className='text-lg lg:text-xl'>Size</h1>
                            <RiArrowDropDownLine className='text-xl' />
                        </button>
                        <button className='flex items-center gap-2'>
                            <h1 className='text-lg lg:text-xl'>Quantity</h1>
                            <RiArrowDropDownLine className='text-xl' />
                        </button>
                    </div>
                    
                    {/*  Size and Quantity */}
                    <div className='flex flex-row gap-4 mb-4'>
                        <div className='px-4 py-2 text-black border border-black'>45ER</div>
                        <div className='px-4 py-2 text-black border border-black'>1 Pair</div>
                    </div>
                    
                    {/* Price */}
                    <div className='ml-auto text-2xl lg:text-4xl font-bold'>
                        $1640
                    </div>
                </div>
            </div>
            
            {/* Divides the page */}
            <hr className='mt-8 mb-6 border-solid border-black' />
        </>
    );
};

export default HeroCheckout;
