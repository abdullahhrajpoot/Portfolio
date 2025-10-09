import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-12 px-4 md:px-8 lg:px-12 py-10 border-t border-white/10 bg-gradient-to-t from-white/5 to-transparent">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        <div>
          <div className="font-bold text-lg">[AH]</div>
          <div className="text-white/70 mt-2">Thanks for stopping by ✦</div>
        </div>
        <div className="space-y-2">
          <div className="font-semibold">Links</div>
          <div className="flex flex-col gap-1">
            <Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
            <Link href="/projects" className="text-white/80 hover:text-white transition-colors">Projects</Link>
            <Link href="/about" className="text-white/80 hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
        <div className="space-y-2">
          <div className="font-semibold">Elsewhere</div>
          <div className="flex flex-col gap-1">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white transition-colors">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white transition-colors">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white transition-colors">Instagram</a>
            <a href="https://x.com" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white transition-colors">X (Twitter)</a>
            <a href="https://discord.com/users/yourid" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white transition-colors">Discord</a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-6 text-xs text-white/60">© {new Date().getFullYear()} Abdullah Hassan. All rights reserved.</div>
    </footer>
  );
}


