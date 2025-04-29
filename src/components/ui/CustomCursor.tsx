
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handlePointerCheck = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      const clickable = hoveredElement?.closest('a, button, [role="button"], input, select, textarea, label');
      setIsPointer(!!clickable);
    };
    
    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);
    
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousemove', handlePointerCheck);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousemove', handlePointerCheck);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [position.x, position.y]);

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-50 rounded-full bg-forest mix-blend-difference hidden md:block"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isActive ? 0.5 : 1,
        }}
        transition={{ type: "spring", damping: 50, stiffness: 500 }}
        style={{ 
          width: 8, 
          height: 8, 
        }}
      />
      <motion.div
        className={`fixed pointer-events-none z-40 border rounded-full hidden md:block ${isPointer ? 'border-forest' : 'border-white/50 mix-blend-difference'}`}
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isActive ? 1.5 : isPointer ? 1.5 : 1,
          opacity: isActive || isPointer ? 0.5 : 0.15,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.8 }}
        style={{ 
          width: 32, 
          height: 32, 
        }}
      />
    </>
  );
};

export default CustomCursor;
