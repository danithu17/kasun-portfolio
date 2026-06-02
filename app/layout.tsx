import './globals.css';
import Cursor from '@/components/Cursor';
import RenderBar from '@/components/RenderBar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BLUR KASUN | Cinematic Editor',
  description: 'Professional cinematic editor based in Colombo, crafting visual stories.',
  keywords: ['Cinematic Editor', 'Colombo', 'Video Editing', 'Portfolio', 'Kasun'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white cursor-none overflow-x-hidden min-h-screen">
        <RenderBar />
        <Cursor />
        
        {/* Navbar - Responsive & Fixed */}
        <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
          <div className="max-w-[1400px] mx-auto h-[60px] md:h-[80px] px-6 md:px-10 flex justify-between items-center">
            <a href="/" className="font-black text-lg md:text-xl tracking-tighter hover:text-blue-500 transition-colors">
              BLUR KASUN
            </a>
            
            <div className="flex gap-4 md:gap-8 text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
              <a href="/works" className="hover:text-white transition-colors">Works</a>
              <a href="/about" className="hover:text-white transition-colors">About</a>
              <a href="/contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </nav>

        {/* Main Content - Navbar එකට යට නොවී පේන්න pt එක හදාගන්න */}
        <main className="pt-[60px] md:pt-[80px]">
          {children}
        </main>
      </body>
    </html>
  );
}