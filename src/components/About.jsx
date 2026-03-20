import { GraduationCap, User } from "lucide-react";
export default function About() {
    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-900/30" id="about">
            <div className="max-w-7xl mx-auto px-4">

                <div className="grid lg:grid-cols-2 gap-16">

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold flex items-center gap-3">
                            <User size={26} className="text-primary" />
                            About Me
                        </h2>

                        <p className="text-m text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
                            I am a BTech Computer Science student with a strong interest in Data Science, Artificial Intelligence, and modern software development. I enjoy transforming data into meaningful insights and building intelligent applications that solve real-world problems.
                        </p>

                        <p className="text-m text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mt-4">
                            Through my academic journey and projects, I have worked with technologies such as Python, machine learning frameworks, data visualization tools, and modern web technologies. I am passionate about creating data-driven solutions, interactive dashboards, and scalable applications that combine analytics with practical usability.
                        </p>

                        <p className="text-m text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mt-4">
                            I am continuously exploring new technologies, improving my problem-solving skills, and working on innovative projects that bridge the gap between data, technology, and real-world impact.
                        </p>

                        <div className="grid grid-cols-2 gap-4 pt-4">

                            <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                                <h4 className="font-bold text-primary mb-1">Interests</h4>
                                <p className="text-sm">
                                    AI, Machine Learning, Data Science, Full Stack
                                </p>
                            </div>

                            <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                                <h4 className="font-bold text-primary mb-1">Values</h4>
                                <p className="text-sm">
                                    Clean Code, Scalability, Problem Solving, Continuous Learning, Team Work
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="space-y-8">

                        {/* Heading */}
                        <h2 className="text-3xl font-bold flex items-center gap-3">
                            <GraduationCap size={26} className="text-primary" />
                            Education
                        </h2>

                        {/* B.Tech */}
                        <div className="border-l-2 border-slate-200 dark:border-slate-700 pl-6">

                            <h3 className="font-bold text-xl">
                                B.Tech Computer Science & Engineering
                            </h3>

                            <p className="text-primary font-medium">
                                Lovely Professional University • 2024 - 2027
                            </p>

                            <p className="text-sm mt-2 text-slate-500 uppercase font-bold">
                                Coursework
                            </p>

                            <div className="flex flex-wrap gap-2 mt-2">
                                {["Data Structures", "OS", "DBMS", "Data Visualization", "Python"].map((course, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold hover:bg-primary/20 transition"
                                    >
                                        {course}
                                    </span>
                                ))}
                            </div>

                        </div>


                        {/* Diploma */}
                        <div className="border-l-2 border-slate-200 dark:border-slate-700 pl-6">

                            <h3 className="font-bold text-xl">
                                Diploma
                            </h3>

                            <p className="text-primary font-medium">
                                Behara Technical Campus • 2021 - 2024
                            </p>

                            <p className="text-sm mt-2 text-slate-500 uppercase font-bold">
                                Coursework
                            </p>

                            <div className="flex flex-wrap gap-2 mt-2">
                                {["Data Structures", "OS", "DBMS", "Computer Networks", "Python"].map((course, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold hover:bg-primary/20 transition"
                                    >
                                        {course}
                                    </span>
                                ))}
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}