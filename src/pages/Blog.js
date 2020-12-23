import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import { Page2 } from './Data';
import { motion } from 'framer-motion';
import { Bounce } from '../animations';

const Blog = () => {
   return (
      <motion.div
         initial="out"
         animate="in"
         exit="out"
         variants={Bounce}
      >
         <Header />
         <Hero {...Page2} />
      </motion.div>
   )
}

export default Blog;
