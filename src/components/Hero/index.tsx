import portfolio from '../../data/portfolio';

export function Hero() {
  return (
    <section id="home" className="bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Portfolio
        </p>
        <h1 className="mt-3 text-4xl font-extrabold leading-tight text-blue-950 sm:text-5xl md:text-6xl">
          {portfolio.name}
        </h1>
        <h2 className="mt-4 text-xl font-semibold text-blue-700 sm:text-2xl">
          {portfolio.role}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
          {portfolio.tagline}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-md bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-md border border-violet-600 px-5 py-3 text-sm font-semibold text-violet-700 transition hover:bg-violet-50"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
