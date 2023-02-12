
import React from 'react';
import {motion} from 'framer-motion';
type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div 

    initial={{
        opacity:0,
    }}
    animate={{
        scale:[1,2,2,3,1],
        opacity:[0.1,0.2,0.4,0.8,0.1,1.0],
        borderRadius:["20%","20%","50%","80%","20%"],
    }}
    transition={{
        duration:2.5,
    }}

className="relative flex justify-center  items-center">
    <div className="absolute border border-blue-100 rounded-full mt-52 animate-ping" style={{width:"200px", height:"200px" }}/>
   <div className="rounded-full border-blue-50 absolute mt-52 "style={{width:"300px", height:"300px" }}/>
   <div className="rounded-full border-blue-50 absolute mt-52 "style={{width:"500px", height:"500px" }}/>
   <div className=" rounded-full border-lime-500 opacity-20 absolute mt-52 animate-pulse" style={{width:"650px", height:"650px" }}/>
   <div className="rounded-full border-blue-50 absolute mt-52 "style={{width:"800px", height:"800px" }}/>
</motion.div>
  )
}