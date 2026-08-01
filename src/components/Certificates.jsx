import { motion } from "framer-motion";


function Certificates() {

const certificates = [

{
title: "Power BI Certification",
issuer: "AICTE- Microsoft Elevate",
date: "12 Mar 2026",
certificate: "/certificates/powerbi-internship-certificate.pdf"
},

{
  title: "AI & Machine Learning",
  issuer: "Microsoft",
  date: "12 Mar 2026 ",
  certificate: "/certificates/ai-ml-microsoft.pdf"
},

{
title: "SQL - Basic Certificate",
issuer: "HackerRank",
date: "17 Apr 2026",
certificate: "/certificates/sql - certificate.pdf"
},


{
title: "Bootcamp on Big Data & Data Science",
issuer: "CDAC - Futureskills Prime",
date: "21 Jan 2025",
certificate: "/certificates/big data - certificate.pdf"
},


{
title: "Python Certification",
issuer: "Wisdom Sprouts IT Training Hub",
date: "10 Sep 2025",
certificate: "/certificates/python - certificate.pdf"
},

{
  title: "Gemini Certified Student",
  issuer: "Google for Education",
  date: "14 Dec 2025",
  description:
    "Earned the official Google for Education Gemini Certified Student credential by demonstrating foundational knowledge of Google AI, prompt engineering, and AI-powered productivity tools.",
  certificate: "/certificates/gemini certified student.pdf"
},

];


return (

<section id="certificates" className="py-20 px-6">



{/* Heading Animation */}
<motion.h2

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.6
}}

viewport={{
once:true
}}

className="text-4xl font-bold text-center"

>
Certifications
</motion.h2>





<div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-2 gap-8">



{
certificates.map((cert,index)=>(



<motion.div

key={cert.title}

initial={{
opacity:0,
y:60
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.6,
delay:index * 0.2
}}

viewport={{
once:true
}}

className="bg-slate-900 p-8 rounded-2xl shadow-xl hover:scale-105 transition"

>



<h3 className="text-2xl font-bold text-blue-500">
{cert.title}
</h3>



<p className="text-gray-300 mt-4">
Issued by: {cert.issuer}
</p>



<p className="text-gray-400 mt-2">
{cert.date}
</p>




<a

href={cert.certificate}

target="_blank"

rel="noopener noreferrer"

className="inline-block mt-6 bg-blue-600 px-5 py-2 rounded-xl hover:bg-blue-700"

>

View Certificate

</a>



</motion.div>


))

}



</div>


</section>

)

}


export default Certificates;