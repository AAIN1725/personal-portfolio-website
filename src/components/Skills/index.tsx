import portfolio from '../../data/portfolio';

function levelLabel(proficiency: number): string {
  return proficiency >= 80 ? 'Advanced' : 'Intermediate';
}

function levelClass(proficiency: number): string {
  return proficiency >= 80
    ? 'bg-blue-600 text-white'
    : 'bg-blue-100 text-blue-800';
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="text-3xl font-bold text-blue-950">Skills</h2>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center justify-between rounded-lg border border-blue-100 bg-white p-4 shadow-sm"
          >
            <span className="font-medium text-slate-800">{skill.name}</span>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${levelClass(skill.proficiency)}`}
            >
              {levelLabel(skill.proficiency)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
