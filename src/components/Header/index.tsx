import portfolio from '../../data/portfolio';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-blue-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#home" className="text-lg font-bold text-blue-700">
          {portfolio.initials}
        </a>
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-4 text-sm font-medium text-blue-900 sm:gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-blue-600">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
