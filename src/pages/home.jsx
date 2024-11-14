import Banner from "../Components/Banner/Banner";
import React , { useEffect } from 'react';
import Products from "../Components/Products/Products";


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