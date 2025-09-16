function IconWeb() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 flex-none" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 4 3 14 0 18M9 3c-2 4-2 14 0 18" />
    </svg>
  );
}

function IconCog() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 flex-none" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 8a4 4 0 100 8 4 4 0 000-8z" />
      <path d="M4 12h2m12 0h2M12 4v2m0 12v2M6.3 6.3l1.4 1.4m8.6 8.6l1.4 1.4M17.7 6.3l-1.4 1.4M7.7 16.3l-1.4 1.4" />
    </svg>
  );
}

function IconDoc() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 flex-none" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M7 3h7l5 5v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" />
      <path d="M14 3v6h6" />
      <path d="M9 13h6M9 17h6" />
    </svg>
  );
}

function IconLightbulb() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 flex-none" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a7 7 0 00-4 12c.5.5 1 1.5 1 3h6c0-1.5.5-2.5 1-3a7 7 0 00-4-12z" />
    </svg>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
        <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">EDV AI Solutions</a>
          <div className="hidden gap-6 text-sm sm:flex">
            <a href="#services" className="hover:text-neutral-600">Services</a>
            <a href="#contact" className="hover:text-neutral-600">Contact</a>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center rounded-xl border border-neutral-900 px-3 py-1.5 text-sm font-medium hover:bg-neutral-900 hover:text-white transition"
          >
            Book Free 15-min Call
          </a>
        </nav>
      </header>

      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-50 via-white to-white" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
                Practical AI for small businesses on the Mid North Coast
              </h1>
              <p className="mt-4 text-lg text-neutral-700">
                We streamline admin, simplify marketing, and turn messy processes into clean,
                repeatable systems. No hype. Just useful tools that save hours every week.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-xl bg-neutral-900 text-white px-5 py-3 text-sm font-medium hover:bg-neutral-800 transition"
                >
                  Book Free 15-min Call
                </a>
                <a
                  href="#services"
                  className="rounded-xl border border-neutral-300 px-5 py-3 text-sm font-medium hover:bg-neutral-50 transition"
                >
                  Explore Services
                </a>
              </div>
              <ul className="mt-8 text-sm text-neutral-600 grid sm:grid-cols-2 gap-2">
                <li>• Fast setup, clear pricing</li>
                <li>• Friendly local support</li>
                <li>• Keep your existing tools</li>
                <li>• Own your data & workflows</li>
              </ul>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-neutral-200 p-5 shadow-sm">
                <div className="rounded-xl bg-neutral-100 aspect-video w-full" />
                <div className="mt-4 text-sm text-neutral-600">
                  Add a photo of you or a local shot later.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-neutral-50 border-y border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Services</h2>
          <p className="mt-2 text-neutral-700">
            Start small or go deeper. Each option is designed to create quick wins and compounding value.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl bg-white border border-neutral-200 p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <IconWeb />
                <h3 className="font-medium">Smarter Marketing & Websites</h3>
              </div>
              <p className="mt-2 text-sm text-neutral-700">
                One-page sites and content workflows that look sharp and are easy to update.
                <span className="font-semibold"> Launch fast, learn faster.</span>
              </p>
              <p className="mt-3 text-xs text-neutral-500">From $799 build • $199/mo support</p>
            </div>

            <div className="rounded-2xl bg-white border border-neutral-200 p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <IconCog />
                <h3 className="font-medium">Admin & Workflow Automation</h3>
              </div>
              <p className="mt-2 text-sm text-neutral-700">
                Reduce copy-paste and tighten hand-offs with simple automations.
                <span className="font-semibold"> Save hours every week.</span>
              </p>
              <p className="mt-3 text-xs text-neutral-500">Scoping call included</p>
            </div>

            <div className="rounded-2xl bg-white border border-neutral-200 p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <IconDoc />
                <h3 className="font-medium">Templates & Tools</h3>
              </div>
              <p className="mt-2 text-sm text-neutral-700">
                Reusable docs, calculators, and prompts tuned to your business.
                <span className="font-semibold"> Consistent results, less effort.</span>
              </p>
              <p className="mt-3 text-xs text-neutral-500">Delivered as editable files</p>
            </div>

            <div className="rounded-2xl bg-white border border-neutral-200 p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <IconLightbulb />
                <h3 className="font-medium">Coaching & Consulting</h3>
              </div>
              <p className="mt-2 text-sm text-neutral-700">
                Plain-English help to pick tools, plan rollouts, and train your team.
                <span className="font-semibold"> Clarity first, then action.</span>
              </p>
              <p className="mt-3 text-xs text-neutral-500">From $299 session</p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <p className="text-neutral-700">
              <span className="font-semibold">Our philosophy:</span> pick the smallest thing that
              makes tomorrow easier, ship it, and build from there.
            </p>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-2 text-neutral-700">
            Book a quick call or send an email. We’ll map the fastest path to value.
          </p>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <form
              className="lg:col-span-2 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Name</label>
                  <input className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-800" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input type="email" className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-800" placeholder="you@company.com" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea rows={4} className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-800" placeholder="What are you trying to achieve?" />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <button className="rounded-xl bg-neutral-900 text-white px-5 py-3 text-sm font-medium hover:bg-neutral-800 transition" type="submit">
                  Send (placeholder)
                </button>
                <a href="mailto:glen@edvgroup.com.au" className="text-sm underline underline-offset-4 hover:text-neutral-700">
                  Or email glen@edvgroup.com.au
                </a>
              </div>
              <p className="mt-3 text-xs text-neutral-500">
                The form is non-functional for now.
              </p>
            </form>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="font-medium">Prefer a quick chat?</h3>
              <p className="mt-2 text-sm text-neutral-700">
                Book a free 15-minute call and we’ll talk through options.
              </p>
              <a
                href="#"
                className="mt-4 inline-flex rounded-xl border border-neutral-900 px-4 py-2 text-sm font-medium hover:bg-neutral-900 hover:text-white transition"
              >
                Book Free 15-min Call
              </a>
              <ul className="mt-6 text-sm text-neutral-700 space-y-1">
                <li>• Based on the Mid North Coast</li>
                <li>• Straightforward pricing</li>
                <li>• Keep your current tools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-neutral-600 flex items-center justify-between">
          <span>© {new Date().getFullYear()} EDV Group</span>
          <a href="#" className="hover:text-neutral-800">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
