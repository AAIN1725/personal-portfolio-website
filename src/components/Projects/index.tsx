import portfolio, { type Project } from '../../data/portfolio';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
      <h3 className="text-xl font-semibold text-blue-900">{project.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-700">{project.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800"
          >
            {tech}
          </li>
        ))}
      </ul>
      {project.liveUrl && (
        <div className="mt-5 text-sm font-semibold">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-blue-700 hover:text-blue-900"
          >
            Live Demo
          </a>
        </div>
      )}
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="bg-blue-50/50 py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-blue-950">Projects</h2>
        <p className="mt-3 text-slate-700">Selected work that reflects my engineering approach.</p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
