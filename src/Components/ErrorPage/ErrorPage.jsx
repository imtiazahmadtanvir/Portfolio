import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='h-screen md:w-1/2 mx-auto flex flex-col justify-center items-center space-y-4'>
            <h1 className='text-3xl font-bold text-center'>404 : Page Not Found</h1>
            <p className='text-xl font-medium text-center'>The page you are looking for is not found</p>

            <NavLink to={"/"} className='btn bg-[#9538E2] text-white font-bold rounded-[32px]'>Go Back Home</NavLink>
        </div>
    );
};

export default ErrorPage;