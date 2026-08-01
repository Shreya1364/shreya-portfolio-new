function Skills(){

const skills=[
"Python",
"SQL",
"Power BI",
"MS Excel",
"Dashboard Development",
"Data Cleaning",
"Data Visualization",
"ETL Processes",
"Data Modeling",
"Power Query",
"MySQL",
"Data Analysis",
"Google Cloud Platform (GCP)",
];


const softSkills = [
"Analytical Thinking",
"Problem Solving",
"Attention to Detail",
"Communication",
"Team Collaboration",
"Adaptability",
"Continuous Learning"
];


return(
<section id="skills" className="py-20 px-6">

<h2 className="text-4xl font-bold text-center">
Skills
</h2>


{/* Technical Skills */}

<h3 className="text-2xl font-semibold text-center mt-10">
Technical Skills
</h3>

<div className="flex flex-wrap justify-center gap-4 mt-6">

{
skills.map(skill=>(

<div
key={skill}
className="bg-slate-800 px-5 py-3 rounded-xl"
>
{skill}
</div>

))
}

</div>



{/* Soft Skills */}

<h3 className="text-2xl font-semibold text-center mt-12">
Soft Skills
</h3>


<div className="flex flex-wrap justify-center gap-4 mt-6">

{
softSkills.map(skill=>(

<div
key={skill}
className="bg-slate-800 px-5 py-3 rounded-xl"
>
{skill}
</div>

))
}

</div>


</section>
)

}

export default Skills;