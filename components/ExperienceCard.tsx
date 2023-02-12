import React from 'react';
import {motion} from 'framer-motion';
 import { Experience } from '../typing'; 
import { urlFor } from '../sanity';
import Image from 'next/image';

 type Props = {
    experience:Experience;
    
    
} 

export default function ExperienceCard({experience}: Props) {

  return (
    <article className='flex  flex-col  rounded-lg items-center 
    space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[800px] snap-center bg-teal-800 p-10 hover:opacity-100 
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
        
        initial={{
            y:-100,
            opacity:0,
        }} 

        transition ={{duration:1.2}}
        whileInView={{opacity:1, y:0}}
        viewport ={{once:true}}
 
        className='w-32 h-32 rounded-full  xl:w-[200px] xl:h-[200px] object-cover  object-center'
        src={urlFor(experience?.companyImage).url()}
        alt='#'>

        </motion.img>

        <div className='px-0 md:px-10'>
            <h4 className="text-4xl font-light">{experience?.jobTitle} </h4>
            <p className='font-bold text-2xl mt-1'>{experience?.company}</p>
        </div>
        <div className='flex space-x-2 my-2'>  

        {/* 
            {experience.technologies.map((tech) =>(
            <img
             key={tech._id}
             className="h-10 w-10 rounded-full"
             src={urlFor(tech.image).url()}
            /> ))} */}


             <Image 
                  key="1"
                  width={40}
                  height={40}
                  className=" rounded-full"
                  src={urlFor(experience["technologies"][0]["image"]).url()} alt={''}                />  

              <Image 
                  key="2"
                  width={40}
                  height={40}
                  className=" rounded-full"
                  src={urlFor(experience["technologies"][1]["image"]).url()} alt={''}                />  

              <Image 
                  key="3"
                  width={40}
                  height={40}
                  className=" rounded-full"
                  src={urlFor(experience["technologies"][2]["image"]).url()} alt={''}                />  


            {experience["technologies"][3]? 
             <Image 
             key="4"
             className="h-10 w-10 rounded-full"
             src={urlFor(experience["technologies"][3]["image"]).url()} alt={''}                /> 
            :<></>}
    

        </div>
            <p
            className='uppercase py-5 text-green-500'>
            {new Date(experience.dateStarted).toDateString()} -{"  "}
            {experience.isCurrentlyWorkingHere?
            "Present":
            new Date(experience.dateEnded).toDateString()}  
             </p>

        <ul className='list-disk space-y-4 ml-5 text-lg'>

        {experience.points.map((point, i)=>(
            <li key={i}> {point}</li>
        ))}
        </ul>

    </article>
  )
}