'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import GlowWrapper from '@/components/GlowWrapper';

const projects = [
  { id: 1, title: 'Fall Campaign 2024', duration: 400 },
  { id: 2, title: 'Summer Vibe Edit', duration: 300 },
  { id: 3, title: 'Product Launch Reveal', duration: 350 },
  { id: 4, title: 'Cinematic Reel 2026', duration: 500 },
];

export default function Works() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [selectedClip, setSelectedClip] = useState<number | null>(null);
  const [clipWidth, setClipWidth] = useState(400); 
  const timelineRef = useRef(null);

  return (
    <GlowWrapper>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        className="h-[calc(100vh-80px)] grid grid-cols-[250px_1fr] grid-rows-[1fr_250px] gap-1 p-1 bg-[#121212]"
      >
        
        {/* Project Panel */}
        <div className="row-span-2 bg-[#1e1e1e] border border-[#333] p-2 backdrop-blur-md">
          <h2 className="text-[9px] text-gray-500 uppercase tracking-widest mb-3">Project: Kasun_Assets</h2>
          {projects.map((p) => (
            <button key={p.id} onClick={() => setActiveProject(p)}
              className={`w-full text-left p-2 rounded text-[11px] transition-all ${activeProject.id === p.id ? 'bg-[#333] border-l-2 border-blue-500' : 'text-gray-400 hover:bg-[#333]/50'}`}>
              📁 {p.title}
            </button>
          ))}
        </div>

        {/* Preview Panel */}
        <div className="bg-black border border-[#333] flex items-center justify-center relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>
           <span className="text-gray-600 font-mono text-[10px] uppercase tracking-widest">Program Monitor: {activeProject.title}</span>
        </div>

        {/* Timeline Panel */}
        <div ref={timelineRef} className="bg-[#2a2a2a] border border-[#333] flex flex-col pt-1 overflow-x-auto relative">
          {/* Playhead */}
          <motion.div 
            drag="x" dragConstraints={timelineRef}
            className="absolute top-0 w-[2px] h-full bg-[#4a90e2] z-20 cursor-col-resize shadow-[0_0_10px_#4a90e2]"
          />

          {['V1', 'A1', 'A2'].map((track, i) => (
            <div key={i} className="flex h-12 border-b border-[#333] items-center min-w-[1000px] hover:bg-[#333]/30 transition-colors">
              <div className="w-12 h-full bg-[#333] flex items-center justify-center text-[9px] text-gray-400 border-r border-[#444]">
                {track}
              </div>
              
              {/* Draggable & Resizable Clip */}
              <motion.div 
                onClick={() => setSelectedClip(i)}
                className={`h-7 ml-2 rounded-md relative border flex items-center px-3 cursor-grab 
                bg-[#4a90e2] shadow-[0_0_15px_rgba(74,144,226,0.4)] 
                ${selectedClip === i ? 'border-white' : 'border-white/20'}`}
                style={{ width: clipWidth }}
                drag="x"
                dragConstraints={timelineRef}
                whileHover={{ scale: 1.01 }}
              >
                <span className="text-[9px] font-bold text-white/90 truncate">{activeProject.title}</span>
                
                {/* Resize Handle */}
                <motion.div 
                  className="absolute right-0 w-3 h-full bg-white/20 hover:bg-white/40 cursor-col-resize rounded-r-md"
                  drag="x"
                  dragElastic={0}
                  dragMomentum={false}
                  onDrag={(_, info) => setClipWidth(prev => Math.max(50, prev + info.delta.x))}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </GlowWrapper>
  );
}