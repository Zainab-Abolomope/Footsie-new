import React, { useState } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import useProducts from '../hooks/FetchProdduct';
import DataLoader from '../components/DataLoader/DataLoader';
import Pagination from '../components/Paginate';
import { useCart } from '../context/cartContext';


const Middle = () => {
    const [page, setPage] = useState(1);
    const size = 10;
    const { data, isLoading, error } = useProducts(page, size);
    const [isOpen, setIsOpen] = useState(false);
    const { addToCart } = useCart();

    const toggleDropDown = () => {
        setIsOpen(!isOpen);
    };

    if (isLoading) {
        return <DataLoader />;
    }

    if (error) {
        return (
            <section className='p-[5em]'>
                <div className='flex justify-between items-center mb-[4em]'>
                    <div className='flex flex-col w-[461px] h-[99px] items-center'>
                        <h1 className='font-bold text-2xl'>Trending Now</h1>
                        <p className='hidden lg:flex'>Discover the perfect blend of timeless style, quality and performance. Shop fotsie shoes, sneakers and gear.</p>
                    </div>
                </div>
                <div className='flex justify-center items-center' style={{ width: "100%", height: "20vh" }}>
                    <div>Error Occurred: {error.message}</div>
                </div>
            </section>
        );
    }

    if (!data || !data.items) {
        return (
            <section className='p-[5em]'>
                <div className='flex justify-between items-center mb-[4em]'>
                    <div className='flex flex-col w-[461px] h-[99px] items-center'>
                        <h1 className='font-bold text-2xl'>Trending Now</h1>
                        <p className='hidden lg:flex'>Discover the perfect blend of timeless style, quality and performance. Shop fotsie shoes, sneakers and gear.</p>
                    </div>
                </div>
                <div className='flex justify-center items-center' style={{ width: "100%", height: "20vh" }}>
                    <div>Data Unavailable</div>
                </div>
            </section>
        );
    }

    const products = data.items;
    const totalResults = data.total;

    return (
        <>
            <div className="container mx-auto p-4 id=#explore">
                <h1 className="text-2xl font-bold mb-4">Trending Now </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {products.map((item, index) => (
                        <div key={index} className="border rounded-lg p-4">
                            <img src={`https://api.timbu.cloud/images/${item.photos[0]?.url}`} alt="" className='hover:scale-105 duration-300 w-[24em] h-[15em]' />
                            <div className="text-lg font-semibold">{item.name}</div>
                            <div className="text-lg font-semibold">{item.price}</div>
                            <Link to='/cartAdd'>

                            <button 
                                onClick={() => addToCart(item)}
                                className="mt-2 py-2 px-4 bg-orange-400 text-white rounded-lg"
                            >
                                Add to bag
                            </button>
                            </Link>
                          
                        </div>
                    ))}
                </div>
            </div>
            <Pagination page={page} setPage={setPage} total={totalResults} />
        </>
    );
};

export default Middle;
