import { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {

    useEffect(() => {
        document.title = "Dashboard | Gadget Heaven";
    }, []);
    
    return (
        <div className='bg-[#f7f7f7] pb-24'>
        {/* heading div */}
        <div className='bg-[#9538E2]'>
            <h2 className='text-2xl font-bold text-white pt-8 text-center'>Dashboard</h2>
            <p className='w-1/2 mx-auto text-sm font-light text-white mt-2 text-center pb-10'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

            <div className="flex justify-center items-center w-[50%] gap-4 mx-auto pb-8">
                <NavLink to={"/dashboard/cart"} className={ ({isActive}) => isActive ? "btn bg-white text-[#9538E2] font-bold px-8 rounded-[32px]" : "btn btn-outline border border-white font-bold text-white rounded-[32px] px-8" }>Cart</NavLink>
                <NavLink to={"/dashboard/wishlist"} className={ ({isActive}) => isActive ? "btn bg-white text-[#9538E2] font-bold px-8 rounded-[32px]" : "btn btn-outline border border-white font-bold text-white rounded-[32px] px-8" }>Wishlist</NavLink>
            </div>
        </div>
        <Outlet />
    </div>
    );
};

export default Dashboard;