import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className=" bg-gray-200 ">
           
           <div  className="flex justify-between items-center w-11/12  mx-auto py-6">
             {/* Title */}
             <div className="w-11/12 mx-auto">
                <a className="text-2xl font-bold text-gray-800">Gadget Heaven</a>
            </div>
            
            {/* Center Links */}
            <div className="hidden w-11/12 mx-auto lg:flex space-x-8">

                <Link to='/' className="text-gray-700 hover:text-gray-900">Home</Link>
                <Link to='/statistics' className="text-gray-700 hover:text-gray-900">Statistics</Link>
                <Link to='/dashboard' className="text-purple-600 font-semibold hover:text-purple-800">Dashboard</Link>
            </div>

            {/* Right Icons */}
            <div className="flex space-x-4">
                <button className="btn btn-ghost bg-gray-50 btn-circle">
                    <CiHeart className="text-2xl  text-gray-700 hover:text-gray-900" />
                </button>
                <button className="btn btn-ghost bg-gray-50 btn-circle">
                    <CiShoppingCart className="text-2xl text-gray-700 hover:text-gray-900" />
                </button>
            </div>

           </div>
           
        </div>
    );
};

export default Navbar;
