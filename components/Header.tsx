import React from 'react';
import {SocialIcon} from 'react-social-icons';
import {motion} from 'framer-motion';
import Link from 'next/link';

type Props = {}

export default function Header({}: Props) {
  return (
    <header  className= "sticky top-0  flex items-start justify-between  mx-auto z-20 max-w-7xl  ms-auto xl:item" > 
        <motion.div 

            initial ={{
                x: -500,
                opacity:0, 
                scale:0.5 
            }}
            animate={{
                x:0,
                opacity:1,
                scale:1
            }}
                
            transition={{
                duration:1.5,
            }} 

            >

            <SocialIcon
                url='https://www.facebook.com/arotiana.randrianasolo.33/'
                fgColor='white'
                bgColor='transparent'
            />
            <SocialIcon
                url='https://github.com/Arotiana137-51'
                fgColor='white'
                bgColor='transparent'
            />
            <SocialIcon
                url='https://www.linkedin.com/in/arotiana-randrianasolo-86a4161a5/'
                fgColor='white'
                bgColor='transparent'
            />
        </motion.div> 

        
        <motion.div 
            initial={{
                x: 500,
                opacity:0,
                scale:0.5,
            }}
            animate={{
                x:0 , 
                opacity:1, 
                scale:1,
            }}
            transition={{duration:1}}
        className="flex flex-row items-center text-white-300 cursor-pointer">
            <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="white"
            bgColor="transparent"
            />
            <p className="uppercase hidden md:inline-flex text-sm  text-white-400"><Link href="#contact">get in touch</Link> </p>
        </motion.div>
        
    </header>
  )
}