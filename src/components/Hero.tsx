const CALENDLY_URL = "https://calendly.com/glen-edvgroup/discovery-call";

export default function Hero() {
  return (
    <section style={{ padding: "48px 16px", maxWidth: 960, margin: "0 auto" }}>
      <h1 style={{ fontSize: 32, lineHeight: 1.2, marginBottom: 12 }}>
        EDV AI Solutions
      </h1>
      <p style={{ fontSize: 18, lineHeight: 1.6, marginBottom: 20 }}>
        Practical AI help for local businesses. Simple websites, smarter
        workflows, and hands-on support—so you can focus on the work that pays.
      </p>
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "12px 16px",
          borderRadius: 8,
          border: "1px solid #222",
          textDecoration: "none",
          fontWeight: 600
        }}
        aria-label="Book a free 15-minute AI chat with Glen"
      >
        Book Free 15-min Call
      </a>
    </section>
  );
}
