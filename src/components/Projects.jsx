import { motion } from "framer-motion";
import { ArrowUpRight, BrainCircuit, ReceiptText, BarChart3 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { PlayCircle } from "lucide-react";

import customerImage from "../assets/Projects/customer-analysis.jpg";
import superStoreImage from "../assets/Projects/super-store-analysis-dashboard.jpg";

const projects = [
  {
    title: "CareerPilot AI",
    category: "Generative AI · Career Tools",
    description: "A career guidance application built with Python and Streamlit. Includes an AI career chat, resume analysis, interview practice, and a local knowledge retrieval workflow using RAG concepts.",
    tech: ["Python", "Gemini API", "Streamlit", "RAG", "JSON"],
    icon: BrainCircuit,
    github: "https://github.com/Shreya1364/CareerPilot-AI",
    featured: true,
  },
  {
  title: "Outstation Expenses Management App",
  category: "Mobile Development · AI Integration",
  description:
    "A Flutter application for managing travel expenses, featuring Firebase authentication, receipt text extraction using ML Kit OCR, Gemini-powered expense categorization, and location-aware features.",
  tech: [
    "Flutter",
    "Dart",
    "Firebase",
    "ML Kit OCR",
    "Gemini API",
    "REST APIs"
  ],
  icon: ReceiptText,
  featured: true,
},
  {
    title: "Customer Shopping Behavior Analysis",
    category: "Data Project",
    description: "Explored customer purchasing patterns using data cleaning, exploratory analysis, and SQL/Python to identify trends and customer behavior.",
    tech: ["SQL", "Python", "Pandas", "EDA"],
    image: customerImage,
    github: "https://github.com/Shreya1364/Customer_Shopping_Behavior_Analysis_Project",
  },
  {
    title: "Super Store Sales Analysis",
    category: "Business Intelligence",
    description: "Built an interactive Power BI dashboard to review sales, profitability, customer trends, and regional performance.",
    tech: ["Power BI", "Excel", "Power Query", "Data Visualization"],
    image: superStoreImage,
    icon: BarChart3,
    github: "https://github.com/Shreya1364/Super_Store_Sales_Analysis_Using_Powerbi",
  },
];

function Projects() {
  return (
    <section id="projects" className="section-wrap">
      <p className="section-kicker">Selected work</p>
      <h2 className="section-title">Projects with <span className="gradient-text">purpose.</span></h2>
      <p className="section-description">A mix of software applications and AI experiments, alongside selected analytics work.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = project.icon || FaGithub;
          return <motion.article key={project.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.07 }} className={`project-card ${project.featured ? "project-featured" : ""}`}>
            {project.image ? <img src={project.image} alt={`${project.title} preview`} className="h-48 w-full object-cover" /> : <div className="project-art"><div className="project-art-icon"><Icon size={32} /></div><span className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-200">Build · Learn · Improve</span></div>}
            <div className="p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-300">{project.category}</p>
              <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{project.description}</p>
              
<div className="mt-6 flex flex-wrap items-center gap-5">
  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 font-semibold text-slate-200 transition hover:text-violet-300"
  >
    {project.featured && project.title === "Outstation Expenses Management App"
      ? "Explore GitHub profile"
      : "View on GitHub"}
    <ArrowUpRight size={17} />
  </a>

  {project.title === "Outstation Expenses Management App" && (
    <a
      href="https://drive.google.com/file/d/10VehxI0LTiYXK3fBShzEdKUd44J4DWAH/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 font-semibold text-slate-200 transition hover:text-violet-300"
    >
      <PlayCircle size={18} />
      Watch Demo
    </a>
  )}
</div>


            </div>
          </motion.article>;
        })}
      </div>
    </section>
  );
}
export default Projects;
