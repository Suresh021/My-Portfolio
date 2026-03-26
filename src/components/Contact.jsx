import { Github, Linkedin, Mail, MapPin } from "lucide-react";
export default function Contact() {
    return (
        <section className="py-20 bg-background-light dark:bg-background-dark" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="rounded-3xl bg-primary px-8 py-12 md:p-16 text-white grid lg:grid-cols-2 gap-16 shadow-2xl">

                    {/* Left Section */}
                    <div className="space-y-8">

                        <h2 className="text-4xl lg:text-5xl font-black">
                            Let's build something <span className="underline decoration-white/30">great together</span>
                        </h2>

                        <p className="text-lg opacity-90">
                            I am currently looking for opportunities in Data Science, Backend Development,
                            and Software Engineering roles. Feel free to reach out!
                        </p>

                        <div className="space-y-0">

                            <div className="flex items-center gap-2">
                                <div className="flex items-center justify-center w-12 h-12 rounded-xl 
bg-primary border border-primary/20">
                                    <Mail size={22} className="text-white" />
                                </div>
                                <span className="font-medium">ssc760951@gmail.com</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="flex items-center justify-center w-12 h-12 rounded-xl 
bg-primary border border-primary/20">
                                    <MapPin size={22} className="text-white" /></div>
                                <span className="font-medium">India</span>
                            </div>

                        </div>

                        <div className="flex gap-4 mt-4">

                            <a
                                href="https://github.com/Suresh021"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-12 h-12 rounded-xl 
    bg-white/10 backdrop-blur-sm
    hover:bg-white/20 transition duration-300"
                            >
                                <Github size={24} className="text-white stroke-[2.5]" />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/doddi-suresh0208/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-12 h-12 rounded-xl 
    bg-white/10 backdrop-blur-sm
    hover:bg-white/20 transition duration-300"
                            >
                                <Linkedin size={24} className="text-white stroke-[2.5]" />
                            </a>

                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">

                        <form className="space-y-4">

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest mb-2">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 placeholder-white/60"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest mb-2">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 placeholder-white/60"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest mb-2">
                                    Message
                                </label>

                                <textarea
                                    rows="4"
                                    placeholder="Write your message..."
                                    className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 placeholder-white/60"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-white text-primary py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors"
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>

            </div>
        </section>
    );
}