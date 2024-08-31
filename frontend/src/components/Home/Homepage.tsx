import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './HeroSection';
import Resources from './Resources';
import SubscriptionSection from './SubscriptionSection';
import PlanSection from './PlanSection';
import './Homepage.css'; // Ensure this file contains your custom styles

// Define animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Homepage: React.FC = () => {
  return (
    <motion.div
      className="homepage"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={sectionVariants}>
        <HeroSection />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <Resources />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <SubscriptionSection />
      </motion.div>
      <motion.div variants={sectionVariants}>
        <PlanSection />
      </motion.div>
    </motion.div>
  );
};

export default Homepage;
