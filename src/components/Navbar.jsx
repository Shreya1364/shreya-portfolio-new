import { useEffect, useState } from "react";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
  ["about", "About"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["certificates", "Certificates"],
  ["achievements", "Achievements"],
  ["contact", "Contact"],
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const current = ["home", ...navLinks.map(([id]) => id)].find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 180 && rect.bottom > 180;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = (id) => {
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" onClick={() => closeMenu("home")} className="flex items-center gap-2.5 font-semibold tracking-tight text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300"><Code2 size={19} /></span>
          <span>Shreya<span className="text-violet-300">.dev</span></span>
        </a>
        <div className="hidden items-center gap-5 lg:flex">
          {navLinks.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => closeMenu(id)} className={`text-sm transition ${activeSection === id ? "text-violet-300" : "text-slate-400 hover:text-white"}`}>{label}</a>)}
          <a href="/Shreya_Jadhav_Resume.pdf" download className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-500">Resume ↓</a>
        </div>
        <button aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} className="rounded-lg border border-slate-700 p-2 text-slate-200 lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {isOpen && <div className="border-t border-white/[0.06] bg-slate-950 px-5 py-4 lg:hidden">
        <div className="mx-auto flex max-w-7xl flex-col gap-1">
          {navLinks.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => closeMenu(id)} className={`rounded-lg px-3 py-3 text-sm ${activeSection === id ? "bg-violet-500/10 text-violet-300" : "text-slate-300 hover:bg-slate-900"}`}>{label}</a>)}
          <a href="/Shreya_Jadhav_Resume.pdf" download className="mt-2 rounded-lg bg-violet-600 px-4 py-3 text-center text-sm font-semibold text-white">Download Resume</a>
        </div>
      </div>}
    </nav>
  );
}
export default Navbar;
