import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const FloatingAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.to(containerRef.current.querySelectorAll('.floating-element'), {
        y: '+=20',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
    >
      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 floating-element">
        <div className="bg-blue-500 rounded-full w-10 h-10 shadow-lg" />
      </div>
      <div className="absolute top-1/3 right-1/4 w-1/4 h-1/4 floating-element">
        <div className="bg-green-500 rounded-full w-8 h-8 shadow-lg" />
      </div>
      <div className="absolute bottom-1/4 left-1/3 w-1/5 h-1/5 floating-element">
        <div className="bg-yellow-500 rounded-full w-6 h-6 shadow-lg" />
      </div>
    </div>
  );
};

export default FloatingAnimation;