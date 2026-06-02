'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const servicesRef = useRef<HTMLElement | null>(null);

  return (
    <main 
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
      style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as React.CSSProperties}
      className="relative min-h-screen bg-black overflow-x-hidden text-white transition-colors duration-500"
    >
      {/* Radial Gradient Background */}
      <style jsx global>{`
        main { 
          background: radial-gradient(circle 500px at var(--x) var(--y), #111, #000); 
        }
      `}</style>

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center p-4 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-6xl md:text-[12vw] font-black uppercase leading-none tracking-tighter">Blur Kasun</h1>
          <p className="text-blue-500 font-mono tracking-[0.3em] md:tracking-[0.8em] mt-4 text-xs md:text-sm uppercase">Video Editor & Colorist</p>
        </motion.div>
        
        {/* Scroll indicator - clickable to scroll to Services */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }} 
          className="absolute bottom-10 text-[10px] text-gray-600 uppercase tracking-widest cursor-pointer"
          role="button"
          tabIndex={0}
          onClick={() => servicesRef.current?.scrollIntoView({ behavior: 'smooth' })}
          onKeyDown={(e: any) => { if (e.key === 'Enter' || e.key === ' ') { servicesRef.current?.scrollIntoView({ behavior: 'smooth' }); } }}
        >
          Scroll to explore
        </motion.div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">
        <h2 className="text-gray-500 text-[10px] uppercase tracking-widest mb-12 text-center">Services Offered</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {['Cinematic Edits', 'Color Grading', 'Sound Design'].map((service, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5, borderColor: '#3b82f6' }} 
              className="p-8 bg-[#111]/80 border border-[#222] rounded-xl backdrop-blur-md transition-colors"
            >
              <h3 className="text-lg font-bold mb-3">{service}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">Professional grade editing techniques tailored for high-end cinematic output.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-20 px-6 border-t border-white/5 text-center">
        <p className="text-gray-600 font-mono text-[10px] tracking-widest">© 2026 BLUR KASUN STUDIO</p>
      </footer>
    </main>
  );
}