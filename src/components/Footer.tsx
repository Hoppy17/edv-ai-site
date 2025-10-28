export default function Footer() {
  return (
    <>
      <div className="bg-gradient-to-r from-brand-primary to-brand-dark h-1 w-full"></div>
      <footer className="bg-brand-dark text-gray-100 border-t border-brand-primary/30 mt-8 pt-6 pb-8 px-4 text-center">
        <p className="mb-2">© 2025 EDV Group — Coffs Harbour, NSW</p>
        <p className="mb-4">Friendly, Local AI Support — Tailored to Your Business</p>
        <a
          href="https://calendly.com/glen-edvgroup/discovery-call"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand-primary hover:bg-brand-dark text-white px-6 py-3 rounded-xl shadow-md transition font-semibold"
        >
          Book Free 15-min Call
        </a>
      </footer>
    </>
  );
}
