/* eslint-disable react/no-unescaped-entities */
"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa"

const ContactInformation = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const contactItems = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "imtiaztanveer07@gmail.com",
      href: "mailto:imtiaztanveer07@gmail.com",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "01888225687",
      href: "tel:+88801888225687",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "01888225687",
      href: "https://wa.me/88801888225687",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Dhaka, Bangladesh",
      href: "#",
    },
  ]

  const formFields = [
    { id: "name", label: "Name", type: "text", placeholder: "Your Name" },
    { id: "email", label: "Email", type: "email", placeholder: "Your Email" },
  ]

  return (
    <div ref={ref} className="py-16 md:py-24 overflow-hidden bg-gray-950">
      <div className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.05)_0,transparent_70%)]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 text-white"
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
          >
            Contact <span className="text-red-500">Me</span>
          </motion.h2>

          <motion.div
            className="mb-8 md:mb-12 max-w-2xl mx-auto text-gray-400 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-base md:text-lg">
              I'm always open to new opportunities and collaborations. Feel free to reach out through any of the
              following channels:
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 md:mb-16">
            {contactItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="bg-gray-900 p-5 rounded-xl border border-gray-800 hover:border-red-900 transition-all duration-300 group shadow-md flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(239, 68, 68, 0.1)",
                }}
              >
                <motion.div
                  className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-gray-800 text-red-500"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(239, 68, 68, 0.2)",
                  }}
                >
                  <item.icon size={20} />
                </motion.div>
                <h3 className="text-lg font-semibold mb-2 text-white">{item.label}</h3>
                <p className="text-red-500 group-hover:text-red-400 transition-colors text-sm md:text-base break-all">
                  {item.value}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            className="bg-gray-900 p-6 md:p-8 rounded-xl border border-gray-800 shadow-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-white text-center">Send Me a Message</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {formFields.map((field) => (
                <div key={field.id} className="space-y-2 text-left">
                  <label htmlFor={field.id} className="block text-sm font-medium text-gray-300">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 bg-gray-800 border border-gray-700 focus:ring-red-500 text-white focus:border-transparent"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
              <div className="space-y-2 md:col-span-2 text-left">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 bg-gray-800 border border-gray-700 focus:ring-red-500 text-white focus:border-transparent"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="md:col-span-2 flex justify-center">
                <motion.button
                  type="submit"
                  className="px-8 py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors w-full sm:w-auto sm:min-w-[200px]"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ContactInformation
