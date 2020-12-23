import { motion } from 'framer-motion';
import React from 'react';
import { Left } from '../animations';
import Header from '../components/Header';
import Hero from '../components/Hero';
import { Page1 } from './Data';


const Home = () => {
   return (

      <motion.div
         initial="out"
         animate="in"
         exit="out"
         variants={Left}
         transition="3"
      >
         <Header />
         <Hero {...Page1} />

      </motion.div>
   )
}

export default Home
