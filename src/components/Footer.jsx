export default function Footer() {
    return (
        <footer className="py-12 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Logo / Name */}
                    <div className="flex items-center gap-2">
                        <span className="font-bold">Suresh Kumar</span>
                    </div>

                    {/* Copyright */}
                    <p className="text-sm text-slate-500 text-center">
                        © {new Date().getFullYear()} Suresh Kumar . All rights reserved.
                    </p>

                    {/* Links */}
                    <div className="flex gap-6">

                        <a href="../public/resume.pdf">Resume</a>
                        <a href="https://github.com/Suresh021">GitHub</a>
                        <a href="https://linkedin.com/in/doddi-suresh0208">LinkedIn</a>
                    </div>

                </div>

            </div>
        </footer>
    );
}