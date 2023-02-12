import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typing";

type Props = {
  experiences: Experience[];
};

export default function Experience_front({experiences}: Props) {
  return (

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}

    className="h-auto flex space-y-56 relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center "
    > 
    <h3 className="absolute top-24 uppercase tracking-widest text-teal-400 text-2xl p-10">
            Experience
    </h3>
               

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-100 scrollbar scrollbar-track-teal-800 scrollbar-thumb-teal-200">
        {/* Experience card */}
          {experiences?.map(experience =>(
          <ExperienceCard  key={experience._id} experience ={experience}/>
         ))} 
        {/* Experience card */}
      </div>
    </motion.div>
    
  );
}
