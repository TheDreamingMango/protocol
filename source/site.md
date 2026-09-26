# Site structure

Decided during organize. Content comes from `source/notes.md`. Wording on the site must stay faithful to it.

## Shape

A short landing page, then eight chapters read in order, plus one separate technical guide.

```
/                         Landing: what the protocol is, the core idea, numbered contents, start reading
/why                      1. Why
/the-trade-off            2. The trade-off
/triggers                 3. Triggers
/the-password             4. The password
/iphone                   5. iPhone
/macbook                  6. MacBook
/lock-the-rest-away       7. Lock the rest away
/when-access-is-unavoidable  8. When access is unavoidable
/guides/iphone-setup      Guide: iPhone setup with Apple Configurator
```

## Chapters and where their content comes from

| # | Chapter | Notes section |
|---|---------|---------------|
| 1 | Why | What maladaptive daydreaming is, and why it's bad |
| 2 | The trade-off | Making the trade-off harder |
| 3 | Triggers | Music and social media |
| 4 | The password | The mined password: the Password System, and "What the mined password is doing" |
| 5 | iPhone | Blocking music and social media on the iPhone (overview only; links to the guide) |
| 6 | MacBook | Blocking on the MacBook |
| 7 | Lock the rest away | Physical lock for devices that can't be blocked |
| 8 | When access is unavoidable | When access is unavoidable, including Presence |

"The password" is its own chapter because the iPhone chapter, the MacBook chapter, and the guide all depend on it.

## Guide: iPhone setup with Apple Configurator

Holds the detailed Apple Configurator material so it does not swamp the main path. It has an on-page table of contents and links back to the iPhone chapter.

Sections: the four pieces, how they work together, become the organization and get the certificate, supervise the iPhone, create the profile, add or remove the profile.

## Presence

Appears only in chapter 8. Show 1–2 screenshots from `store-screenshots/iphone-6.9/`. App Store and Google Play links render only once their URLs are set in `src/lib/config.ts`. Do not invent the URLs. No separate Presence page.

## Navigation

- Minimal header: site name (links home) and a Contents link (the landing page's contents list).
- Each chapter shows "Chapter N of 8" and ends with previous/next links.
- The guide has an on-page table of contents and a link back to the iPhone chapter.
- No sidebar.

## Look

Matches Presence: deep green dark theme and cream light theme, following the system preference. IBM Plex Sans for text, IBM Plex Mono for accents. One reading column, about 65 characters wide.
