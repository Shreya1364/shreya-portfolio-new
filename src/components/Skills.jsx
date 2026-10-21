import { motion } from "framer-motion";
import { Braces, Database, Smartphone, BrainCircuit, Wrench } from "lucide-react";

const groups = [
  { title: "Programming", icon: Braces, items: ["Python", "Java", "JavaScript", "SQL", "OOP fundamentals", "Basic DSA"] },
  { title: "Software & Mobile", icon: Smartphone, items: ["React", "HTML & CSS", "Flutter", "Software Development Life Cycle", "REST APIs", "JSON"] },
  { title: "AI & Generative AI", icon: BrainCircuit, items: ["Gemini API", "Prompt design", "Agentic AI", "RAG fundamentals", "Streamlit", "OCR integration", "NLP", "AI application development"] },
  { title: "Databases & Tools", icon: Database, items: ["Firebase", "DBMS", "SQL Server", "MySQL", "Git & GitHub", "VS Code", "Power BI"] },
];

function Skills() {
  return (
    <section id="skills" className="section-wrap">
      <p className="section-kicker">What I work with</p>
      <h2 className="section-title">Technical <span className="gradient-text">toolkit.</span></h2>
      <p className="section-description">A growing set of tools I use across application development, databases, and AI projects.</p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {groups.map((group, index) => {
          const Icon = group.icon;
          return <motion.div key={group.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="surface-card p-6 sm:p-7">
            <div className="mb-5 flex items-center gap-3"><div className="icon-tile"><Icon size={21} /></div><h3 className="text-lg font-semibold text-white">{group.title}</h3></div>
            <div className="flex flex-wrap gap-2">{group.items.map(item => <span key={item} className="skill-chip">{item}</span>)}</div>
          </motion.div>;
        })}
      </div>
      <div className="mt-6 flex items-center gap-3 text-sm text-slate-500"><Wrench size={16} /> Skills reflect my current experience and learning; I'm continuously expanding them through projects.</div>
    </section>
  );
}
export default Skills;
