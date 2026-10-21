import { Heart } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-white/[0.07] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center text-sm text-slate-500 sm:flex-row sm:text-left">
        <p>© {new Date().getFullYear()} Shreya Jadhav. All rights reserved.</p>
        <p className="inline-flex items-center gap-1.5">Designed & built with React <Heart size={14} className="text-violet-300" /></p>
      </div>
    </footer>
  );
}
export default Footer;
