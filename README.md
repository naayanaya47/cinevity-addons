# Cinevity Community Addons

This repository contains the community-driven discovery hub for Cinevity. Cinevity is an entertainment hub that centralizes info, metadata and where to watch. It is addon-centric, meaning that the platform itself was build around it and all visualization of posters, titles, descriptions, ratings, etc. Therefore, users can also install their own addons and this repo aims to provide the space for this growth.

## 🚀 The Premium Movies Hub
Use this URL in Cinevity:
`https://cinevity-addons.vercel.app/manifest.json`

---

## 📚 Curated Addon List (Decoys & Metadata)

Copy and paste these URLs into Cinevity to expand your library:

### 🎬 Official Metadata (Series & Movies, this one is baked in, or... should be...)
- **Cinemeta (Default)**: `https://v3-cinemeta.strem.io/manifest.json`
- **WatchHub (Rent/Buy)**: `https://watchhub.strem.io/manifest.json`
- **TMDB Addon**: `https://167d8a79ca9d-stremio-tmdb-addon.baby-beamup.club/manifest.json`

### 🍜 Anime Specialists
- **Kitsu (Best for Anime)**: `https://anime-kitsu.strem.io/manifest.json`
- **AnimeScraper**: `https://stremio-anime.vercel.app/manifest.json`

### 🏴‍☠️ Community Scrapers (Hit or Miss)
- **Superflix**: `https://superflix.site/manifest.json`
- **Torrentio (Decoy/P2P)**: `https://torrentio.strem.fun/manifest.json`
- **NoTorrent**: `https://notorrent-stremio.xyz/manifest.json`

---

## 🛠️ Technical Notes & Known Issues

- **CORS Proxies**: To bypass browser security with addons and still have security features, Cinevity uses a private Cloudflare Worker proxy. Some 3rd-party addons might block these proxies, resulting in `530` or `CORS` errors. This is a known limitation of web-based streaming hubs.
- **Connectivity**: If an addon fails to load, try again later or check if the source website is down, replace it in here if you can. Not all addons will provide playable streams at all times

---

## Legal Disclaimer
We do not host or verify any of the content provided by these third-party addons. Some may work, some may not, use at your own risk 
