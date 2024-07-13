import React from 'react';
import { Link } from 'react-router-dom';

const Middle = () => {
    const items = [
        {
            title: 'Loafers Foam X',
            price: '$164.99',
            image: './product1.png',
            alt: 'White loafers',
        },
        {
            title: 'Loafers Foam X',
            price: '$164.99',
            image: './product2.png',
            alt: 'Brown loafers',
        },
        {
            title: 'Loafers Foam X',
            price: '$164.99',
            image: './product3.png',
            alt: 'Boots in a case',
        },
    ];

    return (
        <>
            <section className='p-4 md:p-8 lg:p-12'>
                {/* Section header */}
                <div className='flex flex-col md:flex-row justify-between items-center mb-4 md:mb-8'>
                    <div className='mb-4 md:mb-0'>
                        <h3 className='text-lg md:text-xl font-bold'>Trending Now</h3>
                        <p className='text-sm md:text-base'>Discover the perfect blend of timeless style, quality, and performance. Shop Footsie shoes, sneakers, and gear.</p>
                    </div>
                    <div>
                        <h1 className='text-lg md:text-xl font-bold'>Sort by</h1>
                        <i></i> 
                    </div>
                </div>

                {/* Product grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {items.map((item, index) => (
                        <div key={index} className='flex flex-col bg-white rounded-lg overflow-hidden shadow-md'>
                            {/*  image */}
                            <div className='relative'>
                                <img src={item.image} alt={item.alt} className='object-cover w-full h-72 hover:scale-105 duration-300' />
                            </div>
                            {/*  details */}
                            <div className='p-4 bg-gray-900 text-white'>
                                <p className='text-sm'>{item.title}</p>
                                <p className='text-xs mb-2'>Men</p>
                                <h3 className='text-base'>{item.price}</h3>
                            </div>
                            {/* Add to bag button */}

                         


                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Middle;
