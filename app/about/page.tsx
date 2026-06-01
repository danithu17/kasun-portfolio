'use client';
import GlowWrapper from '@/components/GlowWrapper';
import FadeIn from '@/components/FadeIn';

export default function About() {
  return (
    <GlowWrapper>
      <FadeIn>
        <section className="px-10 max-w-4xl mx-auto min-h-[60vh] flex flex-col justify-center">
          <h1 className="text-7xl font-black uppercase mb-10 tracking-tighter">About Me</h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            I am a professional cinematic editor based in Colombo, crafting visual stories that bridge the gap between art and technology.
          </p>
        </section>
      </FadeIn>
    </GlowWrapper>
  );
}