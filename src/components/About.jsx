import { motion } from "framer-motion";
import { MapPin, GraduationCap, Code2, BrainCircuit } from "lucide-react";

function About() {
  return (
    <section id="about" className="section-wrap">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <p className="section-kicker">A little about me</p>
        <h2 className="section-title">Curious by nature. <span className="gradient-text">Builder by choice.</span></h2>
      </motion.div>
      <div className="mt-10 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="surface-card p-7 sm:p-9">
          <p className="text-lg leading-8 text-slate-300">
            I'm a Computer Science Engineering graduate who enjoys building applications that solve practical problems. My experience spans software development, mobile app development, databases, and AI-powered features.
          </p>
          <p className="mt-5 leading-8 text-slate-400">
            I've worked with Flutter and Firebase, integrated APIs, explored OCR-based receipt reading, and built CareerPilot AI using Python, Streamlit, Gemini API, and retrieval-augmented generation (RAG) concepts. I like learning by building, testing, and improving real projects.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {["Problem solving", "Quick learner", "Communication", "Continuous learning"].map((item) => <span key={item} className="rounded-full border border-slate-700 bg-slate-800/70 px-3 py-1.5 text-sm text-slate-300">{item}</span>)}
          </div>
        </motion.div>
        <div className="grid gap-5">
          <motion.div initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="surface-card flex gap-4 p-6">
            <div className="icon-tile"><GraduationCap size={22} /></div>
            <div><h3 className="font-semibold text-white">Education</h3><p className="mt-2 text-sm leading-6 text-slate-400">B.Tech, Computer Science & Engineering</p><p className="text-sm text-slate-500">KBPCOE, Satara · 2023–2026</p></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="surface-card flex gap-4 p-6">
            <div className="icon-tile"><Code2 size={22} /></div>
            <div><h3 className="font-semibold text-white">Development interests</h3><p className="mt-2 text-sm leading-6 text-slate-400">Software engineering, mobile apps, APIs, databases and full-stack fundamentals.</p></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="surface-card flex gap-4 p-6">
            <div className="icon-tile"><BrainCircuit size={22} /></div>
            <div><h3 className="font-semibold text-white">AI interests</h3><p className="mt-2 text-sm leading-6 text-slate-400">Generative AI, Gemini API, RAG workflows and practical AI assistants.</p></div>
          </motion.div>
          <div className="flex items-center gap-3 px-2 text-sm text-slate-500"><MapPin size={17} className="text-violet-300" /> Pune, Maharashtra, India</div>
        </div>
      </div>
    </section>
  );
}
export default About;
