import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa"; // Importing the icons

const Footer = () => {
  return (
    <div className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-screen-lg mx-auto text-center">
        <motion.p
          className="text-sm lg:text-base mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          &copy; 2025 Imtiaz Ahmad Tanvir. All rights reserved.
        </motion.p>

        <motion.div
          className="flex justify-center space-x-6 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <a
            href="https://www.linkedin.com/in/imtiaz-tanveer07" // Your LinkedIn profile
            className="text-green-500 hover:text-green-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/imtiazahmadtanvir" // Your GitHub profile
            className="text-green-500 hover:text-green-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.facebook.com/imtiazahmadtanveer07/" // Your Facebook profile
            className="text-green-500 hover:text-green-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
