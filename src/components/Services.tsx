const CALENDLY_URL = "https://calendly.com/glen-edvgroup/discovery-call";

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-20 px-4 max-w-5xl mx-auto scroll-mt-20">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-brand-dark">What We Evaluate</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        <div className="p-4 bg-brand-light rounded-lg shadow hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
          <h3 className="font-semibold mb-1">Data Readiness</h3>
          <p className="text-sm">Check the quality and availability of your business data.</p>
        </div>
        <div className="p-4 bg-brand-light rounded-lg shadow hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
          <h3 className="font-semibold mb-1">Tools & Workflow</h3>
          <p className="text-sm">Review your current tools and workflows for AI integration.</p>
        </div>
        <div className="p-4 bg-brand-light rounded-lg shadow hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
          <h3 className="font-semibold mb-1">Team Capability</h3>
          <p className="text-sm">Understand your team’s skills and training needs.</p>
        </div>
        <div className="p-4 bg-brand-light rounded-lg shadow hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
          <h3 className="font-semibold mb-1">Workflow Integration</h3>
          <p className="text-sm">Identify where AI can slot into your day‑to‑day processes.</p>
        </div>
        <div className="p-4 bg-brand-light rounded-lg shadow hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
          <h3 className="font-semibold mb-1">Compliance & Security</h3>
          <p className="text-sm">Ensure data security and regulatory requirements are met.</p>
        </div>
        <div className="p-4 bg-brand-light rounded-lg shadow hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
          <h3 className="font-semibold mb-1">Business Goals Alignment</h3>
          <p className="text-sm">Align AI opportunities with your business objectives.</p>
        </div>
      </div>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-brand-dark">Why Choose EDV</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="p-4 bg-brand-light rounded-lg shadow">
          <h3 className="font-semibold mb-1">We’re Local, Not Corporate</h3>
          <p className="text-sm">You’ll talk to people who live and work on the Mid North Coast — no call centres.</p>
        </div>
        <div className="p-4 bg-brand-light rounded-lg shadow">
          <h3 className="font-semibold mb-1">Practical, Not Complicated</h3>
          <p className="text-sm">We make AI simple and actionable so you can use it without the jargon.</p>
        </div>
        <div className="p-4 bg-brand-light rounded-lg shadow">
          <h3 className="font-semibold mb-1">Clear Roadmap</h3>
          <p className="text-sm">You’ll leave with a clear plan to move forward confidently.</p>
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-3">Ready to get started?</h3>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand-primary hover:bg-brand-dark text-white px-6 py-3 rounded-xl shadow-md transition font-semibold"
        >
          Chat with Glen
        </a>
      </div>
    </section>
  );
}
