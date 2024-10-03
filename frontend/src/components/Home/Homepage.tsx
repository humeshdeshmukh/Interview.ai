import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './HeroSection';
import Resources from './Resources';
import SubscriptionSection from './subscriptionSection';
import PlanSection from './PlanSection';
import './Homepage.css'; // Ensure this file contains your custom styles

// Define animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring", stiffness: 80 } },
};

const Homepage: React.FC = () => {
  return (
    <motion.div
      className="homepage"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="homepage-section" variants={sectionVariants}>
        <HeroSection />
      </motion.div>
      <motion.div className="homepage-section" variants={sectionVariants}>
        <Resources />
      </motion.div>
      <motion.div className="homepage-section" variants={sectionVariants}>
        <SubscriptionSection />
      </motion.div>
      <motion.div className="homepage-section" variants={sectionVariants}>
        <PlanSection />
      </motion.div>
    </motion.div>
  );
};

export default Homepage;
