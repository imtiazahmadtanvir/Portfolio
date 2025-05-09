"use client"

/* eslint-disable react/no-unescaped-entities */
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const AboutMe = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <div ref={ref} className="relative py-24 overflow-hidden bg-gray-950">
      {/* Animated Background Elements */}
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

        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-red-500/5 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-red-500/5 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        className="relative z-10 px-8 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-white" variants={itemVariants}>
          About <span className="text-red-500">Me</span>
        </motion.h2>

        <motion.div className="text-lg space-y-6 text-gray-400" variants={containerVariants}>
          <motion.p variants={itemVariants}>
            Hello! I'm <span className="text-red-500 font-medium">Imtiaz Ahmad Tanvir</span>, a passionate web developer
            dedicated to crafting seamless digital experiences. My programming journey began with a simple curiosity
            about how websites functioned, which soon evolved into a full-fledged passion for web development. Over the
            years, I have honed my skills in front-end and back-end development, working with modern frameworks like
            React, Next.js, and backend technologies such as Node.js and MongoDB.
          </motion.p>

          <motion.p variants={itemVariants}>
            I thrive on solving complex coding challenges and turning creative ideas into reality. I take pride in
            building dynamic, responsive, and user-friendly web applications that leave a lasting impact on users.
            Writing clean and maintainable code is my philosophy, and I always seek opportunities to learn and improve.
          </motion.p>

          <motion.p variants={itemVariants}>
            Beyond coding, I have a vibrant personality and love to explore creative pursuits. I'm an avid reader and
            enjoy staying updated with the latest trends in the tech world. When I'm not in front of my computer, I
            enjoy connecting with nature, participating in outdoor activities, and playing sports. These experiences
            inspire my creative thinking and problem-solving approach.
          </motion.p>

          <motion.p variants={itemVariants}>
            I believe in continuous learning and value collaboration and teamwork. Whether I'm leading a project or
            contributing as a team member, I bring a positive and innovative spirit to the table. If you're looking for
            someone who is enthusiastic, driven, and always eager to tackle new challenges, I'd be thrilled to connect!
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default AboutMe
