import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

const NavBar = () => {
    const location = useLocation();
    const isHome = location.pathname === "/" || location.pathname.startsWith("/home");

    return (
        <div className="w-11/12 2xl:w-3/4 mx-auto navbar mt-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink to={"/"} className={ ({isActive}) => isActive ? 'text-[#9538E2]' : (isHome ? 'text-black' : 'text-black') }>Home</NavLink>
                        <NavLink to={"/statistics"} className={ ({isActive}) => isActive ? 'text-[#9538E2]' : (isHome ? 'text-black' : 'text-black') }>Statistics</NavLink>
                        <NavLink to={"/dashboard"} className={ ({isActive}) => isActive ? 'text-[#9538E2]' : (isHome ? 'text-black' : 'text-black') }>Dashboard</NavLink>
                        <NavLink to={"/about-us"} className={ ({isActive}) => isActive ? 'text-[#9538E2]' : (isHome ? 'text-black' : 'text-black') }>About Us</NavLink>
                    </ul>
                </div>
                <NavLink to={"/"} className={ (isHome) ? 'text-white btn btn-ghost text-xl' : 
                    'btn btn-ghost text-xl' }>Gadget Heaven</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-12">
                    <NavLink to={"/"} className={ ({isActive}) => isActive ? 'text-white underline underline-offset-4' : (isHome ? 'text-white' : 'text-black') }>Home</NavLink>
                    <NavLink to={"/statistics"} className={ ({isActive}) => isActive ? 'text-[#9538E2] underline underline-offset-4' : (isHome ? 'text-white' : 'text-black') }>Statistics</NavLink>
                    <NavLink to={"/dashboard"} className={ ({isActive}) => isActive ? 'text-[#9538E2] underline underline-offset-4' : (isHome ? 'text-white' : 'text-black') }>Dashboard</NavLink>
                    <NavLink to={"/about-us"} className={ ({isActive}) => isActive ? 'text-[#9538E2] underline underline-offset-4' : (isHome ? 'text-white' : 'text-black') }>About Us</NavLink>
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <div className='flex justify-center items-center cursor-pointer w-8 h-8 bg-white rounded-full border border-[#dfdfe1]'>
                    <IoCartOutline className='text-lg' />
                </div>
                <div className='flex justify-center items-center cursor-pointer w-8 h-8 bg-white rounded-full border border-[#dfdfe1]'>
                    <CiHeart className='text-lg' />
                </div>
            </div>
        </div>
    );
};

export default NavBar;