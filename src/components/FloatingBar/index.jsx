import React, { useState, useEffect } from 'react';
import './FloatingBar.css';

const FloatingBar = () => {
  const [position, setPosition] = useState(0);

  const handleMouseMove = (e) => {
    const mouseY = e.clientY;
    setPosition(50 - (mouseY / window.innerHeight) * 100);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="floating-bar" style={{ top: `${position}vh` }}>
      <div className="gradient"></div>
    </div>
  );
};

export default FloatingBar;
