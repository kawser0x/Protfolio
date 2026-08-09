import Link from "next/link";

const Hero = () => {
  return (
    <section  className="hero  shadow-sm bg-slate-200 p-5 mx-auto">
      <div className="hero-content text-center  p-5">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold">
            Hi, I'm <span className="text-accent">KAWSER AHAMAD</span>
          </h1>
          <p className="py-6 text-lg">
            A Software Engineering student specializing in full-stack web development and competitive programming. I build clean, efficient applications—from robust command-line tools to modern web interfaces.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/projects" className="btn btn-accent">View My Work</Link>
            <a href="https://codeforces.com/profile/kawser0x" target="_blank" className="btn btn-outline">My Codeforces</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;