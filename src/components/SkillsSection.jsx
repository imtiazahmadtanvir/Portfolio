import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const skillData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", percentage: 95 },
      { name: "React.js", percentage: 90 },
      { name: "Next.js", percentage: 85 },
      { name: "Tailwind CSS", percentage: 95 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", percentage: 80 },
      { name: "MongoDB", percentage: 75 },
      { name: "Express.js", percentage: 70 },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", percentage: 85 },
      { name: "Firebase", percentage: 80 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <div id="skills"  className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-16">
      <div className="px-8 lg:w-10/12 mx-auto text-center">
        <motion.h2
          className="text-4xl lg:text-5xl font-bold mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {skillData.map((category, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-6">{category.category}</h3>
              <div className="flex flex-wrap justify-center gap-8">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="w-24"
                    whileHover={{ scale: 1.1 }}
                  >
                    <CircularProgressbar
                      value={skill.percentage}
                      text={`${skill.percentage}%`}
                      styles={buildStyles({
                        textColor: "white",
                        pathColor: "#22c55e",
                        trailColor: "#374151",
                      })}
                    />
                    <p className="text-center mt-2 text-lg">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
