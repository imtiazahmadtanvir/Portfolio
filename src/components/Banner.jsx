/* eslint-disable react/no-unescaped-entities */
"use client"

import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa"
import { AiOutlineDownload } from "react-icons/ai"
import { motion } from "framer-motion"
import cvFile from "../assets/Image/Resume.pdf"
import { useRef, useEffect } from "react"

const Banner = () => {
  const canvasRef = useRef(null)
  const dragonRef = useRef(null)

  // Dragon animation effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Dragon particle system
    class Particle {
      constructor(x, y, size, color, speedX, speedY) {
        this.x = x
        this.y = y
        this.size = size
        this.color = color
        this.speedX = speedX
        this.speedY = speedY
        this.alpha = 1
        this.gravity = 0.02
        this.friction = 0.99
        this.life = Math.random() * 60 + 120 // Frames of life
      }

      update() {
        this.speedX *= this.friction
        this.speedY *= this.friction
        this.speedY += this.gravity
        this.x += this.speedX
        this.y += this.speedY
        this.alpha = this.life / 180
        this.life--
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.alpha
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    // Dragon class
    class Dragon {
      constructor() {
        this.particles = []
        this.hue = 0
        this.dragonPoints = []
        this.createDragonPath()
        this.lastEmitTime = 0
        this.emitInterval = 5 // Emit every 5 frames
        this.frame = 0
        this.pathPosition = 0
        this.pathSpeed = 0.5
        this.size = Math.min(canvas.width, canvas.height) * 0.8
      }

      createDragonPath() {
        // Create a dragon-like path
        const centerX = canvas.width / 2
        const centerY = canvas.height / 2
        const radius = Math.min(canvas.width, canvas.height) * 0.3

        // Body spiral
        for (let i = 0; i < 20; i++) {
          const angle = i * 0.5
          const x = centerX + Math.cos(angle) * radius * (1 - i / 40)
          const y = centerY + Math.sin(angle) * radius * (1 - i / 40)
          this.dragonPoints.push({ x, y })
        }

        // Head
        const headAngle = 20 * 0.5
        const headX = centerX + Math.cos(headAngle) * radius * 0.5
        const headY = centerY + Math.sin(headAngle) * radius * 0.5

        // Add some head points
        for (let i = 0; i < 5; i++) {
          const angle = headAngle + i * 0.2
          const x = headX + Math.cos(angle) * radius * 0.2
          const y = headY + Math.sin(angle) * radius * 0.2
          this.dragonPoints.push({ x, y })
        }

        // Tail
        for (let i = 0; i < 10; i++) {
          const angle = i * -0.3
          const x = centerX + Math.cos(angle) * radius * (0.7 + i / 20)
          const y = centerY + Math.sin(angle) * radius * (0.7 + i / 20)
          this.dragonPoints.push({ x, y })
        }
      }

      emitParticles(x, y) {
        const particleCount = 3
        const hue = this.hue

        for (let i = 0; i < particleCount; i++) {
          const size = Math.random() * 3 + 1
          const speedX = Math.random() * 2 - 1
          const speedY = Math.random() * 2 - 1

          // Fire colors
          let color
          if (Math.random() < 0.6) {
            color = `hsl(${hue}, 100%, 50%)` // Red/orange
          } else {
            color = `hsl(${hue + 30}, 100%, 70%)` // Yellow
          }

          this.particles.push(new Particle(x, y, size, color, speedX, speedY))
        }

        this.hue = (this.hue + 1) % 30 // Cycle through fire colors (0-30)
      }

      update() {
        this.frame++

        // Move along the path
        this.pathPosition += this.pathSpeed
        if (this.pathPosition >= this.dragonPoints.length) {
          this.pathPosition = 0
        }

        // Get current position on the path
        const index = Math.floor(this.pathPosition)
        const nextIndex = (index + 1) % this.dragonPoints.length

        const currentPoint = this.dragonPoints[index]
        const nextPoint = this.dragonPoints[nextIndex]

        // Interpolate between points
        const fraction = this.pathPosition - index
        const x = currentPoint.x + (nextPoint.x - currentPoint.x) * fraction
        const y = currentPoint.y + (nextPoint.y - currentPoint.y) * fraction

        // Emit particles along the path
        if (this.frame % this.emitInterval === 0) {
          this.emitParticles(x, y)
        }

        // Update existing particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
          this.particles[i].update()

          // Remove dead particles
          if (this.particles[i].life <= 0) {
            this.particles.splice(i, 1)
          }
        }
      }

      draw() {
        // Draw all particles
        this.particles.forEach((particle) => {
          particle.draw()
        })
      }
    }

    const dragon = new Dragon()
    dragonRef.current = dragon

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw dragon
      dragon.update()
      dragon.draw()

      requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      dragon.createDragonPath() // Recalculate dragon path
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Animation variants
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  // Floating animation for profile image
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Dragon animation canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.15)_0,transparent_70%)]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        className="flex flex-col lg:flex-row justify-between items-center px-8 w-full max-w-7xl mx-auto z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content */}
        <motion.div className="text-center lg:text-left lg:w-1/2 space-y-6 z-10" variants={itemVariants}>
          <motion.p className="text-lg text-red-500 font-medium" variants={itemVariants}>
            Web Developer
          </motion.p>

          <motion.h1
            className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white"
            variants={itemVariants}
          >
            Hello, I'm{" "}
            <motion.span
              className="text-red-500 inline-block"
              animate={{
                textShadow: ["0 0 8px rgba(239,68,68,0)", "0 0 15px rgba(239,68,68,0.5)", "0 0 8px rgba(239,68,68,0)"],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              Imtiaz Tanvir
            </motion.span>
          </motion.h1>

          <motion.p className="text-lg text-gray-400 max-w-lg mx-auto lg:mx-0" variants={itemVariants}>
            Passionate web developer skilled in React.js, Next.js, Node.js, and MongoDB. Focused on building
            high-performance, scalable, and user-friendly web applications.
          </motion.p>

          <motion.div variants={itemVariants}>
            <motion.a
              href={cvFile}
              download="Imtiaz_Tanvir_Resume.pdf"
              className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-3 rounded-full shadow-lg hover:from-red-500 hover:to-red-600 transition-all"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(239,68,68,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <AiOutlineDownload className="mr-2 text-xl" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div className="flex gap-8 mt-8 justify-center lg:justify-start" variants={itemVariants}>
            {[
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/imtiaz-tanveer07" },
              { icon: FaGithub, href: "https://github.com/imtiazahmadtanvir" },
              { icon: FaFacebook, href: "https://www.facebook.com/imtiazahmadtanveer07/" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400 text-2xl"
                whileHover={{
                  scale: 1.2,
                  rotate: [0, 10, -10, 0],
                  transition: { duration: 0.5 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Section */}
        <motion.div className="relative w-72 h-72 sm:w-80 sm:h-80 mt-12 lg:mt-0" variants={itemVariants}>
          {/* Animated rings */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-red-500/30"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute inset-0 rounded-full border-4 border-red-500/20"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Profile Image */}
          <motion.div
            className="relative w-full h-full rounded-full overflow-hidden bg-gray-900 border-4 border-white-500 shadow-[0_0_25px_rgba(229,68,68,0.3)]"
            animate={floatingAnimation}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <img src="/src/assets/Image/imtiaz.jpg" alt="Imtiaz Tanvir" className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Banner
