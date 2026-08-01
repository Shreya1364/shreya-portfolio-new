import profile from "../assets/Shreya_Jdv.jpeg";
import { motion } from "framer-motion";

function About() {

  return (

    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">

      <h2 className="text-4xl font-bold text-center mb-12">
        About Me
      </h2>


      <div className="grid md:grid-cols-2 gap-12 items-center">


        {/* Photo */}

        <div className="flex justify-center">

          <img
            src={profile}
            alt="Shreya Jadhav"
            className="w-72 h-72 object-cover rounded-2xl shadow-xl border border-slate-700"
          />

        </div>



        {/* Content */}

        <div>


          <p className="text-gray-300 leading-8 text-lg">

            I am a Computer Science Engineering graduate with a strong interest in Data Analytics and Business Intelligence. Through internships and academic projects, I have gained hands-on experience in SQL, Python, Power BI, and Microsoft Excel for data cleaning, analysis, visualization, and dashboard development.

          </p>



          <p className="text-gray-300 leading-8 mt-5">

            I enjoy analyzing data, identifying trends, and transforming raw information into meaningful insights that support data-driven decision-making. I am continuously learning advanced analytics techniques, data visualization tools, and emerging technologies to enhance my skills and contribute to impactful business solutions.

          </p>


        </div>


      </div>


    </section>

  );

}


export default About;