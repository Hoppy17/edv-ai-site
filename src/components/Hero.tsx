const CALENDLY_URL = "https://calendly.com/glen-edvgroup/discovery-call";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-green-50 via-white to-emerald-100 animate-gradient-slow"
      style={{
        padding: "48px 16px",
        maxWidth: 960,
        margin: "0 auto",
        scrollMarginTop: 72,
      }}
    >
      <div className="text-center animate-fade-in">
        <h1
          className="leading-tight mb-4 text-4xl md:text-5xl font-bold"
          style={{ lineHeight: 1.2, marginBottom: 12 }}
        >
          <span className="text-emerald-700">Friendly, Local AI Support</span>
          <br />
          Tailored to Your Business
        </h1>
        <p
          className="text-lg md:text-xl mb-6"
          style={{ lineHeight: 1.6, marginBottom: 20 }}
        >
          AI solutions by a local, for locals, easy to understand, tailored to how
          you actually work, and built to future proof your business.
        </p>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl shadow-md transition"
        >
          Book A Discovery Call
        </a>
      </div>
    </section>
  );
}
