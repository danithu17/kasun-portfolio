'use client';
import GlowWrapper from '@/components/GlowWrapper';
import FadeIn from '@/components/FadeIn';

export default function Contact() {
  return (
    <GlowWrapper>
      <FadeIn>
        {/* Responsive Padding: මොබයිල් වලදී පෑඩින් අඩු කළා */}
        <section className="px-6 md:px-10 max-w-2xl mx-auto min-h-screen py-12 md:py-20 flex flex-col justify-center">
          
          <div className="mb-10">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Render Project</h1>
            <p className="text-blue-500 font-mono text-xs md:text-sm mt-2">Ready to start something new?</p>
          </div>

          <form className="space-y-6 bg-[#1a1a1a] p-6 md:p-8 border border-[#333] rounded-lg">
            {/* Grid Layout: මොබයිල් එකේදී එක උඩ එක වැටෙන සේ grid-cols-1 කළා */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-[10px] text-gray-500 uppercase tracking-widest block mb-2">Your Name</label>
                <input type="text" className="w-full bg-black border border-[#333] p-3 text-sm focus:border-blue-500 outline-none transition-colors" placeholder="Kasun Perera" />
              </div>
              <div>
                <label className="text-[10px] text-gray-500 uppercase tracking-widest block mb-2">Email</label>
                <input type="email" className="w-full bg-black border border-[#333] p-3 text-sm focus:border-blue-500 outline-none transition-colors" placeholder="kasun@email.com" />
              </div>
            </div>
            
            <div>
              <label className="text-[10px] text-gray-500 uppercase tracking-widest block mb-2">Project Details</label>
              <textarea className="w-full bg-black border border-[#333] p-3 text-sm h-32 focus:border-blue-500 outline-none transition-colors" placeholder="Tell me about your project..." />
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-500 py-4 text-[11px] font-bold uppercase tracking-widest transition-all">
              Initiate Export (Send)
            </button>
          </form>

          {/* Social Links */}
          <div className="mt-12 flex flex-col md:flex-row gap-4 justify-between border-t border-[#333] pt-8">
             {['INSTAGRAM', 'YOUTUBE', 'TWITTER'].map(link => (
               <a key={link} href="#" className="text-[10px] text-center text-gray-500 hover:text-white transition-colors uppercase tracking-widest">
                 {link}
               </a>
             ))}
          </div>
        </section>
      </FadeIn>
    </GlowWrapper>
  );
}