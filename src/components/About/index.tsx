import portfolio from '../../data/portfolio';

export function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="text-3xl font-bold text-blue-950">About</h2>
      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg">
        {portfolio.bio}
      </p>
      <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-700">
        <span className="rounded-full bg-blue-100 px-4 py-2 font-medium text-blue-800">
          Location: {portfolio.location}
        </span>
        {portfolio.openToWork && (
          <span className="rounded-full bg-blue-100 px-4 py-2 font-medium text-blue-800">
            Open to new opportunities
          </span>
        )}
      </div>
    </section>
  );
}

export default About;
