'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlowWrapper from '@/components/GlowWrapper';
import Image from 'next/image';

const getYouTubeId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const projects = [
  { id: 1, title: 'Fall Campaign 2024', duration: 400, videoUrl: 'https://www.youtube.com/watch?v=oUFJJNQGwhk', images: ['/img1.jpg', '/img2.jpg', '/img3.jpg', '/img4.jpg'] },
  { id: 2, title: 'Summer Vibe Edit', duration: 300, videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', images: ['/img1.jpg', '/img2.jpg', '/img3.jpg', '/img4.jpg'] },
  { id: 3, title: 'Product Launch Reveal', duration: 350, videoUrl: 'https://www.youtube.com/watch?v=kRj-4-p9P9Q', images: ['/img1.jpg', '/img2.jpg', '/img3.jpg', '/img4.jpg'] },
  { id: 4, title: 'Cinematic Reel 2026', duration: 500, videoUrl: 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ', images: ['/img1.jpg', '/img2.jpg', '/img3.jpg', '/img4.jpg'] },
];

export default function Works() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [hoveredProject, setHoveredProject] = useState<any>(null);
  const [selectedClip, setSelectedClip] = useState<number | null>(null);
  const [clipWidth, setClipWidth] = useState(400); 
  const timelineRef = useRef(null);

  return (
    <GlowWrapper>
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        // මෙතනදී MD screen වලට වඩා ලොකු ඒවට Grid එකත්, නැත්නම් Flex column එකත් පාවිච්චි වෙනවා
        className="min-h-[calc(100vh-80px)] flex flex-col md:grid md:grid-cols-[250px_1fr] md:grid-rows-[1fr_250px] gap-1 p-1 bg-[#121212] overflow-hidden"
      >
        
        {/* Project Panel */}
        <div className="md:row-span-2 bg-[#1e1e1e] border border-[#333] p-2 flex flex-col relative z-30">
          <h2 className="text-[9px] text-gray-500 uppercase tracking-widest mb-3">Project: Kasun_Assets</h2>
          <div className="space-y-1">
            {projects.map((p) => (
              <button key={p.id} onClick={() => setActiveProject(p)}
                onMouseEnter={() => setHoveredProject(p)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`w-full text-left p-2 rounded text-[11px] transition-all relative ${activeProject.id === p.id ? 'bg-[#333] border-l-2 border-blue-500' : 'text-gray-400 hover:bg-[#333]/50'}`}>
                📁 {p.title}
              </button>
            ))}
          </div>

          <AnimatePresence>
            {hoveredProject && (
              <motion.div
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
                // මොබයිල් එකේදී preview එක screen එකේ මැද්දට එන්න position වෙනස් කළා
                className="hidden md:grid absolute left-[260px] top-10 w-[300px] h-[200px] bg-[#222] border border-[#444] p-2 grid-cols-2 gap-2 rounded-lg shadow-xl z-50"
              >
                {hoveredProject.images.map((imgSrc: string, i: number) => (
                  <div key={i} className="relative overflow-hidden rounded bg-black">
                    <Image src={imgSrc} alt="Preview" fill className="object-cover opacity-80" />
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-auto p-2 border border-[#333] bg-[#222] hidden md:block">
            <p className="text-[9px] text-gray-500">SELECTED: {activeProject.title}</p>
            <p className="text-[9px] text-blue-400 font-mono">DURATION: {activeProject.duration}f</p>
          </div>
        </div>

        {/* Preview Panel */}
        <div className="bg-black border border-[#333] relative overflow-hidden w-full h-[300px] md:h-full">
          {activeProject.videoUrl ? (
            <iframe
              key={activeProject.id}
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${getYouTubeId(activeProject.videoUrl)}?autoplay=1&rel=0&modestbranding=1`}
              title={activeProject.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-600">No Video Available</div>
          )}
        </div>

        {/* Timeline Panel */}
        <div ref={timelineRef} className="bg-[#2a2a2a] border border-[#333] flex flex-col pt-1 overflow-x-auto relative flex-grow">
          <div className="flex h-6 border-b border-[#333] min-w-[1000px] mb-1 font-mono">
             {[...Array(10)].map((_, i) => (
               <div key={i} className="flex-1 border-r border-[#333]/50 text-[8px] text-gray-500 pl-1">00:00:0{i}</div>
             ))}
          </div>

          <motion.div drag="x" dragConstraints={timelineRef} className="absolute top-6 w-[2px] h-full bg-[#4a90e2] z-20 cursor-col-resize shadow-[0_0_10px_#4a90e2]" />

          {['V1', 'A1', 'A2'].map((track, i) => (
            <div key={i} className="flex h-12 border-b border-[#333] items-center min-w-[1000px] group relative hover:bg-[#333]/30">
              <div className="w-12 h-full bg-[#333] flex items-center justify-center text-[9px] text-gray-400 border-r border-[#444]">{track}</div>
              
              {track !== 'V1' && <div className="absolute opacity-20 ml-12 text-[10px] tracking-[4px] text-blue-300">~~~~~~~~~~~~~~~~~~~~</div>}
              
              <motion.div 
                onClick={() => setSelectedClip(i)}
                className={`h-7 ml-2 rounded-md relative border flex items-center px-3 cursor-grab 
                ${i === 0 ? 'bg-[#4a90e2]' : 'bg-[#e2a04a]'} shadow-lg
                ${selectedClip === i ? 'border-white' : 'border-white/20'}`}
                style={{ width: clipWidth }}
                drag="x" dragConstraints={timelineRef}
                whileHover={{ scale: 1.01 }}
              >
                <span className="text-[9px] font-bold text-white/90 truncate">{activeProject.title}</span>
                <motion.div 
                  className="absolute right-0 w-3 h-full bg-white/20 hover:bg-white/40 cursor-col-resize rounded-r-md"
                  drag="x" dragConstraints={timelineRef}
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