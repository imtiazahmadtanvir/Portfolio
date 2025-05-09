"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiGit } from "react-icons/si"

const SkillsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const skillData = [
    {
      category: "Frontend",
      icon: <FaReact className="text-4xl text-blue-500" />,
      skills: [
        { name: "React.js", icon: <FaReact />, percentage: 90, color: "#61DAFB" },
        { name: "Next.js", icon: <SiNextdotjs />, percentage: 85, color: "#FFFFFF" },
        { name: "HTML/CSS", icon: null, percentage: 95, color: "#E34F26" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, percentage: 95, color: "#38B2AC" },
      ],
    },
    {
      category: "Backend",
      icon: <FaNodeJs className="text-4xl text-green-600" />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, percentage: 80, color: "#339933" },
        { name: "MongoDB", icon: <SiMongodb />, percentage: 75, color: "#47A248" },
        { name: "Express.js", icon: <SiExpress />, percentage: 70, color: "#FFFFFF" },
      ],
    },
    {
      category: "Tools & Platforms",
      icon: <FaDatabase className="text-4xl text-purple-500" />,
      skills: [
        { name: "Git", icon: <SiGit />, percentage: 85, color: "#F05032" },
        { name: "Firebase", icon: <SiFirebase />, percentage: 80, color: "#FFCA28" },
      ],
    },
  ]

  return (
    <div ref={ref} className="py-24 overflow-hidden bg-gray-950">
      <div className="px-8 max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl lg:text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          My <span className="text-red-500">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillData.map((category, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800 hover:border-red-900 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(239, 68, 68, 0.1)",
              }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-3 rounded-full bg-gray-800">{category.icon}</div>
              </div>
              <h3 className="text-2xl font-semibold mb-8 text-center text-white">{category.category}</h3>
              <div className="grid grid-cols-2 gap-8 justify-items-center">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="w-24 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  >
                    <CircularProgressbar
                      value={skill.percentage}
                      text={`${skill.percentage}%`}
                      styles={buildStyles({
                        textSize: "22px",
                        textColor: "white",
                        pathColor: skill.color,
                        trailColor: "#1f2937",
                        pathTransition: "ease-out",
                        pathTransitionDuration: 1.5,
                      })}
                    />
                    <p className="mt-3 text-lg font-medium text-gray-300">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-center mb-8 text-white">
            <span className="text-red-500">Languages</span>
          </h3>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { language: "English", level: "Proficient", percentage: 85 },
              { language: "Bengali", level: "Native", percentage: 100 },
              { language: "Hindi", level: "Conversational", percentage: 70 },
            ].map((lang, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-800 hover:border-red-900 w-64 transition-all duration-300"
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
