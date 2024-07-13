import React from 'react';

const products = [
  { image: './brown-shoe.png', title: 'New Arrivals', price: '164.99' },
  { image: './product1.png', title: 'Loafers Foam X', price: '164.99' },
  { image: './product2.png', title: 'Loafers Foam X', price: '164.99' },
  { image: './product3.png', title: 'Loafers Foam X', price: '164.99' },
  { image: './sneaker.png', title: 'Loafers Foam X', price: '164.99' },
  { image: './sneakerr.png', title: 'Loafers Foam X', price: '164.99' },
];

function App() {
  return (
    <div className=" min-h-screen p-4">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Men's Shoes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  ">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img className="h-48 w-full object-cover hover:scale-105 duration-300" src={product.image} alt={product.title} />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{product.title}</h3>
                <p className="text-gray-600">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;