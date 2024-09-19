import React from "react";
import { motion } from "framer-motion";
import skillsInfo from '../skillsInfo';

const Skills = ({ skills }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.9,
      },
    },
  };

  return (
    <div className="px-8 mt-16 bg-gray-900 py-16">
      <section id="skills" className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl text-white text-center font-bold mb-12"
        >
          Skills
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              variants={categoryVariants}
              className="bg-[rgba(255,255,255,0.1)] dark:bg-[rgba(31,41,55,0.1)] p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">{category}</h3>
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center bg-[rgba(255,255,255,0.2)] dark:bg-[rgba(55,65,81,0.3)] px-3 py-2 rounded-full"
                  >
                    <img src={skill.icon} alt={skill.name} className="w-6 h-6 mr-2" />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Skills;
