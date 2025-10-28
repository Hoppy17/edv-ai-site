export default function Nav() {
  const items = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="sticky top-0 bg-brand-light border-b border-brand-primary/20 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <span className="font-semibold text-brand-dark">EDV AI Solutions</span>
        <div className="flex items-center space-x-4">
          {items.map(item => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="text-brand-dark hover:text-brand-primary transition font-medium"
            >
              {item.label}
            </button>
          ))}
          <a
            href="/ai-readiness-audit"
            className="text-brand-dark hover:text-brand-primary transition font-medium"
          >
            AI Audit
          </a>
        </div>
      </div>
    </nav>
  );
}
