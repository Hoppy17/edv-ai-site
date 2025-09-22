export default function Nav() {
  const items = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" }
  ];

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        background: "#fff",
        borderBottom: "1px solid #eee",
        zIndex: 50
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: 960,
          margin: "0 auto",
          padding: "12px 16px"
        }}
      >
        <div style={{ fontWeight: 700 }}>EDV AI Solutions</div>
        <div style={{ display: "flex", gap: 12 }}>
          {items.map((i) => (
            <button
              key={i.id}
              onClick={() => go(i.id)}
              style={{
                background: "transparent",
                border: "none",
                padding: "8px 10px",
                fontWeight: 600,
                cursor: "pointer"
              }}
              aria-label={`Go to ${i.label}`}
            >
              {i.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
