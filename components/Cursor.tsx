'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Cursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isInsideModal, setIsInsideModal] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsInsideModal(!!target.closest('.premiere-modal'));
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[100]"
      animate={{ 
        x: mousePos.x - 16, 
        y: mousePos.y - 16,
        opacity: isInsideModal ? 0 : 1 // Modal එක ඇතුලේදී cursor එක Hide වෙනවා
      }}
      transition={{ type: "spring", damping: 20, stiffness: 300, mass: 0.5 }}
    />
  );
}