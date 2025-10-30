export default function Contact() {
  return (
    <section id="contact" className="py-8 px-4 max-w-5xl mx-auto scroll-mt-20">
      <h2 className="text-2xl font-semibold mb-3 text-brand-dark">Contact</h2>
      <p className="text-base leading-relaxed mb-4">
        Email: <a href="mailto:glen@edvgroup.com.au" className="underline text-brand-dark">glen@edvgroup.com.au</a>
      </p>
      <a
        href="https://calendly.com/glen-edvgroup/discovery-call"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "12px 16px",
          borderRadius: 8,
          border: "1px solid #222",
          textDecoration: "none",
          fontWeight: 600,
          color: "#000"
        }}
        aria-label="Book a free 15-minute AI chat with Glen"
      >
        Book Free 15-min Call
      </a>
    </section>
  );
}
