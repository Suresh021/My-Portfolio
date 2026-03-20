import { Code2, Link } from "lucide-react";
import { projects } from "../data/projectsData";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-4xl font-black mb-12">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden bg-white dark:bg-slate-800 
              border border-slate-200 dark:border-slate-700 shadow-sm 
              hover:shadow-lg hover:-translate-y-1 transition"
            >

              {/* Image Section */}
              <div className="relative overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover transition duration-500 
                  group-hover:brightness-50 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 
                opacity-0 group-hover:opacity-100 transition duration-300">

                  {/* Code Button */}
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 rounded-full 
                      bg-white text-slate-900 shadow-lg hover:scale-110 transition"
                    >
                      <Code2 size={20} />
                    </a>
                  )}

                  {/* Live Link Button */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 rounded-full 
                      bg-white text-slate-900 shadow-lg hover:scale-110 transition"
                    >
                      <Link size={20} />
                    </a>
                  )}

                </div>

              </div>

              {/* Content */}
              <div className="p-6">

                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-primary uppercase bg-primary/10 px-3 py-1 rounded-md">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-500 mt-3">
                  {project.description}
                </p>

                <div className="flex items-center gap-2 mt-5 text-sm text-slate-500">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="flex items-center">
                      {tech}
                      {i !== project.tech.length - 1 && (
                        <span className="mx-2 text-slate-400">•</span>
                      )}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}