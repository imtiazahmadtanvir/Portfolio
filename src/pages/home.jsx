// import React from 'react'
import { useEffect } from 'react';
import Products from "../Components/Products/Products";
import Banner from "../Components/Banner/Banner"

const Home = () => {
    useEffect(() => {
        document.title = "Gadget Heaven";
    }, []);
    
    return (
        <div className='bg-[#f7f7f7]'>
            <Banner />
            <Products />
        </div>
    );
};

export default Home;