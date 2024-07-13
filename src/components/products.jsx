import React from 'react';
import Navbar from './nav';
import Top from './top';

const Product = () => {
  return (
    <main className='hero min-h-[580px] md:min-h-[600px] lg:min-h-[700px]'>
      <Navbar />
      <Top />
    </main>
  );
};

export default Product;
