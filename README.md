# KomikHero 📚

**Baca Manga & Manhwa Online — Powered by MangaDex API**

KomikHero adalah platform baca manga dan manhwa modern yang menggunakan MangaDex API untuk menyediakan konten nyata dengan gambar sampul asli dan halaman chapter langsung dari CDN MangaDex.

Dikurasi oleh **MiMo V2.5 Pro** dari Nous Research.

---

## ✨ Fitur

- **🔍 Pencarian** — Cari ribuan manga, manhwa, dan manhua dari MangaDex
- **📖 Baca Chapter** — Pembaca vertikal (webtoon style) dengan chapter pages asli
- **🤖 Rekomendasi AI** — Kurasi otomatis oleh MiMo V2.5 Pro Curator Agent
- **📚 Koleksi Pribadi** — Simpan manga favorit dan lacak riwayat baca
- **🌙 Dark/Light Mode** — Mode gelap default dengan toggle tema
- **📱 Responsif** — Desain mobile-first yang optimal di semua perangkat
- **⚡ Cepat** — Loading skeleton, caching, dan optimasi performa
- **🇮🇩 Bahasa Indonesia** — Interface sepenuhnya dalam Bahasa Indonesia

## 🛠 Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — CSS Variables, Grid, Flexbox, Backdrop-filter, Animations
- **Vanilla JavaScript** — ES6+, Fetch API, Async/Await
- **MangaDex API v5** — REST API tanpa autentikasi
- **Google Fonts** — Playfair Display + DM Sans
- **GitHub Pages** — Static hosting

## 📡 MangaDex API Integration

Semua konten berasal dari API publik MangaDex:

| Endpoint | Fungsi |
|----------|--------|
| `GET /manga` | Pencarian & daftar manga |
| `GET /manga/{id}` | Detail manga + author/artist |
| `GET /manga/{id}/feed` | Daftar chapter per bahasa |
| `GET /at-home/server/{id}` | URL halaman chapter |
| CDN: `uploads.mangadex.org/covers` | Gambar sampul |

Rate limit: 5 request/detik (dihormati dengan delay otomatis).

## 🚀 Cara Pakai

1. Buka [KomikHero](https://crowfly22.github.io/KomikHero/)
2. Jelajahi manga populer di halaman Beranda
3. Gunakan halaman Jelajah untuk pencarian spesifik
4. Klik manga → lihat detail → pilih chapter → baca!
5. Simpan manga favorit ke Koleksi

## 📁 Struktur File

```
/
├── index.html    — HTML shell dengan Google Fonts, header, nav, reader overlay
├── styles.css    — CSS lengkap (dark/light mode, responsive, glass morphism)
├── app.js        — JavaScript (API calls, rendering, state management, reader)
└── README.md     — Dokumentasi ini
```

## 🎨 Desain

- **Font Heading:** Playfair Display
- **Font Body:** DM Sans
- **Dark Mode:** Background #0F0F1A, Primary #FF6B8A, Secondary #A78BFA
- **Light Mode:** Background #F8F7F4, Primary #E85D75
- **Efek:** Glass morphism, skeleton loading, smooth transitions

## 📝 Catatan

- Semua gambar berasal dari MangaDex CDN (covers + chapter pages)
- Thumbnails menggunakan `.256.jpg` untuk performa optimal
- CORS didukung langsung oleh MangaDex API
- Data tersimpan di localStorage (bookmarks, history, theme)

## 🙏 Credits

- [MangaDex](https://mangadex.org/) — API & konten manga
- [Nous Research](https://nousresearch.com/) — MiMo V2.5 Pro AI Agent
- Google Fonts — Playfair Display & DM Sans

---

*Dibuat dengan ❤️ oleh KomikHero Team · Powered by MiMo V2.5 Pro*
