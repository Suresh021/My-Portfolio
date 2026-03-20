import { Award, BarChart3, Cloud, Code2, SmartphoneIcon, Trophy } from "lucide-react";
export default function Experience() {
    return (
        <section className="py-20" id="experience">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black mb-4">
                        Work <span className="text-primary">Experience</span>
                    </h2>
                    <p className="text-slate-500">
                        My internships, professional experience, and achievements
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">

                    {/* ================= LEFT SIDE ================= */}
                    <div className="rounded-3xl border border-primary/20 bg-white dark:bg-slate-800 p-6 shadow-sm">

                        <h3 className="text-3xl font-bold mb-8">Internships</h3>

                        <div className="space-y-10">

                            {/* Internship 1 */}
                            <div className="relative pl-16 pb-12">

                                {/* Line */}
                                <div className="absolute left-6 top-14 bottom-9 w-[2px] bg-slate-200 dark:bg-slate-700"></div>

                                {/* Icon */}
                                <div className="absolute left-0 top-0 flex items-center justify-center
      w-12 h-12 rounded-xl bg-primary/10 border border-primary/20">
                                    <BarChart3 size={22} className="text-primary" />
                                </div>

                                <p className="text-xs font-bold text-primary uppercase tracking-widest">
                                    Aug 2025 - Oct 2025
                                </p>

                                <h4 className="font-bold text-lg mt-1">Data Visualization Intern</h4>
                                <p className="text-sm text-slate-500">Infosys Springboard</p>

                                <ul className="mt-3 text-sm text-slate-600 space-y-2">
                                    <li>• Built interactive Power BI dashboards using Python and ML analysis.</li>
                                    <li>• Integrated dashboards into a Streamlit web app with AI chatbot.</li>
                                    <li>• Improved data analysis efficiency by automating reporting workflows.</li>
                                </ul>

                                {/* Skill Badges */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {["Python", "Power BI", "DAX", "Streamlit", "Machine Learning"].map((skill, i) => (
                                        <span
                                            key={i}
                                            className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                            </div>


                            {/* Internship 2 */}
                            <div className="relative pl-16">

                                {/* Line */}
                                <div className="absolute left-6 top-14 -bottom-3 w-[2px] bg-slate-200 dark:bg-slate-700"></div>

                                {/* Icon */}
                                <div className="absolute left-0 top-0 flex items-center justify-center
      w-12 h-12 rounded-xl bg-primary/10 border border-primary/20">
                                    <SmartphoneIcon size={22} className="text-primary" />
                                </div>

                                <p className="text-xs font-bold text-primary uppercase tracking-widest">
                                    Dec 2023 - Jun 2024
                                </p>

                                <h4 className="text-lg font-bold mt-1">
                                    Flutter Developer Intern
                                </h4>

                                <p className="text-sm text-slate-500">
                                    Ioninks Private Limited
                                </p>

                                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                                    <li>• Developed a cross-platform Flutter application with optimized API integration.</li>
                                    <li>• Delivered multiple features across agile sprints improving UI responsiveness.</li>
                                    <li>• Enhanced app performance by reducing load time and improving UI efficiency.</li>
                                </ul>

                                {/* Skill Badges */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {["Flutter", "Dart", "REST API", "Firebase", "UI/UX"].map((skill, i) => (
                                        <span
                                            key={i}
                                            className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                            </div>

                        </div>
                    </div>


                    {/* ================= RIGHT SIDE ================= */}
                    <div className="space-y-10">

                        {/* Competitive Programming */}
                        <div className="rounded-2xl border border-primary/20 bg-white dark:bg-slate-800 p-6 shadow-sm">

                            <h3 className="text-3xl font-bold mb-8">Competitive Programming</h3>

                            <div className="grid md:grid-cols-2 gap-6">

                                {/* LeetCode */}
                                <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Code2 size={20} className="text-primary" />
                                        <span className="font-semibold">DSA</span>
                                    </div>

                                    <h4 className="text-3xl font-bold">50+</h4>
                                    <p className="text-sm text-slate-500 tracking-wider">
                                        PROBLEMS SOLVED
                                    </p>

                                    <div className="mt-4 h-1 bg-slate-200 dark:bg-slate-700 rounded">
                                        <div className="h-1 w-2/4 bg-primary rounded"></div>
                                    </div>
                                </div>

                                {/* Kaggle */}
                                <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Trophy size={20} className="text-orange-500" />
                                        <span className="font-semibold">Leetcode</span>
                                    </div>

                                    <h4 className="text-3xl font-bold">15K</h4>
                                    <p className="text-sm text-slate-500 tracking-wider">
                                        GLOBAL RANKING
                                    </p>

                                    <div className="mt-4 h-1 bg-slate-200 dark:bg-slate-700 rounded">
                                        <div className="h-1 w-5/6 bg-primary rounded"></div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        {/* Achievements */}
                        <div className="rounded-2xl border border-primary/20 bg-white dark:bg-slate-800 p-6 shadow-sm">

                            <h3 className="text-3xl font-bold mb-8">Achievements</h3>

                            <div className="space-y-8">

                                <div className="flex items-start gap-4">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100">
                                        <Award size={22} className="text-blue-600" />
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-lg">
                                            IBM SkillsBuild AI Digital Badge
                                        </h4>
                                        <p className="text-sm text-slate-500 mt-1">
                                            Completed AI learning path covering foundational concepts and applications.
                                        </p>
                                        <p className="text-xs text-slate-400 mt-1">Jul 2025</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-100">
                                        <Cloud size={22} className="text-orange-600" />
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-lg">
                                            Google Arcade Facilitator Program
                                        </h4>
                                        <p className="text-sm text-slate-500 mt-1">
                                            Earned Google Cloud skill badges through hands-on cloud challenges.
                                        </p>
                                        <p className="text-xs text-slate-400 mt-1">Oct 2025</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}