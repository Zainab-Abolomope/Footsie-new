import React from 'react';
// import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
    // const { cart, removeFromCart } = useCart();

    if (cart.length === 0) {
        return (
            <section className='p-[5em]'>
                <div className='flex justify-between items-center mb-[4em]'>
                    <div className='flex flex-col w-[461px] h-[99px] items-center'>
                        <h1 className='font-bold text-2xl'>Your Cart</h1>
                        <p className='hidden lg:flex'>Your cart is empty. Go add some products!</p>
                    </div>
                </div>
                <div className='flex justify-center items-center' style={{ width: "100%", height: "20vh" }}>
                    <Link to="/" className='text-orange-500'>Go to Products</Link>
                </div>
            </section>
        );
    }

    return (
        <section className='p-[5em]'>
            <div className='flex justify-between items-center mb-[4em]'>
                <div className='flex flex-col w-[461px] h-[99px] items-center'>
                    <h1 className='font-bold text-2xl'>Your Cart</h1>
                </div>
            </div>
            <div className='lg:flex flex-col gap-[2em]'>
                {cart.map((item, index) => (
                    <div key={index} className='flex flex-row bg-white rounded-xl p-[1em]'>
                        <img className='w-[10em] h-[10em] rounded-xl' src={item.img} alt='product' />
                        <div className='flex flex-col ml-[1em]'>
                            <h1 className='font-bold'>{item.name}</h1>
                            <h3 className='text-orange-500 text-[1.3em] font-light'>{item.price}</h3>
                            <button 
                                // onClick={() => removeFromCart(item.id)} 
                                className='mt-2 p-2 bg-red-500 text-white rounded'>
                                Remove from Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CartPage;