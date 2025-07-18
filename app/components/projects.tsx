'use client';

export default function Projects() {
  const projects = [
    {
      title: "Traveling Salesman-Problem Solver using Genetic Algorithms",
      description: "Developed an intelligent route optimization system using genetic algorithms in Python that efficiently solves the classic Traveling Salesman Problem through bio-inspired computation. The application features a real-time visualization interface built with Tkinter and Matplotlib, implementing two distinct crossover methods that achieve up to 56% route optimization. Using NumPy for efficient data processing, the system can find optimal routes for 100-city problems in approximately 25 seconds, while providing interactive visualization of the evolution process.",
      link: "https://github.com/Theledger45/Traveling-Salesman-Problem-Solver-using-Genetic-Algorithms"
    },
    {
    title: "CampusXChange (In development)",
    description: "A mobile marketplace built with React Native and Supabase, designed for college students to buy, sell, and trade items locally on campus. The app includes email authentication, item listings with photos, browsing and search filters, and an admin dashboard. Built using Expo, NativeWind for styling, and Supabase for backend services.",
    link: "#"
    },
    {
      title: "Twitter Bot",
      description: "A Python-based Twitter Scheduler Bot with a user-friendly GUI built in Tkinter, enabling users to schedule tweets at specific times with options for recurring intervals. This bot also supports media attachments and timezone adjustments, making it a versatile tool for managing scheduled Twitter posts.",
      link: "https://github.com/Theledger45/twitterBot"
    },
    {
    title: "PitchMint - AI-Powered Proposal Generator",
    description: "A SaaS tool that helps freelancers and agencies create polished client proposals instantly using OpenAI’s GPT-4. Features include JSON-structured prompt templates, user authentication with Supabase, Stripe-powered subscription tiers, Redis caching for API efficiency, and a polished front-end built with Tailwind CSS and Next.js.",
    link: "https://pitch-mint.com"
  },
  ];

  return (
    <section id="projects" className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 border-b-4 border-green-400 inline-block pb-2">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(74,222,128,0.5)]"
            >
              <h3 className="text-2xl font-semibold mb-4 text-green-400">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                className="inline-block text-lg font-bold text-white border-2 border-green-400 rounded-3xl px-4 py-2 transition-all duration-300 hover:bg-green-400 hover:text-gray-900 hover:shadow-[0_0_15px_rgba(74,222,128,0.5)]"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
