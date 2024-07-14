import React from 'react';
import { useCart } from '../context/cartContext';
import { Link } from 'react-router-dom';

const CartAdd = () => {
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

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
                        {item.photos && item.photos.length > 0 && (
                            <img src={`https://api.timbu.cloud/images/${item.photos[0].url}`} alt="" className='hover:scale-105 duration-300 w-[24em] h-[15em]' />
                        )}
                        <div className='flex flex-col ml-[1em]'>
                            <h1 className='font-bold'>{item.name}</h1>
                            <h3 className='text-orange-500 text-[1.3em] font-light'>{item.price}</h3>
                            <div className='flex items-center'>
                                <button
                                    onClick={() => decreaseQuantity(item.id)}
                                    className='mt-2 p-2 bg-gray-300 text-black rounded'>
                                    -
                                </button>
                                <span className='mx-2'>{item.quantity}</span>
                                <button
                                    onClick={() => increaseQuantity(item.id)}
                                    className='mt-2 p-2 bg-gray-300 text-black rounded'>
                                    +
                                </button>
                            </div>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className='mt-2 p-2 bg-orange-500 text-white rounded'>
                                Remove from Cart
                            </button>
                        </div>

                    </div>
                ))}
            </div>
            
            <Link to='/checkout'>
                            <button className='px-6 lg:px-8 py-4 text-black border border-black cursor-pointer rounded-2xl hover:scale-105 translate-x-6 text-orange-400'>
                                Proceed to Checkout
                            </button>
                        </Link>
        </section>
    );
};

export default CartAdd;
