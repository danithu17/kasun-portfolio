'use client';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectModal({ isOpen, onClose, title }: { isOpen: boolean, onClose: () => void, title: string }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose} className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />
          {/* Premiere Pro Style Modal */}
          <motion.div 
            initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
            className="premiere-modal bg-[#1e1e1e] border border-[#333] w-full max-w-4xl h-[70vh] flex flex-col shadow-2xl relative"
          >
            {/* Top Bar */}
            <div className="bg-[#2a2a2a] p-2 px-4 flex justify-between items-center text-[10px] text-gray-400 uppercase tracking-widest">
              <span>Program Monitor: {title}</span>
              <button onClick={onClose} className="hover:text-white">CLOSE [X]</button>
            </div>
            
            {/* Video Preview Area */}
            <div className="flex-grow bg-black flex items-center justify-center border-b border-[#333]">
              <span className="text-gray-600 font-mono">Video Preview Placeholder</span>
            </div>

            {/* Timeline Mockup */}
            <div className="h-32 bg-[#2a2a2a] p-4 flex flex-col gap-2">
              <div className="h-4 bg-[#333] rounded w-full"></div>
              <div className="h-4 bg-[#444] rounded w-3/4"></div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}