"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AiOutlineDownload } from "react-icons/ai"
import cvFile from "../assets/Image/Resume.pdf"
import { FaFire } from "react-icons/fa"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  // Navigation items
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.nav
      className={`top-0 w-full py-4 px-5 lg:px-12 lg:py-3 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md border-b border-red-900/30" : "bg-transparent"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto md:px-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="text-3xl font-bold text-red-500 hover:text-red-400 cursor-pointer flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{
            scale: 1.05,
            textShadow: "0 0 8px rgba(239, 68, 68, 0.6)",
          }}
        >
          <FaFire className="mr-2 text-yellow-500" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-red-500">
            Imtiaz.
          </span>
        </motion.div>

        {/* Menu Icon for Mobile */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-red-500 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 12h16"
                    className="translate-y-1"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16h16"
                    className="translate-y-2"
                  />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:items-center">
          <ul className="flex space-x-8">
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                className="text-lg cursor-pointer text-gray-300 hover:text-red-400 relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a href={item.href}>{item.name}</a>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
              </motion.li>
            ))}
          </ul>

          <motion.a
            href={cvFile}
            download="Imtiaz_Tanvir_CV.pdf"
            className="ml-8 flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2 rounded-full shadow-lg hover:from-red-500 hover:to-red-600 transition-all"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(239, 68, 68, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Resume <AiOutlineDownload className="ml-1" />
          </motion.a>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="lg:hidden fixed inset-0 bg-black/95 z-50 pt-20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="flex flex-col items-center space-y-6 p-4">
                {navItems.map((item, index) => (
                  <motion.li
                    key={index}
                    className="text-xl text-gray-300 hover:text-red-400 cursor-pointer"
                    whileHover={{ scale: 1.1, color: "#f87171" }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => setMenuOpen(false)}
                  >
                    <a href={item.href}>{item.name}</a>
                  </motion.li>
                ))}
                <motion.a
                  href={cvFile}
                  download="Imtiaz_Tanvir_CV.pdf"
                  className="mt-6 flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2 rounded-full shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  Resume <AiOutlineDownload className="ml-1" />
                </motion.a>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
