const CALENDLY_URL = "https://calendly.com/glen-edvgroup/discovery-call";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="bg-gradient-to-r from-brand-primary to-brand-dark h-1 w-full"></div>
      <footer className="bg-brand-dark text-brand-dark border-t border-brand-primary/30 mt-8 pt-6 pb-8 px-4 text-center">
        <p className="mb-1">© {year} EDV Group — Coffs Harbour, NSW</p>
        <p className="mb-4">Friendly, Local AI Support — Tailored to Your Business</p>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand-primary hover:bg-brand-dark text-black px-6 py-3 rounded-xl shadow-md transition font-semibold"
        >
          Book Free 15-Min Call
        </a>
      </footer>
    </>
  );
}
