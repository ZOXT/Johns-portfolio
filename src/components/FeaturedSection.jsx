import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const FeaturedSection = () => {
  const featuredProjects = [
    {
      title: 'AI-Powered Task Manager',
      description: 'A smart task management application that uses machine learning to prioritize and categorize tasks.',
      technologies: ['React', 'Node.js', 'TensorFlow.js', 'MongoDB'],
      githubLink: 'https://github.com/yourusername/ai-task-manager',
      liveLink: 'https://ai-task-manager.example.com',
      image: 'https://placehold.co/600x400?text=AI+Task+Manager',
    },
    {
      title: 'Blockchain Voting System',
      description: 'A secure and transparent voting system built on blockchain technology for organizational decision-making.',
      technologies: ['Solidity', 'Ethereum', 'Web3.js', 'React'],
      githubLink: 'https://github.com/yourusername/blockchain-voting',
      liveLink: 'https://blockchain-voting.example.com',
      image: 'https://placehold.co/600x400?text=Blockchain+Voting',
    },
    {
      title: 'AR Interior Designer',
      description: 'An augmented reality app that allows users to visualize furniture and decor in their space before purchasing.',
      technologies: ['Unity', 'ARKit', 'C#', 'iOS'],
      githubLink: 'https://github.com/yourusername/ar-interior-designer',
      liveLink: 'https://apps.apple.com/us/app/ar-interior-designer',
      image: 'https://placehold.co/600x400?text=AR+Interior+Designer',
    },
  ];

  return (
    <section className="px-4 md:px-16 py-16 bg-gray-900">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl text-white text-center font-bold mb-12"
      >
        Featured Work
      </motion.h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-[rgba(255,255,255,0.1)] rounded-xl overflow-hidden shadow-lg"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-[rgba(255,255,255,0.2)] text-white px-2 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                  <FaGithub className="inline mr-2" />
                  GitHub
                </a>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                  <FaExternalLinkAlt className="inline mr-2" />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
