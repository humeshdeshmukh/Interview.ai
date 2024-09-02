// FloatingBubbles.tsx
import React from 'react';
import './FloatingBubbles.css'; // Ensure you have the CSS file

const FloatingBubbles: React.FC = () => {
  return (
    <div className="floating-bubbles">
      {[...Array(20)].map((_, index) => (
        <div
          key={index}
          className="bubble"
          style={{
            width: `${Math.random() * 60 + 20}px`,
            height: `${Math.random() * 60 + 20}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 20 + 10}s`,
            animationDelay: `${Math.random() * 20}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default FloatingBubbles;
