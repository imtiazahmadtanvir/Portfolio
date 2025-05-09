"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FaGraduationCap, FaSchool, FaUniversity } from "react-icons/fa"

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const educationData = [
    {
      period: "2022 - 2025",
      institution: "Green University of Bangladesh",
      degree: "Bachelor of Science in Computer Science Engineering",
      icon: FaUniversity,
    },
    {
      period: "2018 - 2020",
      institution: "BGC Academy School & College",
      degree: "Higher Secondary Certificates (HSC)",
      icon: FaGraduationCap,
    },
    {
      period: "2014 - 2018",
      institution: "Patiya Model High School",
      degree: "Secondary School Certificates (SSC)",
      icon: FaSchool,
    },
  ]

  return (
    <div ref={ref} className="py-24 overflow-hidden bg-black">
      <div className="px-8 max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl lg:text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          My <span className="text-red-500">Education</span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-900 hidden md:block"></div>

          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="mb-12 md:mb-0 relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center z-10 hidden md:flex">
                  <item.icon className="text-black" />
                </div>

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 p-6 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"} ${
                    index % 2 === 0 ? "md:text-left" : "md:text-right"
                  }`}
                >
                  <motion.div
                    className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800 hover:border-red-900 transition-all duration-300"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(239, 68, 68, 0.1)",
                    }}
                  >
                    <div className="flex items-center mb-2 justify-between">
                      <h3 className="text-xl font-semibold text-red-500">{item.institution}</h3>
                      <span className="text-sm font-medium bg-red-900/50 text-red-300 px-3 py-1 rounded-full">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-gray-400">{item.degree}</p>
                  </motion.div>
                </div>

                {/* Spacer for timeline layout */}
                <div className="w-full md:w-1/2"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra-Curricular Activities */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-center mb-8 text-white">
            Extra-Curricular <span className="text-red-500">Activities</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Programming Contests",
                description: "Participated in various programming contests to enhance problem-solving skills.",
              },
              {
                title: "Hackathons",
                description:
                  "Engaged in web development hackathons to build innovative solutions under time constraints.",
              },
              {
                title: "Treasurer Role",
                description: "Served as Treasurer in college, managing finances for student activities and events.",
              },
            ].map((activity, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-800 hover:border-red-900 transition-all duration-300"
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(239, 68, 68, 0.1)",
                }}
              >
                <h4 className="text-lg font-semibold mb-2 text-red-500">{activity.title}</h4>
                <p className="text-gray-400">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Education
