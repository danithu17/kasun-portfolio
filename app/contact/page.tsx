'use client';
import GlowWrapper from '@/components/GlowWrapper';
import FadeIn from '@/components/FadeIn';

export default function Contact() {
  return (
    <GlowWrapper>
      <FadeIn>
        <section className="px-10 max-w-4xl mx-auto min-h-[60vh] flex flex-col items-center justify-center text-center">
          <h1 className="text-7xl font-black uppercase mb-10 tracking-tighter">Get In Touch</h1>
          <p className="text-gray-400 text-lg mb-12 max-w-lg leading-relaxed">
            I'm currently available for new cinematic projects. Let's create something meaningful together.
          </p>
          
          <a 
            href="mailto:hello@blurkasun.com" 
            className="group relative text-3xl md:text-5xl font-bold tracking-tight hover:text-white transition-colors"
          >
            hello@blurkasun.com
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
          </a>
          
          <div className="mt-20 flex gap-8 text-sm uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
          </div>
        </section>
      </FadeIn>
    </GlowWrapper>
  );
}