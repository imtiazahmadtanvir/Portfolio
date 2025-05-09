"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs } from "react-icons/fa"
import { SiMongodb, SiExpress, SiFirebase, SiNextdotjs } from "react-icons/si"
import image1 from "../assets/Image/agri.png";
import image3 from "../assets/Image/history.png";
import image2 from "../assets/Image/visa.png"; 

const ProjectsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      name: "AgriTech – AI-Powered Platform",
      image: image1,
      description:
        "A smart agriculture web app offering AI-driven tools for crop recommendations, disease detection, and farming support.",
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "AI Integration"],
      category: "frontend",
      liveLink: "https://agri-tech-vefb.vercel.app",
      githubLink: "https://github.com/imtiazahmadtanvir/agri-tech",
      features: [
        "Developed AI Chatbot using Gemini API with responsive chat UI",
        "Created key UI components: Footer, Partner, Category, and Blog sections",
        "Implemented community features: Farmer Forum, Local Events, and Q&A Forum",
      ],
      icons: [<FaReact key="react" />, <SiNextdotjs key="next" />, <FaNodeJs key="node" />, <SiMongodb key="mongo" />],
    },
    {
      name: "Visa Navigator Portal",
      image: image2,
      description: "A user-friendly portal for checking visa requirements and tracking visa applications.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Firebase"],
      category: "fullstack",
      liveLink: "https://visa-navigator-client-67a8d.web.app/",
      githubLink: "https://github.com/imtiazahmadtanvir/Visa_Navigator_Website",
      features: [
        "Dynamic UI with Firebase authentication",
        "Visa data management with MongoDB integration",
        "Role-based access for applicants and administrators",
      ],
      icons: [
        <FaReact key="react" />,
        <FaNodeJs key="node" />,
        <SiMongodb key="mongo" />,
        <SiExpress key="express" />,
        <SiFirebase key="firebase" />,
      ],
    },
    {
      name: "Historical-Artifacts",
      image: image3,
      description:
        "A MERN stack product discovery platform where users can submit, upvote/downvote, review, and subscribe to premium features.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      category: "fullstack",
      liveLink: "https://historical-artifacts-tra-5ef99.web.app/",
      githubLink: "https://github.com/imtiazahmadtanvir/Historical-Artifacts-Tracker-Web",
      features: [
        "User authentication with Firebase & JWT)",
        "Pre-filled update form with all artifact fields",
        "Browse, add, update, and delete historical artifacts",
      ],
      icons: [<FaReact key="react" />, <FaNodeJs key="node" />, <SiMongodb key="mongo" />, <SiExpress key="express" />],
    },
    //  {
    //   name: "Product Hunt",
    //   image: "/src/assets/Image/product-hunt.png",
    //   description:
    //     "A MERN stack product discovery platform where users can submit, upvote/downvote, review, and subscribe to premium features.",
    //   technologies: ["React", "Node.js", "MongoDB", "Express"],
    //   category: "fullstack",
    //   liveLink: "https://historical-artifacts-tra-5ef99.web.app/",
    //   githubLink: "https://github.com/imtiazahmadtanvir/Historical-Artifacts-Tracker-Web",
    //   features: [
    //     "Authentication with user roles (admin, moderator, user)",
    //     "Upvote/downvote system with real-time updates",
    //     "Payment integration for premium features",
    //   ],
    //   icons: [<FaReact key="react" />, <FaNodeJs key="node" />, <SiMongodb key="mongo" />, <SiExpress key="express" />],
    // },
    
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const filterCategories = [
    { name: "All", value: "all" },
    { name: "Frontend", value: "frontend" },
    { name: "Fullstack", value: "fullstack" },
  ]

  return (
    <div ref={ref} className="py-16 md:py-24 overflow-hidden bg-black">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-8 text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          My <span className="text-red-500">Projects</span>
        </motion.h2>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {filterCategories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveFilter(category.value)}
              className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category.value
                  ? "bg-red-500 text-white"
                  : "bg-gray-900 text-gray-300 hover:bg-gray-800"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-red-900 transition-all duration-300 flex flex-col h-full"
                whileHover={{
                  y: -8,
                  boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.3)",
                }}
              >
                {/* Project Image with Overlay */}
                <div className="relative overflow-hidden h-48 sm:h-52">
                  <motion.img
                    src={project.image}
                    alt={`${project.name} Image`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <div className="flex gap-4">
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-500 text-white p-2 rounded-full"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt size={18} />
                      </motion.a>
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 text-white p-2 rounded-full"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub size={18} />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-white line-clamp-1">{project.name}</h3>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">{project.description}</p>

                  {/* Features */}
                  <ul className="mb-3 space-y-1 flex-grow">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <span className="text-red-500 mr-2 flex-shrink-0">•</span>
                        <span className="text-gray-400 line-clamp-1">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technology Icons */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    {project.icons.map((icon, idx) => (
                      <div key={idx} className="text-gray-400 text-lg">
                        {icon}
                      </div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-red-500 text-white py-1.5 rounded-md text-center font-medium text-sm transition-colors hover:bg-red-600"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-800 text-white py-1.5 rounded-md text-center font-medium text-sm transition-colors hover:bg-gray-700"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default ProjectsSection
