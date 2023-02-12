import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typing";
import { urlFor } from "../sanity";
import Link from "next/link";
import Image from "next/image";
type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-0 uppercase tracking-widest text-teal-400 text-2xl ">
        Projects
      </h3>
      <div className="  static bottom-0 w-full flex overflow-x-scroll overflow-y-hidden z-20 snap-x snap-mandatory mt-100 scrollbar scrollbar-track-teal-800 scrollbar-thumb-teal-200">
        {/* Project listing      */}



        {projects && projects.map((aproject, i) => (
            <div 
            key={aproject._id}
            className="w-screen flex-shrink-0 snap-center  flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={urlFor(aproject.image).url()}
                alt="#"
              />

              <div className=" space-y-10 px-0 md:px-10 max-w-6xl ">
                <h4 className="text-4xl font-semibold text-center">
                  Case study {i + 1} of{projects.length}:
                  <span className="underline decoration-teal-700">
                  <Link href={aproject?.linkToBuild}>
                      {aproject?.title}
                  </Link>
                  </span>
                </h4>
                <div className="flex items-center space-x-2 justify-center">
                  {aproject?.technologies.map((technology) => (
                    <Image
                      width={40}
                      height={40}
                      key={technology._id}
                      src={urlFor(technology?.image).url()}
                      alt="tech"
                    />
                  ))}
                </div>

                <p>{aproject?.summary}</p>
              </div>
            </div>
          ))}

          
      </div>
      <div className="w-full absolute top-[30%] bg-teal-800 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
