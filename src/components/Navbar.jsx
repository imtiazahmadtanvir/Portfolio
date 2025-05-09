import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import cvFile from "../assets/Image/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.nav
      className="top-0 bg-gradient-to-r from-black via-gray-900 to-black text-white py-4 px-5 lg:px-12 lg:py-2 z-50 shadow-lg"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="md:px-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="text-3xl font-bold text-green-500 hover:text-green-400 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Imtiaz.
        </motion.div>

        {/* Menu Icon for Mobile */}
        <motion.div
          className="lg:hidden text-2xl cursor-pointer"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </motion.div>

        {/* Menu */}
        <ul
          className={`flex flex-col lg:flex-row lg:space-x-8 lg:justify-center lg:static absolute top-16 left-0 w-full bg-black lg:bg-transparent transition-all ${
            menuOpen ? "block" : "hidden lg:flex"
          }`}
        >
          <motion.li
            className="px-4 py-2 text-lg hover:text-green-400 cursor-pointer text-center lg:text-left"
            whileHover={{ scale: 1.1, color: "#22c55e" }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="">Home</a>
          </motion.li>
          <motion.li
            className="px-4 py-2 text-lg hover:text-green-400 cursor-pointer text-center lg:text-left"
            whileHover={{ scale: 1.1, color: "#22c55e" }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="#about">About</a>
          </motion.li>
          <motion.li
            className="px-4 py-2 text-lg hover:text-green-400 cursor-pointer text-center lg:text-left"
            whileHover={{ scale: 1.1, color: "#22c55e" }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="#skills">Skills</a>
          </motion.li>
          <motion.li
            className="px-4 py-2 text-lg hover:text-green-400 cursor-pointer text-center lg:text-left"
            whileHover={{ scale: 1.1, color: "#22c55e" }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="#projects">Projects</a>
          </motion.li>
          <motion.li
            className="px-4 py-2 text-lg hover:text-green-400 cursor-pointer text-center lg:text-left"
            whileHover={{ scale: 1.1, color: "#22c55e" }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="#contact">Contact</a>
          </motion.li>
        </ul>


          <motion.a
            // <AiOutlineDownload className="mr-2" />
          
             href={cvFile} 
            download="Imtiaz_Tanvir_CV.pdf"
            className="hidden  lg:inline-block bg-green-500 text-black px-10 py-2 rounded-full shadow-lg hover:bg-gray-600 hover:text-white transition-transform"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
         Resume  <AiOutlineDownload className="mx-auto " />
          </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
