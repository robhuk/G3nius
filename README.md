# Genius Mobile | XC Staff PWA

A CrossCountry-inspired installable launcher for the official Genius Mobile railway staff website.

## What's included
- `index.html` — responsive launcher and installation guidance
- `manifest.webmanifest` — PWA name, colours, standalone display and icon declarations
- `sw.js` — service worker that caches the app shell for offline launch
- `schedule.html` — manual timetable builder with print-to-PDF export
- `icon-192.png`, `icon-512.png`, `icon-512-maskable.png` — root-level app icons

## Important scope and security
This is a launcher, not a replacement for Genius Mobile. It opens the official website in a separate browser tab/window. The remote login and live train/crew information still require internet access. The app does not ask for, collect, or store login credentials. It is an independent utility and is not an official CrossCountry or Genius product.

## Deploy to HTTPS hosting
1. Extract the ZIP.
2. Upload **all files in this folder together**, keeping their names and root-level locations intact. Do not upload only the ZIP.
3. Publish the files on a static HTTPS host (for example, a GitHub Pages site or another HTTPS static host).
4. Open the published `index.html` URL while online. Wait for the page to load so the service worker can cache the app shell.
5. Test by revisiting the launcher once, then switch to airplane mode and reopen it. The launcher should appear; Genius Mobile itself will not load without internet.
6. When you update the app, change `CACHE_NAME` in `sw.js` (for example, `genius-mobile-xc-v2`) and redeploy all files.

## Install on iPhone / iPad
1. Open the deployed HTTPS URL in **Safari**.
2. Tap **Share**.
3. Choose **Add to Home Screen**.
4. If the option appears, enable **Open as Web App**.
5. Tap **Add**. Launch it from the new home-screen icon.

## Install on Android
1. Open the HTTPS URL in Chrome.
2. Use the browser menu and choose **Install app** or **Add to Home screen**.
3. Confirm the installation.

## Local testing
Service workers require HTTPS or `localhost`. Opening `index.html` directly from the Files app (`file://`) will not enable full PWA installation/offline caching. Use an HTTPS host for the actual installation test.

## Limitations
- This launcher cannot force the external Genius website to remain inside the standalone PWA; the browser may open the external domain in a normal browser context.
- It does not cache the remote login page, session, or operational data.
- The PWA app shell can open offline after its first successful online load, but all Genius Mobile functionality requires a connection.

## Timetable PDF export
Open **Schedule · Build / Export PDF** from the launcher. Enter the route, date, headcode and station timings, add/remove rows, then choose **Export / Print PDF**. On iPhone, use the print preview's Share action and choose Save to Files. On desktop, choose Save as PDF in the print dialog.

The schedule page is a manual document builder. It does not read or scrape the authenticated Genius Mobile schedule page and does not verify live timings. Verify all information against the official system before operational use.
