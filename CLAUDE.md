# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Load order

Before responding to any task, read these files from the knowledge base in this order:

1. `/Users/hoppy/Geets/EDV-Knowledge/About_Me.md` - who Glen is, how he thinks, how to talk to him
2. `/Users/hoppy/Geets/EDV-Knowledge/business/Current_State.md` - live snapshot of the business right now
3. `/Users/hoppy/Geets/EDV-Knowledge/business/EDV_AI_Solutions_Internal_Pitch.md` - the strategic positioning the website expresses

For deeper context on tone, voice, and anti-hype positioning, also read:

4. `/Users/hoppy/Geets/EDV-Knowledge/learnings/Learning_Log.md` - particularly the "don't sell the saved hours" entry

These files are the standing context. They are not optional. The knowledge base at `/Users/hoppy/Geets/EDV-Knowledge/` is the source of truth for who Glen is, what the business is, and how the website should sound.

## What this repo is

This is the public-facing marketing website for EDV AI Solutions. It is deployed to Vercel.

The site is plain HTML, CSS, and JavaScript. No build step. No framework. No npm. The simplicity is deliberate. Static markup, hand-edited, deployed via Vercel's git integration.

Files at root:
- `index.html` - home page
- `about.html` - about page
- `services.html` - services page
- `contact.html` - contact page
- `css/style.css` - all site styling
- `js/main.js` - all site scripts
- `images/` - image assets
- `vercel.json` - Vercel deployment config

## Git boundary: the two-prompt pattern

Every change to this codebase happens in two prompts.

**Prompt 1: Create or edit the file. Do not commit.** Write or modify files at the specified path. Do not run any git commands. Do not stage, commit, or push.

**Prompt 2: Commit and push.** A separate prompt runs the git cycle. Only run git commands when you receive a prompt that explicitly contains them. Never assume a commit is wanted because a file has been written.

Vercel auto-deploys on push to main. That means a `git push` is also a production deploy. Treat every commit message and every push as if it were going live, because it is.

## Tone and voice (this matters more than the code)

The website voice is the most important thing in this repo. It must hold the anti-hype line that the rest of the business runs on.

The tagline is: "Practical by design. Just what it is. No more, no less."

Hard rules for any copy on this site:

- Do not sell time saved. Do not sell ROI. Do not sell productivity uplift. The mission is not about saving hours, it is about doing the work properly, in the client's system, with no third party between them and their data.
- Do not use marketing-speak. No "unlock," "leverage," "supercharge," "AI-powered," "transform," "revolutionise," or any cousin of those words.
- Do not use exclamation marks.
- Do not promise outcomes. State what is built, what it costs, what the client owns at the end.
- Australian English. No em dashes.
- Sell the absence of a problem (no subscriptions, no third-party access, no lock-in) more than the presence of a benefit.
- Quiet, honest, grounded. The reader should feel respected, not pitched at.

When in doubt, read the entry titled "Don't sell the saved hours, sell what it actually is" in the Learning Log. That is the rule.

## Tech notes

There is no build step. To preview locally, open the HTML files directly in a browser, or run a basic static server (e.g. `python3 -m http.server`).

Deployment is via Vercel. `vercel.json` controls deploy config. `git push origin main` triggers a production deploy.

There is no test suite. Visual review is the test.

CSS lives entirely in `css/style.css`. Avoid inline styles. Avoid scattering CSS across HTML files.

JavaScript lives entirely in `js/main.js`. Avoid inline scripts. Keep the JS minimal — this is a marketing site, not a web app.

Images go in `images/`. Optimise before adding (compressed, sensibly sized). Vercel does not magically optimise images on a static deploy.

## Updating this codebase

Commit messages should be short and descriptive. Examples: "Update services page copy", "Fix mobile nav layout", "Add testimonial section to home page".

Because every push deploys to production, take an extra beat before committing copy changes. Read it back out loud. Does it sound like Glen? If it sounds like a digital agency, rewrite it.

Strategic decisions about the site's direction (e.g. adding a blog, restructuring the IA, changing the value proposition) get logged in `/Users/hoppy/Geets/EDV-Knowledge/decisions/`, not here.
