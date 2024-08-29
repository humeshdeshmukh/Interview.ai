import React from 'react';
import HeroSection from './HeroSection';
import Resources from './Resources';
import SubscriptionSection from './subscriptionSection';
import PlanSection from './PlanSection';
import './Homepage.css'; // Ensure this file contains your custom styles

const Homepage: React.FC = () => {
  return (
    <div className="homepage">
      <HeroSection />
      <Resources />
      <SubscriptionSection />
      <PlanSection />
    </div>
  );
};

export default Homepage;
