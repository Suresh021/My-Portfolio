import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function GithubStats() {

    const stats = {
        projects: 20,
        contributions: 180,
        repos: 30,
    };

    const [count, setCount] = useState({
        projects: 0,
        contributions: 0,
        repos: 0,
    });

    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    // 👇 Detect when section is visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // 👇 Count-up animation
    useEffect(() => {
        if (!visible) return;

        const duration = 1500;
        const interval = 16;

        const animate = (key, endValue) => {
            let start = 0;
            const increment = endValue / (duration / interval);

            const timer = setInterval(() => {
                start += increment;

                if (start >= endValue) {
                    setCount((prev) => ({ ...prev, [key]: endValue }));
                    clearInterval(timer);
                } else {
                    setCount((prev) => ({
                        ...prev,
                        [key]: Math.floor(start),
                    }));
                }
            }, interval);
        };

        animate("projects", stats.projects);
        animate("contributions", stats.contributions);
        animate("repos", stats.repos);

    }, [visible]);

    return (
        <section ref={sectionRef} className="py-20">
            <div className="max-w-7xl mx-auto px-4">

                <div className="bg-[#0f172a] rounded-2xl px-8 py-10 flex items-center justify-between gap-8">

                    {/* LEFT */}
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600">
                            <FaGithub size={26} className="text-white" />
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white">
                                Coding Activity
                            </h3>
                            <p className="text-slate-400">
                                Real-time GitHub statistics
                            </p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative flex items-center justify-center w-[650px] h-[100px]">

                        {/* BARS */}
                        <div className="absolute bottom-3 left-0 right-0 flex items-end justify-center gap-2">

                            {[25, 35, 45, 30, 50, 45, 22, 30, 55, 25, 35, 22].map((h, i) => (
                                <div
                                    key={i}
                                    className="w-9 bg-blue-500/70"
                                    style={{
                                        height: `${h}px`,
                                        animation: "grow 1s ease-in-out",
                                    }}
                                />
                            ))}

                        </div>

                        {/* STATS */}
                        <div className="relative z-10 flex items-center justify-between w-full px-12 py-7 text-white bg-[#1e293b]/70 border border-slate-700 rounded-xl">

                            {/* Projects */}
                            <div className="text-center flex-1">
                                <h4 className="text-3xl font-bold">
                                    {count.projects}+
                                </h4>
                                <p className="text-xs text-slate-400 uppercase">
                                    Projects
                                </p>
                            </div>

                            {/* Contributions */}
                            <div className="text-center flex-1">
                                <h4 className="text-3xl font-bold">
                                    {count.contributions}+
                                </h4>
                                <p className="text-xs text-slate-400 uppercase">
                                    Contributions
                                </p>
                            </div>

                            {/* Repositories */}
                            <div className="text-center flex-1">
                                <h4 className="text-3xl font-bold">
                                    {count.repos}+
                                </h4>
                                <p className="text-xs text-slate-400 uppercase">
                                    Repositories
                                </p>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

            {/* Bars Animation */}
            <style>
                {`
          @keyframes grow {
            from { height: 0; }
            to { height: inherit; }
          }
        `}
            </style>
        </section>
    );
}