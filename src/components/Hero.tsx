const CALENDLY_URL = "https://calendly.com/glen-edvgroup/discovery-call";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-green-50 via-white to-emerald-100 animate-gradient-slow py-12 md:py-20 px-4 text-center flex flex-col items-center"
      style={{ maxWidth: 960, margin: "0 auto", scrollMarginTop: 72 }}
    >
      <h1 className="leading-tight mb-4 text-4xl md:text-5xl font-bold space-y-1 md:space-y-2 text-center">
        <span className="block text-emerald-700">Friendly</span>
        <span className="block text-emerald-700">Local AI Support</span>
        <span className="block">Tailored to Your Business</span>
      </h1>
      <p className="text-lg md:text-xl mb-6" style={{ lineHeight: 1.6, marginBottom: 20 }}>
        We help local businesses understand where they’re at and what steps can bring AI safely into their business.
      </p>
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-brand-primary hover:bg-brand-dark text-black px-6 py-3 rounded-xl shadow-md transition font-semibold"
      >
        Book Free 15-Min Call
      </a>
    </section>
  );
}
