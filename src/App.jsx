// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/product';
import Cart from './pages/cart';
import Checkout from './pages/checkout';
import CartPage from './pages/cartPage';
import Explore from './pages/explore';
import { CartProvider } from './context/cartContext';

import './App.css';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cartAdd" element={<CartPage />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
