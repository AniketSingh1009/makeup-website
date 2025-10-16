import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ScrollAnimationWrapper = ({ 
  children, 
  animation = 'slide-up', 
  delay = 0, 
  threshold = 0.1,
  className = '' 
}) => {
  const [ref, isVisible] = useScrollAnimation(threshold);

  const animationClasses = {
    'slide-up': 'animate-slide-up',
    'slide-down': 'animate-slide-down',
    'slide-left': 'animate-slide-left',
    'slide-right': 'animate-slide-right',
    'fade-in': 'animate-fade-in',
    'scale-in': 'animate-scale-in',
    'bounce': 'animate-bounce-slow',
  };

  return (
    <div
      ref={ref}
      className={`${className} ${
        isVisible ? animationClasses[animation] : 'opacity-0'
      }`}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'both',
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;