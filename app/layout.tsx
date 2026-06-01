import './globals.css';
import Cursor from '@/components/Cursor';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white cursor-none"> {/* පරණ cursor එක මුළුමනින්ම hide කරනවා */}
        <Cursor />
        <nav className="fixed top-0 w-full p-8 flex justify-between items-center backdrop-blur-md z-50 border-b border-white/5">
          <a href="/" className="font-black text-xl tracking-tighter hover:text-gray-400 transition-colors">BLUR KASUN</a>
          <div className="flex gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
            <a href="/works" className="hover:text-white transition-colors">Works</a>
            <a href="/about" className="hover:text-white transition-colors">About</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}