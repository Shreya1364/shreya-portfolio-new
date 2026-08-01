import { motion } from "framer-motion";

function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center text-center px-6 pt-20"
    >

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >


        {/* Name Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Hi, I'm{" "}
          <span className="text-blue-500">
            Shreya Jadhav
          </span>
        </motion.h1>



        {/* Role Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-2xl mt-5 text-gray-300"
        >
          Aspiring Data Analyst
        </motion.h2>




        {/* Description Animation */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 text-gray-400 text-xl max-w-3xl mx-auto text-center leading-8"
        >
          Transforming data into meaningful insights through SQL, Python, Power BI,
          and Excel. Passionate about building interactive dashboards and solving
          business problems with data-driven decisions.
        </motion.p>




        {/* Button Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >

          <a
            href="/Shreya_Jadhav_Resume.pdf"
            download="Shreya_Jadhav_Resume.pdf"
            className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Download Resume
          </a>

        </motion.div>


      </motion.div>

    </section>
  );
}

export default Hero;