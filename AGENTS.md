# Walter Mitty Protocol

**Current phase: build.** See `source/phase.md`. The site structure lives in `source/site.md`. Pages are filled in from `source/notes.md`, starting with the landing page. Capture continues in `source/notes.md`.

A website that fully describes the Walter Mitty Protocol, a personal protocol for reducing maladaptive daydreaming as much as possible.

This is not the Focus terminal app or the Stop Daydreaming mobile app. Those are tools. This site explains the protocol.

## Name

The protocol is called the **Walter Mitty Protocol**, after the 2013 film *The Secret Life of Walter Mitty*.

Walter spends his days in heroic daydreams while his real life feels too small. By the end he figures it out: he is in his life, and the daydreams thin out because the present got bigger. That arc is the protocol. The name carries the whole story: the person lost in the fantasy, and the person who finds a life he does not have to leave.

Use **Walter Mitty Protocol** as the site title, in the header and in page titles. In body copy, "this protocol" is fine when the sentence is about the method.

## Working Agreements

- Keep the site simple and easy to read.
- Describe the protocol clearly. Do not invent steps, claims, or results.
- Keep the tone calm, direct, and non-judgmental.
- Do not add accounts, analytics, or extra features unless asked.
- Use the screenshots in `store-screenshots/` on the website. The folder holds iPhone 6.9 App Store images: `iphone-6.9/slide-01.png` through `slide-04.png`, and `iphone-6.9/strip.png`. Where they appear is decided when the site is organized.
- Give the site visuals, not just text. The landing page and chapters 1–3 (Why, The trade-off, Triggers) each get at least one visual, and at most two. A visual earns its place only if it is relevant, helps convey the point of that page, and feels premium. Good options are custom diagrams or illustrations, or carefully chosen images. All visuals share one consistent style that matches the site's palette and typography. Diagrams show only what the notes say. A visual must not add steps, claims, or results. Skip a visual rather than use a generic or decorative one.
- The site will include Google Play Store and Apple App Store links. The user will provide them. They do not exist yet. Do not invent the URLs.

## How this repo works

The protocol is captured first. The site is built second.

1. **Capture.** The user explains the protocol in conversation. Write only what they said into `source/notes.md`. Ask a short clarifying question only when something is incomplete or contradictory. Do not start the website during capture.
2. **Organize.** When the user says capture is complete, read all of `source/notes.md`, understand the protocol, and decide the site structure yourself: whether there is a landing page, what pages or sections exist, and how someone should move through them. Write that decision into `source/site.md`. Do not invent content to fill gaps. If something needed for the site was never said, leave it out or ask.
3. **Build.** When the user says to fill in the site, turn `source/notes.md` into the pages in `source/site.md`. The notes are spoken drafts. The pages are the finished version: the same facts, written so a reader can follow them without decoding the draft. Organization, wording, and page design are the agent's job.

   Before writing or revising page copy, read and follow `.agents/skills/nbj-write-clearly/SKILL.md`. Rewrite for clarity. Keep every fact, caveat, and name from the notes. If something the page needs was never said, leave it out or ask.

   Before laying out or restyling pages, read and follow `.agents/skills/frontend-design/SKILL.md`. The look in `source/site.md` is the brief: deep green dark theme, cream light theme, IBM Plex Sans and IBM Plex Mono, one reading column about 65 characters wide. Use the skill for hierarchy, spacing, type scale, and a page that has a point of view. Keep that palette and those typefaces.

   When editing Svelte, also follow `.agents/skills/svelte-code-writer/SKILL.md`.
