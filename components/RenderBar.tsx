'use client';
import { motion } from 'framer-motion';

export default function RenderBar() {
  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-blue-500 z-[100] shadow-[0_0_10px_#4a90e2]"
      initial={{ width: '0%' }}
      animate={{ width: '100%' }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
  );
}