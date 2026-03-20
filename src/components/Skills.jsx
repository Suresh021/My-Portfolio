import { BarChart3, Code, Database, Laptop } from "lucide-react";

export default function Skills() {
    return (
        <section className="py-20" id="skills">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black mb-4">
                        Technical <span className="text-primary">Arsenal</span>
                    </h2>
                    <p className="text-slate-500">
                        Technologies and tools I use to build projects
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
                        <div className="flex items-center justify-center w-14 h-14 rounded-xl 
bg-slate-100 dark:bg-slate-800 
border border-slate-200 dark:border-slate-700 shadow-sm">
                            <Code size={24} className="text-primary" />
                        </div>
                        <h3 className="mt-5 font-bold text-lg mb-4">Programming</h3>

                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm">Python</span>
                            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm">JavaScript</span>
                            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm">C++</span>
                            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm">SQL</span>
                        </div>
                    </div>

                    <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
                        <div className="flex items-center justify-center w-14 h-14 rounded-xl 
  bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                            <Laptop size={24} className="text-primary" />
                        </div>
                        <h3 className="mt-5 font-bold text-lg mb-4">Development</h3>

                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm">React</span>
                            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm">Node.js</span>
                            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm">Express.js</span>
                            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm">Flutter</span>
                        </div>
                    </div>

                    <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
                        <div className="flex items-center justify-center w-14 h-14 rounded-xl 
  bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                            <BarChart3 size={24} className="text-primary" />
                        </div>
                        <h3 className="mt-5 font-bold text-lg mb-4">Data Science</h3>

                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm">Pandas</span>
                            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm">NumPy</span>
                            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm">Scikit-learn</span>
                            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm">Power BI</span>
                        </div>
                    </div>

                    <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
                        <div className="flex items-center justify-center w-14 h-14 rounded-xl 
  bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                            <Database size={24} className="text-primary" />
                        </div>
                        <h3 className="mt-5 font-bold text-lg mb-4">Databases</h3>

                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm">MongoDB</span>
                            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm">MySQL</span>
                            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm">PostgreSQL</span>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}