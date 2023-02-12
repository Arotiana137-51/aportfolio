 import React from 'react';
 import {motion} from 'framer-motion';
import { Skill } from '../typing';
import SkillCard from './SkillCard';


 type Props = {
  skills:Skill[];
 }
 
 export default function Skills({ skills }: Props) {
   
   return (
     <motion.div
     
     initial={{opacity: 0}}
     whileInView={{opacity:1}}
     transition= {{duration:1.5}}
     
     className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-widest text-teal-500 text-2xl'>Skills</h3>
        
        <h3 className='absolute top-36 uppercase tracking-[3px]  text-teal-500 text-sm'>
            Hover over a skill for current profieciency
        </h3>

        <div className='absolute bottom-0 grid grid-cols-4 gap-5'>
       
         {skills?.slice(0,skills.length/2).map(skill =>(<SkillCard key={skill._id} value={skill}/>))} 

         {skills?.slice(skills.length/2, skills.length).map(skill =>(<SkillCard key={skill._id} value={skill} directionLeft/>))} 
        </div> 
    </motion.div>

   )
 }