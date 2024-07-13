import React from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";

const Footer = () => {
    return (
        <>
            <div className='p-4 lg:p-8 flex flex-col lg:flex-row justify-between items-center'>
                {/* Navigation */}
                <div className='flex flex-wrap gap-5 lg:gap-10'>
                    <Link to='/men'>Men</Link>
                    <Link to='/women'>Women</Link>
                    <Link to='/kids'>Kids</Link>
                    <Link to='/bags'>Bags</Link>
                </div>
                
                {/* Search*/}
                <div className='flex items-center mt-4 lg:mt-0'>
                    <h1 className='text-lg lg:text-xl'>Search</h1>
                    <i><CiSearch className='text-2xl ml-2' /></i>
                </div>
            </div>

            {/* Footer Logo */}
            <div className='text-4xl lg:text-9xl font-bold text-center text-gray-500 tracking-widest p-4'>
                <h1>Footsie</h1>
            </div>
        </>
    );
};

export default Footer;
