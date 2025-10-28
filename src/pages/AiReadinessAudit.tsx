import React, { useEffect } from 'react';

const CALENDLY_URL = 'https://calendly.com/glen-edvgroup/discovery-call';

export default function AiReadinessAudit() {
  useEffect(() => {
    document.title = 'EDV AI Solutions — AI Readiness Audit';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Assess your business’s AI readiness with a friendly, local team on the Mid North Coast. Practical insights, clear roadmap, zero jargon.');
    }
  }, []);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-emerald-100 py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Is Your Business AI‑Ready?</h1>
        <p className="text-lg md:text-xl text-brand-dark mb-6 max-w-2xl mx-auto">
          We’ll help you understand where you’re at and what steps can bring AI safely into your business.
        </p>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand-primary hover:bg-brand-dark text-white px-6 py-3 rounded-xl shadow-md transition font-semibold"
        >
          Book Free 15‑Min Call
        </a>
      </section>

      {/* Audit Overview */}
      <section className="py-12 md:py-20 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-brand-dark mb-4">The EDV AI Readiness Audit</h2>
        <p className="mb-8 text-brand-dark">
          Our AI readiness audit gives you a friendly, plain‑English snapshot of where your business stands with AI today
          and what you can do next. We look at your data, tools, team and goals to create a roadmap that’s practical and
          jargon‑free.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { title: 'Data Readiness', desc: 'Assess the quality and accessibility of your data.' },
            { title: 'Tools & Systems', desc: 'Review existing software and platforms to see where AI can integrate.' },
            { title: 'Team Capability', desc: 'Understand your team’s comfort and skills with digital tools.' },
            { title: 'Workflow Integration', desc: 'Identify processes that can benefit from automation and AI.' },
            { title: 'Compliance & Security', desc: 'Check that your data and practices meet legal and ethical standards.' },
            { title: 'Business Goals Alignment', desc: 'Ensure AI initiatives support your wider business objectives.' },
          ].map(({ title, desc }) => (
            <div key={title} className="p-4 bg-brand-light rounded-lg shadow hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">{title}</h3>
              <p className="text-brand-dark text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose EDV */}
      <section className="py-12 md:py-20 px-4 bg-brand-light">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-brand-dark mb-8 text-center">Why Choose EDV</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Local & Friendly</h3>
              <p className="text-brand-dark">We’re a local team, not a faceless tech firm.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Plain English</h3>
              <p className="text-brand-dark">We keep things simple — so you can make smart moves without the jargon.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Practical Roadmap</h3>
              <p className="text-brand-dark">You’ll leave with a clear, practical roadmap — not just buzzwords.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-brand-dark mb-4">Ready to start?</h2>
        <p className="text-brand-dark mb-6">Download our AI Readiness Starter Guide or chat with Glen — no cost, no jargon.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            className="inline-block bg-brand-primary hover:bg-brand-dark text-white px-6 py-3 rounded-xl shadow-md transition font-semibold"
          >
            Download Guide
          </a>
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
    </main>
  );
}
