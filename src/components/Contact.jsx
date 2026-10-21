
import { Mail, ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="section-wrap pb-24">
      <div className="contact-panel">
        <p className="section-kicker">Let's connect</p>

        <h2 className="section-title">
          Have an opportunity or an idea?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
          I'm open to entry-level opportunities in software development and
          AI, and always happy to connect with people building useful technology.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:shreyajadhav1364@gmail.com"
            className="primary-button"
          >
            <Mail size={18} /> Email me
          </a>

          <a
            href="https://www.linkedin.com/in/shreya--jadhav"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            <FaLinkedin size={18} /> LinkedIn <ArrowUpRight size={16} />
          </a>

          <a
            href="https://github.com/Shreya1364"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            <FaGithub size={18} /> GitHub <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
