'use client';
import { useState } from 'react';

export default function GlowWrapper({ children }: { children: React.ReactNode }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <main 
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
      style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as React.CSSProperties}
      className="relative min-h-screen bg-black text-white overflow-x-hidden pt-32"
    >
      <style jsx global>{`
        main { background: radial-gradient(circle 800px at var(--x) var(--y), #1a1a1a, #000); }
      `}</style>
      {children}
    </main>
  );
}