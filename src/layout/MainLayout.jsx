"use client"

import { useState } from "react"

import { useEffect, useRef } from "react"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from "../components/Banner"
import AboutMe from "../components/AboutMe"
import SkillsSection from "../components/SkillsSection"
import ProjectsSection from "../components/ProjectsSection"
import ContactInformation from "../components/ContactInformation"
import Education from "../components/Education"
import { motion, useScroll, useSpring } from "framer-motion"

const MainLayout = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Smooth scroll to section when clicking on nav links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute("href")
      if (href && href.startsWith("#")) {
        e.preventDefault()
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          })
        }
      }
    }

    const anchorLinks = document.querySelectorAll('a[href^="#"]')
    anchorLinks.forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick)
    })

    return () => {
      anchorLinks.forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick)
      })
    }
  }, [])

  // Cursor follower effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cursorRef = useRef(null)

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${mousePosition.x}px`
      cursorRef.current.style.top = `${mousePosition.y}px`
    }
  }, [mousePosition])

  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-200">
      {/* Custom cursor effect (visible only on desktop) */}
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 rounded-full pointer-events-none z-50 hidden md:block mix-blend-difference"
        style={{
          backgroundColor: "rgba(255, 0, 100, 0.5)",
          transform: "translate(-50%, -50%)",
          transition: "transform 0.1s ease-out",
        }}
      />

      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-red-600 z-50 origin-left" style={{ scaleX }} />

      {/* Header Section */}
      <header className="sticky top-0 z-40">
        <NavBar />
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Sections with intersection observer for scroll animations */}
        <section id="home" className="relative">
          <Banner />
        </section>

        <section id="about" className="relative">
          <AboutMe />
        </section>

        <section id="skills" className="relative">
          <SkillsSection />
        </section>

        <section id="education" className="relative">
          <Education />
        </section>

        <section id="projects" className="relative">
          <ProjectsSection />
        </section>

        <section id="contact" className="relative">
          <ContactInformation />
        </section>
      </main>

      {/* Footer Section */}
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default MainLayout
