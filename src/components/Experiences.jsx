import React from "react";
import { EXPERIENCES } from "../constants"; 
import { motion } from "framer-motion";

const ExperienceList = () => {
  return (
    <div className="border-t border-neutral-800 pb-4">
        <motion.h2 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl"
        >
          Expériences | Formations
        </motion.h2>
      {EXPERIENCES.map((experience, index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }} 
            className="w-full lg:w-1/4">
            <p className="mb-2 text-2xl text-medium text-neutral-400">{experience.year}</p>
          </motion.div>
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold">
              {experience.role} - {" "}
              <span className="text-sm text-purple-300">
                {experience.company}
              </span>
            </h6>
            <p className="mb-4 text-neutral-400">{experience.description}</p>
            {experience.technologies && experience.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 bg-neutral-800 text-purple-600 rounded-md font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceList;
