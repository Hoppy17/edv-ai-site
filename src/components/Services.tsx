import { useState } from "react";

export default function Services() {
  const [open, setOpen] = useState(false);
  return (
    <section id="services" className="py-12 md:py-20 px-4 max-w-5xl mx-auto scroll-mt-20">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-brand-dark">
        WTF is AI (and what’s an AI Audit anyway)?
      </h2>
      <p className="text-base leading-relaxed mb-8">
        Think of an <strong>AI Audit</strong> as a friendly, plain-English review of how your business runs — what’s working, what’s clunky, and where smarter tools could make life easier.
        <br /><br />
        We’ll sit down (or jump on a call) and look at the everyday stuff: your emails, workflows, apps, and the bits that chew up time. Then I’ll map out where AI might fit — safely, simply, and only if it actually helps.
        <br /><br />
        You’ll get a clear action plan that shows what’s worth doing now, what can wait, and what’s not worth touching.
        <br /><br />
        No fluff. No tech talk. Just a practical snapshot of how to make your business run smoother — that’s your AI Audit.
      </p>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-brand-dark">
        Freelance Help — When You Just Need a Hand
      </h2>
      <p className="text-base leading-relaxed mb-8">
        Not every job needs a full audit.
        <br /><br />
        Sometimes you just need a hand setting something up, fixing a workflow, or getting your tech stack talking to each other.
        <br /><br />
        I take on small freelance projects for local businesses — from automating routine tasks to building simple web tools and dashboards.
        <br /><br />
        Think of it as practical AI support, without the big-agency price tag.
      </p>
      <div className="text-center">
        <button
          onClick={() => setOpen(!open)}
          className="bg-[#f4ede1] text-[#122e22] font-semibold px-6 py-3 rounded-full shadow transition-all hover:shadow-md"
        >
          💬 Why Work With Me
        </button>
        <div
          className={`mt-6 mx-auto max-w-2xl text-[#122e22] text-base transition-all duration-500 ease-in-out overflow-hidden ${
            open ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="leading-relaxed">
            I’m not here to sell hype or drown you in tech talk — I’m here to help you actually understand what’s possible for your business.
            <br /><br />
            Before starting EDV AI Solutions, I worked in planning and operations — the kind of roles where getting things done matters more than buzzwords. That background taught me how to spot what’s practical, what’s overkill, and how to make change without creating chaos.
            <br /><br />
            I live on the Mid North Coast, I work with locals, and I care about making AI something small businesses can use — not fear.
            <br /><br />
            If you want a clear, honest chat about where AI might fit into your world (and where it probably shouldn’t), you’ll get that from me.
            <br /><br />
            No upsells. No jargon. Just straightforward support to help your business run a little smoother.
          </p>
        </div>
      </div>
    </section>
  );
}
