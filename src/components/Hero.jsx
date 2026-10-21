
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/Shreya_Jdv.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden px-6 pb-20 pt-32 sm:pt-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1.25fr_0.75fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-400/10 px-4 py-2 text-sm text-violet-200">
            <Sparkles size={16} />
            Software Development · Generative AI
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Shreya <span className="gradient-text">Jadhav.</span>
          </h1>

          <h2 className="mt-5 max-w-2xl text-2xl font-medium leading-relaxed text-slate-200 sm:text-3xl">
            I build useful software and explore what AI can make possible.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Computer Science Engineering graduate interested in software
            engineering and AI-powered applications. I enjoy turning ideas
            into practical products with Python, Flutter, Firebase, APIs,
            and generative AI.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-500"
            >
              Explore projects <ArrowRight size={18} />
            </a>

            <a
              href="/Shreya_Jadhav_Resume.pdf"
              download="Shreya_Jadhav_Resume.pdf"
              className="rounded-xl border border-slate-700 bg-slate-900/70 px-5 py-3 font-semibold text-slate-100 transition hover:border-violet-400/60 hover:bg-slate-800"
            >
              Download resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 text-slate-400">
            <a
              aria-label="GitHub profile"
              href="https://github.com/Shreya1364"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              <FaGithub size={21} />
            </a>

            <a
              aria-label="LinkedIn profile"
              href="https://www.linkedin.com/in/shreya--jadhav"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              <FaLinkedin size={21} />
            </a>

            <a
              href="#about"
              className="ml-2 inline-flex items-center gap-2 text-sm transition hover:text-white"
            >
              A little about me <ArrowDown size={15} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-500/30 via-blue-500/10 to-cyan-400/20 blur-xl" />

          <div className="relative rounded-[2rem] border border-white/10 bg-slate-900/80 p-3 shadow-2xl shadow-violet-950/30">
            <img
              src={profile}
              alt="Shreya Jadhav"
              className="h-[390px] w-full rounded-[1.5rem] object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
