import { motion } from "framer-motion";

import customerImage from "../assets/Projects/customer-analysis.jpg";
import superStoreImage from "../assets/Projects/super-store-analysis-dashboard.jpg";


const projects = [

{
title:"Customer Shopping Behavior Analysis",

image: customerImage,

desc:
"Analyzed customer purchasing patterns to identify sales trends, customer segments, and buying behavior. Performed data cleaning, exploratory data analysis, and SQL-based analysis to generate actionable insights.",

tech:
["SQL","Python","Pandas","Data Analysis"],

github:
"https://github.com/Shreya1364/Customer_Shopping_Behavior_Analysis_Project.git"

},


{
title:"Super Store Sales Analysis using Power BI",

image: superStoreImage,

desc:
"Developed an interactive Power BI dashboard to analyze sales performance, profitability, customer trends, and regional insights. Created data models, visualizations, and business reports to support data-driven decisions.",

tech:
["Power BI","Excel","Power Query","Data Visualization"],

github:
"https://github.com/Shreya1364/Super_Store_Sales_Analysis_Using_Powerbi.git"

}

];



function Projects(){

return(

<section id="projects" className="py-20 px-6">


{/* Section Animation */}
<motion.h2

initial={{opacity:0, y:40}}

whileInView={{opacity:1, y:0}}

transition={{duration:0.6}}

viewport={{once:true}}

className="text-4xl font-bold text-center"

>
Projects
</motion.h2>



<div className="grid md:grid-cols-2 gap-10 mt-12">



{
projects.map((project,index)=>(


<motion.div

key={project.title}

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

className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition"

>



<img
src={project.image}
alt={project.title}
className="w-full h-99 object-contain bg-slate-800"
/>



<div className="p-6">


<h3 className="text-2xl font-bold">
{project.title}
</h3>



<p className="text-gray-400 mt-4 leading-7">
{project.desc}
</p>



<div className="flex flex-wrap gap-3 mt-5">


{
project.tech.map(item=>(

<span

key={item}

className="bg-slate-700 px-3 py-1 rounded-full text-sm"

>
{item}

</span>

))
}


</div>



<a

href={project.github}

target="_blank"

rel="noopener noreferrer"

className="inline-block mt-6 bg-blue-600 px-5 py-3 rounded-xl hover:bg-blue-700"

>

View GitHub

</a>


</div>


</motion.div>


))
}


</div>


</section>

)

}


export default Projects;