import { BarChart3, Brain, Github, Linkedin, Smartphone } from "lucide-react";
import profile from "../assets/images/profile.jpg";

export default function Hero() {
  return (
    <section className="py-20 lg:py-30">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center px-4">

        <div className="space-y-5">

          {/* Badge */}
          <div className="animate-fadeInUp flex items-center gap-2 w-fit px-4 py-1 rounded-full 
  bg-primary/10 border border-primary/20 text-primary text-sm font-medium">

            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>

            Open for Opportunities
          </div>

          <h1 className="animate-fadeInUp text-5xl lg:text-7xl font-black">
            Hi, I'm
            <span className="block text-primary">Doddi Suresh Kumar</span>
          </h1>

          <div className="flex flex-wrap gap-4 mt-6">

            <div className="flex flex-nowrap gap-2 px-3 py-1 rounded-full 
            bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200
            border border-slate-200 dark:border-slate-700 shadow-sm">
              <Brain size={18} className="text-primary" />
              <span>AI/ML Enthusiast</span>
            </div>

            <div className="flex flex-nowrap gap-2 px-3 py-1 rounded-full 
            bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200
            border border-slate-200 dark:border-slate-700 shadow-sm">
              <BarChart3 size={18} className="text-primary" />
              <span>Data Science</span>
            </div>

            <div className="flex flex-nowrap gap-2 px-3 py-1 rounded-full 
            bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200
            border border-slate-200 dark:border-slate-700 shadow-sm">
              <Smartphone size={18} className="text-primary" />
              <span>Flutter Developer</span>
            </div>

          </div>

          <p className="animate-fadeInUp mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            Turning data into meaningful insights and ideas into real-world applications by building intelligent solutions with Data Science, AI, and modern web technologies.
          </p>

          <div className="flex gap-4">

            <a
              href="#projects"
              className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition active:scale-95"
            >
              View Projects
            </a>

            <a
              href="..\public\Resume.pdf"
              download
              className="bg-slate-200 dark:bg-slate-800 px-8 py-4 rounded-xl font-bold hover:scale-105 transition active:scale-95"
            >
              Download Resume
            </a>

          </div>

          <div className="flex gap-4 mt-4">

            <a
              href="https://github.com/Suresh021"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-slate-300 dark:border-slate-700 
              hover:bg-slate-100 dark:hover:bg-slate-800 transition duration-300 hover:scale-110"
            >
              <Github size={22} className="text-primary" />
            </a>

            <a
              href="https://www.linkedin.com/in/doddi-suresh0208/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-slate-300 dark:border-slate-700 
              hover:bg-slate-100 dark:hover:bg-slate-800 transition duration-300 hover:scale-110"
            >
              <Linkedin size={22} className="text-primary" />
            </a>
          </div>

        </div>

        <div className="flex justify-center">
          <img
            src={profile}
            className="w-[320px] md:w-[340px] lg:w-[360px] aspect-square object-cover rounded-2xl border-8 border-white dark:border-slate-900 shadow-2xl hover:scale-105 transition-transform duration-300"
            alt="Suresh Kumar"
          />
        </div>

      </div>
    </section>
  );
}