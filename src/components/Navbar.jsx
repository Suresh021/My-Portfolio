export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between h-16 items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-extrabold tracking-wide">D<span className="text-primary font-extrabold">SK</span></h1>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>

          <a
            href="../public/Resume.pdf"
            download
            className="bg-primary text-white px-5 py-2 rounded-lg font-bold hover:scale-105 transition active:scale-95"
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}