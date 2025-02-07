import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div id="about"  className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-16 min-h-screen overflow-hidden">
      {/* Subtle Animated Gradient Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "150% 150%",
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.15) 0%, transparent 70%)",
        }}
      ></motion.div>

      <div  className="relative z-10 px-8 lg:w-8/12 mx-auto">
        <motion.h2
          className="text-4xl lg:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="text-lg space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p>
            Hello! I'm Imtiaz Ahmad Tanvir, a passionate web developer
            dedicated to crafting seamless digital experiences. My programming
            journey began with a simple curiosity about how websites functioned,
            which soon evolved into a full-fledged passion for web development.
            Over the years, I have honed my skills in front-end and back-end
            development, working with modern frameworks like React, Next.js,
            and backend technologies such as Node.js and MongoDB.
          </p>

          <p>
            I thrive on solving complex coding challenges and turning creative
            ideas into reality. I take pride in building dynamic, responsive,
            and user-friendly web applications that leave a lasting impact on
            users. Writing clean and maintainable code is my philosophy, and I
            always seek opportunities to learn and improve.
          </p>

          <p>
            Beyond coding, I have a vibrant personality and love to explore
            creative pursuits. I'm an avid reader and enjoy staying updated
            with the latest trends in the tech world. When I'm not in front of
            my computer, I enjoy connecting with nature, participating in
            outdoor activities, and playing sports. These experiences inspire
            my creative thinking and problem-solving approach.
          </p>

          <p>
            I believe in continuous learning and value collaboration and
            teamwork. Whether I'm leading a project or contributing as a team
            member, I bring a positive and innovative spirit to the table. If
            you're looking for someone who is enthusiastic, driven, and always
            eager to tackle new challenges, I'd be thrilled to connect!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
