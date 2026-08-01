function Achievements() {

const achievements = [

{
title: "Research Paper Presentation",
image: "/images/Research Paper.jpeg",
description:
"Presented the research paper 'Outstation Expenses Management Application' at the International Conference 2026 organized by St. Xavier's University, Kolkata, Enroute to Viksit Bharat @2047', demonstrating research, innovation, and technical presentation skills.",
year: "2026"
},


{
title: "Google Cloud Skills Boost – Champion Tier",
image: "/images/google-goodies.jpeg",
description:
"Achieved Champion Tier in the Google Cloud Arcade Program by successfully completing multiple cloud learning milestones and earned official Google Cloud recognition and exclusive goodies.",
year: "2025"
},

{
title: "Technical Paper Presentation",
image: "/images/technical-paper.jpeg",
description:
"Secured 2nd Prize at the State-Level Technical Paper Presentation competition for presenting a paper on 'WiFi Controlled Car,' showcasing technical research, innovation, and presentation skills.",
year: "2023"
}

];

return (

<section id="achievements" className="py-20 px-6">

<h2 className="text-4xl font-bold text-center">
Achievements
</h2>

<div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-3 gap-8">

{achievements.map((item) => (

<div
key={item.title}
className="bg-slate-900 p-6 rounded-2xl shadow-xl hover:scale-105 transition"
>

<a
href={item.image}
target="_blank"
rel="noopener noreferrer"
>
<img
src={item.image}
alt={item.title}
className="w-full h-56 object-cover rounded-xl mb-5 hover:opacity-90 transition"
/>
</a>

<h3 className="text-xl font-bold text-blue-500">
{item.title}
</h3>

<p className="text-gray-300 mt-4 leading-7">
{item.description}
</p>

<p className="text-gray-500 mt-5 font-semibold">
{item.year}
</p>

</div>

))}

</div>

</section>

);

}

export default Achievements;