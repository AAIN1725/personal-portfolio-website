import portfolio from '../../data/portfolio';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-blue-100 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-slate-600 sm:flex-row sm:px-6">
        <p>&copy; {year} {portfolio.name}</p>
        <p>Built with React + TypeScript + Tailwind CSS</p>
      </div>
    </footer>
  );
}

export default Footer;
