import { motion } from "framer-motion";
import image1 from "../assets/Image/vocal.png";
import image2 from "../assets/Image/history.png";
import image3 from "../assets/Image/visa.png"; // Replace with actual Visa Navigator image

const projects = [
  {
    name: "Lingo Bingo",
    image: image1,
    description:
      "A fun and interactive language learning app designed to improve vocabulary through quizzes, real-time tracking, and personalized lessons.",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    liveLink: "https://lingo-bingo-56adb.web.app/",
    githubLink: "https://github.com/imtiazahmadtanvir/Bingo_Vocabulary_Learing_Application",
    challenges: "Implementing dynamic lessons and real-time user progress tracking.",
    improvements: "Adding AI-based personalized lesson recommendations.",
    features: [
      "Interactive quizzes",
      "Real-time progress tracking",
      "Customizable lesson plans",
    ],
  },
  {
    name: "Historical Artifacts Tracker",
    image: image2,
    description:
      "An application that helps users track historical artifacts with cataloging, search, filtering capabilities, and user authentication for secure access.",
    technologies: ["Node.js", "MongoDB", "Express"],
    liveLink: "https://historical-artifacts-tra-5ef99.web.app/",
    githubLink: "https://github.com/imtiazahmadtanvir/Historical-Artifacts-Tracker-Web",
    challenges: "Efficient search and filter for large datasets.",
    improvements: "Enhancing search performance with indexing.",
    features: [
      "Artifact cataloging",
      "Search and filter capabilities",
      "User authentication",
    ],
  },
  {
    name: "Visa Navigator",
    image: image3, // Update the image here to reflect the Visa Navigator project
    description:
      "A platform designed to streamline the visa application process, allowing users to check visa requirements, apply for visas online, and track application statuses.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Firebase"],
    liveLink: "https://visa-navigator-client-67a8d.web.app/",
    githubLink: "https://github.com/imtiazahmadtanvir/Visa_Navigator_Website",
    challenges: "Handling multiple visa requirements and application data.",
    improvements: "Integrating AI for personalized visa recommendations.",
    features: [
      "Visa requirements check",
      "Visa application and tracking",
      "User authentication and role management",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <div id="projects" className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-16">
      <div className="px-8 lg:w-10/12 mx-auto text-center">
        <motion.h2
          className="text-4xl lg:text-5xl font-bold mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <img
                src={project.image}
                alt={`${project.name} Image`}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
              <p className="text-left px-2 mx-auto text-gray-300 mb-4">{project.description}</p>

              <ul className="text-left ml-8 list-disc list-inside text-gray-300 mb-4">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <div className="flex justify-between mx-auto">
                <div>
                  <motion.button
                    className="bg-green-500 text-white px-4 py-2 rounded-md mt-2"
                    onClick={() => window.open(project.liveLink, "_blank")}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    Visit Website
                  </motion.button>
                </div>
                <div>
                  <motion.button
                    className="bg-green-500 text-white px-4 py-2 rounded-md mt-2"
                    onClick={() => window.open(project.githubLink, "_blank")}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    View on GitHub
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
