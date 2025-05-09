"use client"

import { motion } from "framer-motion"
import { FaLinkedin, FaGithub, FaFacebook, FaHeart } from "react-icons/fa"
import { SiReact } from "react-icons/si"

const Footer = () => {
  return (
    <div className="bg-black text-gray-400 py-10 border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and Description */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-red-500">Imtiaz.</h3>
            <p className="text-gray-500">
              Passionate web developer skilled in React.js, Next.js, Node.js, and MongoDB. Focused on building
              high-performance, scalable, and user-friendly web applications.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-gray-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-500 hover:text-red-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-500 hover:text-red-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-500 hover:text-red-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#education" className="text-gray-500 hover:text-red-400 transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-500 hover:text-red-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-500 hover:text-red-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-gray-300">Connect With Me</h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.linkedin.com/in/imtiaz-tanveer07"
                className="text-gray-500 hover:text-red-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                href="https://github.com/imtiazahmadtanvir"
                className="text-gray-500 hover:text-red-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/imtiazahmadtanveer07/"
                className="text-gray-500 hover:text-red-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebook size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-10 pt-6 border-t border-gray-900 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <p className="flex items-center justify-center gap-2">
            &copy; {new Date().getFullYear()} Imtiaz Ahmad Tanvir. All rights reserved. Made with
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
                color: ["#ef4444", "#f87171", "#ef4444"],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <FaHeart className="text-red-500" />
            </motion.span>
            and
            <SiReact className="text-blue-400" />
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Footer
