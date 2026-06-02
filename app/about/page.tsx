'use client';
import GlowWrapper from '@/components/GlowWrapper';
import FadeIn from '@/components/FadeIn';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Cinematic Editing', level: 95 },
  { name: 'Color Grading', level: 90 },
  { name: 'Sound Design', level: 85 },
  { name: 'Motion Graphics', level: 80 },
];

export default function About() {
  return (
    <GlowWrapper>
      <FadeIn>
        {/* Responsive Padding: පෑඩින් එක මොබයිල් එකට ගැළපෙන සේ සකස් කළා */}
        <section className="px-6 md:px-10 max-w-4xl mx-auto min-h-screen py-12 md:py-20">
          
          {/* Header */}
          <div className="mb-12 md:mb-20 border-l-4 border-blue-500 pl-4 md:pl-6">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">About</h1>
            <p className="text-blue-500 font-mono text-[10px] md:text-sm mt-2">EDITOR_PROFILE_V2026.meta</p>
          </div>

          {/* Bio Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-20">
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              I am a professional cinematic editor based in Colombo, crafting visual stories that bridge the gap between art and technology. 
              My workspace is where pixels become emotions.
            </p>
            <div className="bg-[#1a1a1a] p-5 md:p-6 border border-[#333] rounded-lg">
              <h3 className="text-[9px] text-gray-500 uppercase tracking-widest mb-4">Workspace Stats</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-[10px] text-gray-400 mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-black rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }}
                        className="h-full bg-blue-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { label: 'PROJECTS', val: '50+' },
              { label: 'YEARS EXP', val: '5+' },
              { label: 'CLIENTS', val: '30+' },
              { label: 'RATING', val: '5.0' },
            ].map((stat, i) => (
              <div key={i} className="p-4 border border-[#333] hover:border-blue-500/50 transition-colors">
                <p className="text-[9px] text-gray-500 uppercase tracking-wider">{stat.label}</p>
                <h4 className="text-xl md:text-2xl font-black mt-1">{stat.val}</h4>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>
    </GlowWrapper>
  );
}