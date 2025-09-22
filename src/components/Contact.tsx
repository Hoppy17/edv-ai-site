export default function Contact() {
  return (
    <section style={{ padding: "32px 16px", maxWidth: 960, margin: "0 auto" }}>
      <h2 style={{ fontSize: 24, marginBottom: 12 }}>Contact</h2>
      <p style={{ fontSize: 16, lineHeight: 1.6, marginBottom: 16 }}>
        Email: <a href="mailto:glen@edvgroup.com.au">glen@edvgroup.com.au</a>
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
          fontWeight: 600
        }}
        aria-label="Book a free 15-minute AI chat with Glen"
      >
        Book Free 15-min Call
      </a>
    </section>
  );
}
