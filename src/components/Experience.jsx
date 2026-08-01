function Experience() {

const experiences = [

{
company: "Sahyadri Software Solutions",
role: "Full Stack Web Developer Intern",
duration: "Sept 2024 - May 2025",

certificate: "/certificates/sahyadri-internship-certificate.pdf",

points: [
"Developed and enhanced web applications following SDLC practices.",
"Imported and validated 1,000+ records from Excel into SQL Server.",
"Prepared user stories and Software Requirement Specifications (SRS).",
"Worked with databases and application development workflows."
]

},


{
company: "AICTE - Microsoft Elevate",
role: "Power BI Intern",
duration: "Feb 2026 - Mar 2026",

certificate:
"/certificates/powerbi-internship-certificate.pdf",

points: [
"Built interactive dashboards using Power BI for data-driven insights.",
"Performed data cleaning, transformation, and visualization using Power Query.",
"Analyzed datasets to identify trends and support business decisions.",
"Built data models by establishing relationships between datasets to improve reporting accuracy."
]

}

];


return (

<section id="experience" className="py-20 px-6">


<h2 className="text-4xl font-bold text-center">
Experience
</h2>



<div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-2 gap-8">



{
experiences.map((exp)=>(

<div
key={exp.company}
className="bg-slate-900 p-8 rounded-2xl shadow-xl hover:scale-105 transition"
>


<h3 className="text-2xl font-bold text-blue-500">
{exp.company}
</h3>


<h4 className="text-xl mt-3">
{exp.role}
</h4>


<p className="text-gray-400 mt-2">
{exp.duration}
</p>



<ul className="mt-5 space-y-3 text-gray-300">

{
exp.points.map(point=>(

<li key={point}>
• {point}
</li>

))
}

</ul>

{
exp.certificate && (
<a
href={exp.certificate}
target="_blank"
rel="noopener noreferrer"
className="inline-block mt-6 bg-blue-600 px-5 py-2 rounded-xl hover:bg-blue-700"
>
View Certificate
</a>
)
}


</div>

))

}


</div>


</section>

)

}


export default Experience;