"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa"
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiTypescript,
} from "react-icons/si"

const SkillsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "#38B2AC" },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "Express", icon: <SiExpress />, color: "#FFFFFF" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
      ],
    },
    {
      name: "Tools",
      skills: [{ name: "Git", icon: <FaGitAlt />, color: "#F05032" }],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div ref={ref} className="py-16 md:py-24 overflow-hidden bg-gray-950">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          My <span className="text-red-500">Skills</span>
        </motion.h2>

        {/* Skill Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <motion.h3
                className="text-2xl font-semibold mb-8 text-white inline-block relative"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              >
                {category.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
              </motion.h3>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="relative group"
                    variants={itemVariants}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="bg-gray-900 border border-gray-800 group-hover:border-red-900/50 rounded-lg overflow-hidden transition-all duration-300 h-full">
                      {/* Glowing background effect */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"
                        style={{ backgroundColor: skill.color, filter: "blur(20px)" }}
                      ></div>

                      <div className="p-5 flex flex-col items-center relative z-10">
                        <div
                          className="text-4xl sm:text-5xl mb-3 transition-transform duration-300 group-hover:scale-110"
                          style={{ color: skill.color }}
                        >
                          {skill.icon}
                        </div>
                        <h4 className="text-gray-300 text-sm sm:text-base font-medium text-center">{skill.name}</h4>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Languages Section */}
        <motion.div
          className="mt-16 md:mt-24"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-center mb-8 text-white">
            <span className="text-red-500">Languages</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { language: "English", level: "Proficient", percentage: 85 },
              { language: "Bengali", level: "Native", percentage: 100 },
              { language: "Hindi", level: "Conversational", percentage: 70 },
            ].map((lang, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-800 hover:border-red-900 transition-all duration-300"
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(239, 68, 68, 0.1)",
                }}
              >
                <h4 className="text-lg font-semibold mb-2 text-red-500">{lang.language}</h4>
                <p className="mb-3 text-gray-400">{lang.level}</p>
                <div className="w-full bg-gray-800 rounded-full h-2.5">
                  <motion.div
                    className="bg-red-500 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${lang.percentage}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SkillsSection
