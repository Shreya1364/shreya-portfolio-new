import profile from "../assets/Shreya_Jdv.jpeg";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-white mb-14"
      >
        About Me
      </motion.h2>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 items-start">

        {/* ================= LEFT - PHOTO ================= */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="Shreya Jadhav"
            className="w-72 h-80 object-cover rounded-2xl shadow-xl border border-slate-700"
          />
        </motion.div>

        {/* ================= RIGHT - ABOUT ================= */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 leading-8 text-lg">
            I am a Computer Science Engineering graduate with a strong
            interest in Data Analytics and Business Intelligence. Through
            internships and academic projects, I have gained hands-on
            experience in SQL, Python, Power BI, and Microsoft Excel for
            data cleaning, analysis, visualization, and dashboard development.
          </p>

          <p className="text-gray-300 leading-7 mt-4">
            I enjoy analyzing data, identifying trends, and transforming raw
            information into meaningful insights that support data-driven
            decision-making. I am continuously learning advanced analytics
            techniques, data visualization tools, and emerging technologies
            to enhance my skills and contribute to impactful business solutions.
          </p>
        </motion.div>

        {/* ================= LEFT - LOCATION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-5 rounded-2xl border border-slate-700 bg-slate-900/40 shadow-lg"
        >
          <div className="flex items-center gap-4">

            {/* Location Icon */}
            <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-xl">
              📍
            </div>

            {/* Location Text */}
            <div>
              <h3 className="text-lg font-semibold text-white">
                Location
              </h3>

              <p className="text-gray-400 mt-1">
                Pune, Maharashtra, India
              </p>
            </div>

          </div>
        </motion.div>

        {/* ================= RIGHT - EDUCATION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl border border-slate-700 bg-slate-900/40 shadow-lg"
        >

          <div className="flex items-start gap-4">

            {/* Education Icon */}
            <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-xl">
              🎓
            </div>

            <div className="flex-1">

              <h3 className="text-xl font-semibold text-white mb-5">
                Education
              </h3>

              {/* ================= B.TECH ================= */}
              <div>
                <p className="text-gray-200 font-medium">
                  B.Tech in Computer Science & Engineering
                </p>

                <p className="text-gray-400 text-sm mt-1">
                  Karmaveer Bhaurao Patil College of Engineering, Satara
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  2023 – 2026 · CGPA 7.5
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-slate-700 my-5"></div>

              {/* ================= DIPLOMA ================= */}
              <div>
                <p className="text-gray-200 font-medium">
                  Diploma in Computer Engineering
                </p>

                <p className="text-gray-400 text-sm mt-1">
                  Karmaveer Bhaurao Patil Polytechnic, Satara
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  2020 – 2023 · 83.29%
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-slate-700 my-5"></div>

              {/* ================= 10TH / SSC ================= */}
              <div>
                <p className="text-gray-200 font-medium">
                  Secondary School Certificate (SSC)
                </p>

                <p className="text-gray-400 text-sm mt-1">
                  New English School, Satara
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  2019 – 2020 · 87%
                </p>
              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default About;