import React from 'react';

const HeroCart = () => {

  const fetchProductById = async (id) => {
    try {
      const response = await fetch(`https://example.com/api/products/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const product = await response.json();
      return product;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };
  
  return (
    <>
      <div className='text-center'>
        <img src="/search.png" alt="Search Icon" className='m-auto w-40 h-8' />
      </div>
      <div className='text-white text-center mt-8'>
        <h1 className='text-3xl md:text-5xl lg:text-6xl'>Loafers Foam X</h1>
        <p className='text-lg md:text-xl lg:text-2xl'>Men</p>
        <p className='text-2xl md:text-3xl lg:text-4xl'>$1400</p>
      </div>
    </>
  );
};

export default HeroCart;
