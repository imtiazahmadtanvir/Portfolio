import { NavLink, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname.startsWith("/home");

  const getActiveClass = (isActive) =>
    isActive
      ? "text-[#9538E2] bg-white underline underline-offset-4"
      : isHome
      ? "text-white"
      : "text-black";

  return (
    <div className="lg:w-9/12 w-10/12 mx-auto navbar top-0 z-50 overflow-visible">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown Menu */}
        <div className="dropdown relative">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-300 rounded-box mt-2 w-52 px-24 shadow z-50"
            style={{ position: 'absolute', right: 10, top: '100%' }}
          >
            <li>
              <NavLink to="/" className={({ isActive }) => getActiveClass(isActive)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/statistics" className={({ isActive }) => getActiveClass(isActive)}>
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard" className={({ isActive }) => getActiveClass(isActive)}>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" className={({ isActive }) => getActiveClass(isActive)}>
                About Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <NavLink
          to="/"
          className={`btn btn-ghost text-xl ${isHome ? "text-white" : "text-black"}`}
        >
          Gadget Heaven
        </NavLink>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-8">
          <li>
            <NavLink to="/" className={({ isActive }) => getActiveClass(isActive)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/statistics" className={({ isActive }) => getActiveClass(isActive)}>
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className={({ isActive }) => getActiveClass(isActive)}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" className={({ isActive }) => getActiveClass(isActive)}>
              About Us
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-4">
        <NavLink to="/dashboard/cart"  className="flex justify-center items-center cursor-pointer w-8 h-8 bg-white rounded-full border border-[#dfdfe1] hover:bg-gray-100">
          <IoCartOutline className="text-lg" />
        </NavLink>
        <NavLink to="/dashboard/wishlist" className="flex justify-center items-center cursor-pointer w-8 h-8 bg-white rounded-full border border-[#dfdfe1] hover:bg-gray-100">
          <CiHeart className="text-lg" />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
