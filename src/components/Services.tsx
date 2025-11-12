import Bubble from "./Bubble";

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-20 text-center bg-[#faf9f6]">
      <div className="flex flex-col items-center space-y-10">
        <Bubble title="💬 What the heck is AI (and what’s an AI Audit anyway?)">
          <p>Think of an AI Audit as a friendly, plain-English review of how your business runs — what’s working, what’s clunky, and where smarter tools could make life easier.</p>
          <p>We’ll sit down (or jump on a call) and look at the everyday stuff: your emails, workflows, apps, and the bits that chew up time. Then I’ll map out where AI might fit — safely, simply, and only if it actually helps.</p>
          <p>You’ll get a clear action plan that shows what’s worth doing now, what can wait, and what’s not worth touching.</p>
          <p>No fluff. No tech talk. Just a practical snapshot of how to make your business run smoother — that’s your AI Audit.</p>
        </Bubble>

        <Bubble title="💬 Freelance Help — When You Just Need a Hand">
          <p>Not every job needs a full audit.</p>
          <p>Sometimes you just need a hand setting something up, fixing a workflow, or getting your tech stack talking to each other.</p>
          <p>I take on small freelance projects for local businesses — from automating routine tasks to building simple web tools and dashboards.</p>
          <p>Think of it as practical AI support, without the big-agency price tag.</p>
        </Bubble>

        <Bubble title="💬 Why Work With Me">
          <p>I’m not here to sell hype or drown you in tech talk — I’m here to help you actually understand what’s possible for your business.</p>
          <p>Before starting EDV AI Solutions, I worked in planning and operations — the kind of roles where getting things done matters more than buzzwords. That background taught me how to spot what’s practical, what’s overkill, and how to make change without creating chaos.</p>
          <p>I live on the Mid North Coast, I work with locals, and I care about making AI something small businesses can use — not fear.</p>
          <p>If you want a clear, honest chat about where AI might fit into your world (and where it probably shouldn’t), you’ll get that from me. No upsells. No jargon. Just straightforward support to help your business run a little smoother.</p>
        </Bubble>
      </div>
    </section>
  );
}
