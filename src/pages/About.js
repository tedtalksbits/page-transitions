import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import { Page3 } from './Data';
import { motion } from 'framer-motion';
import { Opacity, transition } from '../animations';


const About = () => {
   return (
      <motion.div
         initial="out"
         animate="in"
         exit="out"
         variants={Opacity}
         transition={transition}
      >
         <Header />
         <Hero {...Page3} />
      </motion.div>
   )
}

export default About;
