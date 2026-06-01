'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <main 
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
      style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as React.CSSProperties}
      className="relative min-h-screen bg-black overflow-x-hidden text-white"
    >
      <style jsx global>{`
        main { background: radial-gradient(circle 600px at var(--x) var(--y), #111, #000); }
      `}</style>

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center p-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-[12vw] font-black uppercase leading-none tracking-tighter">Blur Kasun</h1>
          <p className="text-blue-500 font-mono tracking-[0.5em] mt-2">VIDEO EDITOR & COLORIST</p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {['Cinematic Edits', 'Color Grading', 'Sound Design'].map((service, i) => (
          <motion.div key={i} whileHover={{ y: -10 }} className="p-8 bg-[#1a1a1a]/50 border border-[#333] rounded-2xl backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4">{service}</h3>
            <p className="text-gray-500 text-sm">Professional grade editing techniques tailored for high-end cinematic output.</p>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <footer className="py-20 px-10 border-t border-white/5 text-center">
        <p className="text-gray-500 font-mono">© 2026 BLUR KASUN - PROFESSIONAL EDITING STUDIO</p>
      </footer>
    </main>
  );
}