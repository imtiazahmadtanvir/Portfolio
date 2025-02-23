/* eslint-disable no-undef */
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import profile from "../assets/Image/imtiaz.jpg";
import { motion } from "framer-motion";

// Import the CV PDF file
import cvFile from "../assets/Image/Resume.pdf";

const Banner = () => {
  return (
    <div className="relative bg-black text-white min-h-screen flex items-center overflow-hidden">
      {/* Moving Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-green-300 via-black to-green-400 opacity-20"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      ></motion.div>

      <div className="flex flex-col lg:flex-row justify-between items-center px-8 lg:w-7/12 mx-auto relative z-10">
        {/* Left Content */}
        <motion.div
          className="text-center lg:text-left lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-lg text-green-400">Creative Web Developer</p>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Hello, I'm{" "}
            <span className="text-green-500">Imtiaz Tanvir</span>
          </h1>
          <p className="text-lg">
            Crafting innovative digital solutions with clean, maintainable code
            and user-centric design.
          </p>
          <motion.button
            className="mt-6 mx-auto lg:mx-0 flex items-center bg-green-500 px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <AiOutlineDownload className="mr-2" />
            {/* Download CV Button */}
            <a href={cvFile} download="Imtiaz_Tanvir_Resume.pdf">
              Download CV
            </a>
          </motion.button>

          {/* Social Media Icons */}
          <motion.div
            className="flex gap-6 mt-8 justify-center lg:justify-start text-green-500 text-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <a
              href="https://www.linkedin.com/in/imtiaz-tanveer07" // Replace with your LinkedIn profile
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-green-600 cursor-pointer" />
            </a>
            <a
              href="https://github.com/imtiazahmadtanvir" // Replace with your GitHub profile
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-green-600 cursor-pointer" />
            </a>
            <a
              href="https://www.facebook.com/imtiazahmadtanveer07/" // Replace with your Facebook profile
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="hover:text-green-600 cursor-pointer" />
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          className="relative w-80 h-80 mt-8 lg:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Glowing Animated Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-green-500 opacity-60 animate-pulse"
          ></motion.div>

          {/* Profile Image with Border Animation */}
          <motion.div
            className="relative w-full h-full rounded-full overflow-hidden bg-gray-800 border-8 border-green-500 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
