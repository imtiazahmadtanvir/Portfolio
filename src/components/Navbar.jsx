import { NavLink, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname.startsWith("/home");

  const getActiveClass = (isActive, isHome) =>
    isActive ? "text-[#9538E2] underline underline-offset-4" : isHome ? "text-white" : "text-black";

  return (
    <div className="w-9/12 mx-auto navbar  top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            {["Home", "Statistics", "Dashboard", "About Us"].map((link) => (
              <li key={link}>
                <NavLink
                  to={`/${link.toLowerCase().replace(" ", "-")}`}
                  className={({ isActive }) => getActiveClass(isActive, isHome)}
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <NavLink to="/" className={`btn btn-ghost text-xl ${isHome ? "text-white" : ""}`}>
          Gadget Heaven
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-8">
          {["Home", "Statistics", "Dashboard", "About Us"].map((link) => (
            <li key={link}>
              <NavLink
                to={`/${link.toLowerCase().replace(" ", "-")}`}
                className={({ isActive }) => getActiveClass(isActive, isHome)}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-4">
        <div className="flex justify-center items-center cursor-pointer w-8 h-8 bg-white rounded-full border border-[#dfdfe1] hover:bg-gray-100">
          <IoCartOutline className="text-lg" />
        </div>
        <div className="flex justify-center items-center cursor-pointer w-8 h-8 bg-white rounded-full border border-[#dfdfe1] hover:bg-gray-100">
          <CiHeart className="text-lg" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
