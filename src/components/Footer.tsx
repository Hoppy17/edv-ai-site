// src/components/Footer.tsx
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        padding: "24px 16px",
        borderTop: "1px solid #eee",
        textAlign: "center",
        fontSize: 14,
        color: "#122e22"
      }}
    >
      <small>© {year} EDV Group — Coffs Harbour, NSW</small>
    </footer>
  );
}
