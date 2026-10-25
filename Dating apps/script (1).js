/* ============================================================================
   💌 KENALANYUK — script.js
   Landing Page "Dating & Social Connection"
   ============================================================================
   📌 PETUNJUK CEPAT UNTUK PEMILIK WEBSITE (baca ini dulu!)

   Semua pengaturan ada di objek CONFIG tepat di bawah komentar ini.
   Cukup ubah nilainya → simpan → upload ulang ke hosting.
   Anda TIDAK perlu mengedit index.html atau style.css.

   1) GANTI NOMOR WHATSAPP  →  CONFIG.whatsapp.number
      • Format internasional TANPA tanda "+", spasi, atau tanda hubung.
      • Contoh: "6281234567890"   (62 = kode negara Indonesia)
      • Spasi/strip/+ yang tidak sengaja ikut diketik akan dibuang otomatis.
   2) PESAN OTOMATIS WA     →  CONFIG.whatsapp.message
   3) GANTI TELEGRAM        →  CONFIG.telegram.url
      • Boleh isi "https://t.me/usernamekamu" ATAU cukup "usernamekamu".
      • Kami TIDAK pernah meminta kata sandi / kode verifikasi Telegram.
   4) GANTI VIDEO LATAR     →  CONFIG.background.videoUrl
      • Gunakan file MP4 (H.264), resolusi 720p, ukuran < 8 MB agar cepat.
      • Sumber video gratis & legal: mixkit.co, pexels.com/videos, coverr.co
      • Kosongkan ("") untuk memakai gambar statis sebagai latar.
   5) GAMBAR CADANGAN       →  CONFIG.background.fallbackImageUrl
      • Tampil saat video gagal dimuat / autoplay diblokir browser.
   6) GANTI TEKS            →  CONFIG.site, CONFIG.hero, CONFIG.footer, dst.
   7) GANTI WARNA           →  CONFIG.colors (tombol, teks, aksen, overlay)
   8) KECEPATAN ANIMASI     →  CONFIG.animation.speed  (0.5 lambat … 2 cepat)
   9) UKURAN JUDUL/DESKRIPSI → CONFIG.hero.titleSize & descriptionSize
      • Contoh nilai: "3rem", "48px", atau "clamp(2rem, 5vw, 4rem)".
   ============================================================================ */

"use strict";

const CONFIG = {
  /* ── 1) IDENTITAS WEBSITE ──────────────────────────────────────────────── */
  site: {
    name: "KenalanYuk",                    // ← GANTI: nama website / logo teks
    tagline: "Dating & Social Connection", // muncul di tab browser & SEO
  },

  /* ── 2) KONTEN UTAMA (HERO) ────────────────────────────────────────────── */
  hero: {
    eyebrow: "✨ Dating & Social Connection",
    // Judul boleh memakai HTML sederhana milik Anda, contoh: <em>kata</em>
    // untuk aksen miring bergradasi seperti pada desain default.
    title: "Temukan <em>Teman Baru</em> dan Bangun Koneksi",
    description:
      "Di sini, setiap sapaan bisa menjadi awal sebuah cerita. " +
      "Perkenalkan dirimu, temukan orang yang sefrekuensi, dan bangun " +
      "koneksi yang tulus — kapan pun, dari mana saja.",
    titleSize: "clamp(2.2rem, 5.5vw, 4.2rem)",       // ukuran judul
    descriptionSize: "clamp(1.02rem, 2.1vw, 1.3rem)", // ukuran deskripsi
  },

  /* ── 3) BACKGROUND VIDEO & GAMBAR ──────────────────────────────────────── */
  background: {
    // Video utama (MP4). Ganti dengan video milikmu, contoh hosting sendiri:
    // "video/backgroundku.mp4"
    videoUrl: "https://assets.mixkit.co/videos/4829/4829-720.mp4",
    // Alternatif video romantis lain (gratis, tinggal salin):
    //   https://assets.mixkit.co/videos/4661/4661-720.mp4  (pasangan berjalan
    //                                                       berpegangan tangan)
    videoPosition: "center center",  // posisi video: "center", "center top", dst.
    fallbackImageUrl: "assets/fallback.png", // gambar cadangan bila video gagal
    posterUrl: "assets/fallback.png",        // gambar selagi video dimuat
    imagePosition: "center center",  // posisi gambar cadangan
    brightness: 0.9,   // kecerahan video/gambar: 0.2 (gelap) … 1.5 (terang)
    overlayOpacity: 0.55, // tirai gelap: 0 (tanpa tirai) … 1 (gelap penuh)
    blur: "0px",       // efek blur latar, contoh: "4px" (isi "0px" = nonaktif)
  },

  /* ── 4) TOMBOL & TAUTAN ────────────────────────────────────────────────── */
  buttons: {
    whatsappLabel: "Chat via WhatsApp",   // ← teks tombol WhatsApp
    telegramLabel: "Gabung Telegram",     // ← teks tombol Telegram
  },

  /* ── 5) WHATSAPP ───────────────────────────────────────────────────────── */
  whatsapp: {
    // ← GANTI dengan nomormu (internasional, tanpa + / spasi / strip)
    number: "6281234567890",
    // Pesan awal yang otomatis terisi saat pengguna membuka WhatsApp
    message:
      "Halo! Aku menemukan website KenalanYuk dan ingin ikut berkenalan 😊",
  },

  /* ── 6) TELEGRAM ───────────────────────────────────────────────────────── */
  telegram: {
    // ← GANTI: isi "https://t.me/usernamekamu" ATAU cukup "usernamekamu"
    url: "https://t.me/usernamekamu",
  },

  /* ── 7) WARNA ──────────────────────────────────────────────────────────── */
  colors: {
    accent: "#ff4d79",         // aksen utama (ikon hati, sorotan, gradasi judul)
    accent2: "#ff8a5c",        // aksen kedua (ujung gradasi)
    text: "#ffffff",           // warna teks utama
    buttonWhatsApp: "#25d366", // warna tombol WhatsApp (hijau resmi WA)
    buttonTelegram: "#229ed9", // warna tombol Telegram (biru resmi TG)
    overlayColor: "#150711",   // warna tirai gelap di atas video
  },

  /* ── 8) ANIMASI ────────────────────────────────────────────────────────── */
  animation: {
    speed: 1,              // 0.5 = lebih lambat • 1 = normal • 2 = lebih cepat
    floatingHearts: true,  // true = tampilkan hati kecil melayang
  },

  /* ── 9) AVATAR ILUSTRASI DEKORATIF (layar lebar) ───────────────────────── */
  // Ganti "src" dengan foto/ilustrasi milikmu, mis. "foto/saya.jpg".
  // Kosongkan array (avatars: []) untuk menyembunyikan avatar.
  avatars: [
    { src: "assets/avatar-1.png", alt: "Ilustrasi profil perempuan tersenyum" },
    { src: "assets/avatar-2.png", alt: "Ilustrasi profil laki-laki tersenyum" },
    { src: "assets/avatar-3.png", alt: "Ilustrasi profil perempuan berhijab" },
    { src: "assets/avatar-4.png", alt: "Ilustrasi profil laki-laki berkacamata" },
  ],

  /* ── 10) CHIP KEUNGGULAN (ikon: "shield" | "chat" | "heart") ───────────── */
  chips: [
    { icon: "shield", text: "Privasi dijaga" },
    { icon: "chat", text: "Obrolan hangat & positif" },
    { icon: "heart", text: "Koneksi yang tulus" },
  ],

  /* ── 11) CATATAN USIA (wajib bila layanan untuk dewasa) ────────────────── */
  ageBadge: "18+",
  ageNotice:
    "Layanan ini diperuntukkan bagi pengguna berusia 18 tahun ke atas.",

  /* ── 12) LAIN-LAIN ─────────────────────────────────────────────────────── */
  misc: {
    loaderText: "Menyiapkan suasana yang hangat…", // teks saat video dimuat
  },

  /* ── 13) FOOTER & MODAL HUKUM ──────────────────────────────────────────── */
  footer: {
    // {tahun} otomatis diganti dengan tahun berjalan
    copyright: "© {tahun} KenalanYuk — Semua hak dilindungi.", // ← GANTI nama
    privacyLabel: "Kebijakan Privasi",
    termsLabel: "Syarat & Ketentuan",
    privacyTitle: "Kebijakan Privasi",
    privacyText: [
      "Kami menghargai privasimu. Website ini hanyalah halaman statis: kami " +
        "tidak menyimpan data pribadi, tidak memasang cookie pelacak, dan " +
        "tidak meminta kata sandi akun apa pun.",
      "Saat kamu menekan tombol WhatsApp atau Telegram, kamu akan diarahkan " +
        "ke aplikasi resmi platform tersebut. Interaksi selanjutnya tunduk " +
        "pada kebijakan privasi masing-masing platform.",
      "Jangan pernah membagikan informasi sensitif (kata sandi, kode OTP, " +
        "data kartu) kepada siapa pun, termasuk yang mengaku sebagai admin.",
      "Pertanyaan seputar privasi dapat disampaikan melalui kontak resmi " +
        "yang tertera pada halaman utama.",
    ],
    termsTitle: "Syarat & Ketentuan",
    termsText: [
      "Dengan menggunakan website ini, kamu dianggap telah membaca dan " +
        "menyetujui ketentuan yang berlaku.",
      "Layanan ini diperuntukkan bagi pengguna berusia 18 tahun ke atas. " +
        "Dilarang menggunakan platform untuk hal yang melanggar hukum, " +
        "pelecehan, maupun penipuan.",
      "Seluruh interaksi lanjutan terjadi melalui WhatsApp dan Telegram " +
        "resmi yang tercantum di halaman utama. Kami tidak pernah meminta " +
        "kata sandi, kode verifikasi, atau pembayaran pribadi.",
      "Konten dan tampilan website ini dapat diperbarui sewaktu-waktu tanpa " +
        "pemberitahuan sebelumnya.",
      "Hak cipta atas seluruh elemen desain website ini dimiliki oleh " +
        "pemilik situs.",
    ],
  },
};

/* ============================================================================
   ⚠️  CATATAN: TIDAK PERLU MENGUBAH KODE DI BAWAH GARIS INI
   Semua logika pengaturan latar, animasi, dan tautan ada di sini.
   ============================================================================ */

(function () {
  /* ── Helper kecil ──────────────────────────────────────────────────────── */
  const $ = (sel) => document.querySelector(sel);
  const setText = (sel, text) => {
    const el = $(sel);
    if (el) el.textContent = text;
  };

  /** "#ff4d79" → "255 77 121" (dipakai sintaks rgb(var(--x) / alpha)) */
  function hexToRgbTriplet(hex) {
    const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(String(hex).trim());
    if (!m) return "21 7 17"; // fallback aman
    return `${parseInt(m[1], 16)} ${parseInt(m[2], 16)} ${parseInt(m[3], 16)}`;
  }

  /** Ikon SVG kecil untuk chip keunggulan */
  const ICONS = {
    shield:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>',
    chat:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>',
    heart:
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>',
  };

  /* ── Terapkan CONFIG → CSS Variables ───────────────────────────────────── */
  function applyConfig() {
    const root = document.documentElement.style;
    const c = CONFIG.colors;
    const b = CONFIG.background;
    const a = CONFIG.animation;

    // Warna
    root.setProperty("--accent", c.accent);
    root.setProperty("--accent-2", c.accent2);
    root.setProperty("--text", c.text);
    root.setProperty("--btn-wa", c.buttonWhatsApp);
    root.setProperty("--btn-tg", c.buttonTelegram);
    root.setProperty("--overlay-rgb", hexToRgbTriplet(c.overlayColor));

    // Background
    root.setProperty("--overlay-opacity", String(b.overlayOpacity));
    root.setProperty("--bg-brightness", String(b.brightness));
    root.setProperty("--bg-blur", String(b.blur));
    root.setProperty("--fallback-image", `url("${b.fallbackImageUrl}")`);
    root.setProperty("--img-pos", b.imagePosition);

    // Tipografi
    root.setProperty("--title-size", CONFIG.hero.titleSize);
    root.setProperty("--desc-size", CONFIG.hero.descriptionSize);

    // Kecepatan animasi (membagi durasi dasar)
    const s = Math.min(4, Math.max(0.1, Number(a.speed) || 1));
    root.setProperty("--d-fast", (0.35 / s).toFixed(2) + "s");
    root.setProperty("--d-med", (0.8 / s).toFixed(2) + "s");
    root.setProperty("--d-slow", (1.2 / s).toFixed(2) + "s");
    root.setProperty("--stagger", (0.14 / s).toFixed(2) + "s");

    // Hati melayang on/off
    if (!a.floatingHearts) document.body.classList.add("hearts-off");
  }

  /* ── Terapkan CONFIG → teks halaman ────────────────────────────────────── */
  function applyTexts() {
    const f = CONFIG.footer;

    document.title = `${CONFIG.site.name} — ${CONFIG.site.tagline}`;
    setText("#brandName", CONFIG.site.name);
    setText("#eyebrow", CONFIG.hero.eyebrow);
    // Judul memakai innerHTML agar pemilik bisa menyisipkan <em> (aksen).
    // Hanya isi HTML milikmu sendiri di sini — jangan ambil dari pengguna.
    $("#heroTitle").innerHTML = CONFIG.hero.title;
    setText("#heroDesc", CONFIG.hero.description);
    setText("#waLabel", CONFIG.buttons.whatsappLabel);
    setText("#tgLabel", CONFIG.buttons.telegramLabel);
    setText("#ageBadgeText", CONFIG.ageBadge);
    setText("#ageText", CONFIG.ageNotice);
    setText("#loaderText", CONFIG.misc.loaderText);
    setText(
      "#copyright",
      String(f.copyright).replace("{tahun}", new Date().getFullYear())
    );
    setText(".footer-link[data-modal='privacy']", f.privacyLabel);
    setText(".footer-link[data-modal='terms']", f.termsLabel);

    // Chip keunggulan
    const chips = $("#chips");
    chips.innerHTML = "";
    (CONFIG.chips || []).forEach((chip) => {
      const el = document.createElement("span");
      el.className = "chip glass";
      el.innerHTML = (ICONS[chip.icon] || "") + "<span></span>";
      el.querySelector("span").textContent = chip.text;
      chips.appendChild(el);
    });

    // Isi modal privasi & syarat
    fillModal("#modal-privacy-title", "#modal-privacy-body", f.privacyTitle, f.privacyText);
    fillModal("#modal-terms-title", "#modal-terms-body", f.termsTitle, f.termsText);
  }

  function fillModal(titleSel, bodySel, title, paragraphs) {
    setText(titleSel, title);
    const body = $(bodySel);
    body.innerHTML = "";
    (paragraphs || []).forEach((text) => {
      const p = document.createElement("p");
      p.textContent = text;
      body.appendChild(p);
    });
  }

  /* ── Avatar dekoratif (bisa diganti lewat CONFIG.avatars) ──────────────── */
  function renderAvatars() {
    const wrap = $("#floatAvatars");
    wrap.innerHTML = "";
    (CONFIG.avatars || []).forEach((av) => {
      const box = document.createElement("div");
      box.className = "float-avatar";
      const img = document.createElement("img");
      img.src = av.src;
      img.alt = av.alt || "";
      img.loading = "lazy";
      img.decoding = "async";
      box.appendChild(img);
      wrap.appendChild(box);
    });
    wrap.hidden = !(CONFIG.avatars && CONFIG.avatars.length);
  }

  /* ── Background video: autoplay, loop, mute, fallback, loader ──────────── */
  function initBackground() {
    const video = $("#bgVideo");
    const b = CONFIG.background;
    let loaderHidden = false;

    const hideLoader = () => {
      if (loaderHidden) return;
      loaderHidden = true;
      const loader = $("#loader");
      if (!loader) return;
      loader.classList.add("is-hidden");
      document.body.classList.remove("is-loading"); // mulai animasi fade-in
      setTimeout(() => loader.remove(), 1600);
    };

    // Tidak ada video? → langsung pakai gambar cadangan.
    if (!b.videoUrl) {
      video.remove();
      hideLoader();
      return;
    }

    if (b.posterUrl) video.poster = b.posterUrl;
    video.style.objectPosition = b.videoPosition;
    video.muted = true; // kepastian mute agar autoplay selalu diizinkan

    let ready = false;
    const onReady = () => {
      if (ready) return;
      ready = true;
      video.classList.add("is-ready"); // fade-in video
      hideLoader();
    };
    video.addEventListener("canplay", onReady);
    video.addEventListener("error", () => {
      // Video gagal dimuat → tampilkan gambar cadangan saja.
      video.style.display = "none";
      hideLoader();
    });

    video.src = b.videoUrl;
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      // Autoplay ditolak browser (jarang, karena video di-mute) —
      // gambar cadangan tetap tampil sebagai latar.
      playPromise.catch(() => {});
    }

    // Pengaman: jangan biarkan loader menggantung di jaringan lambat.
    setTimeout(hideLoader, 9000);
    window.addEventListener("load", () => setTimeout(hideLoader, 1200));
  }

  /* ── Tautan WhatsApp & Telegram dari CONFIG ────────────────────────────── */
  function initLinks() {
    const waBtn = $("#waBtn");
    const tgBtn = $("#tgBtn");

    // Buang otomatis "+", spasi, dan tanda hubung dari nomor.
    const digits = String(CONFIG.whatsapp.number).replace(/\D/g, "");
    if (digits) {
      const waUrl =
        "https://wa.me/" + digits +
        "?text=" + encodeURIComponent(CONFIG.whatsapp.message);
      waBtn.href = waUrl;
      waBtn.title = "Buka WhatsApp (+" + digits + ")";
    } else {
      console.warn("[KenalanYuk] CONFIG.whatsapp.number masih kosong!");
    }

    // Terima "usernamekamu", "@usernamekamu", atau URL lengkap t.me
    let tg = String(CONFIG.telegram.url).trim();
    if (!/^https?:\/\//i.test(tg)) tg = "https://t.me/" + tg.replace(/^@/, "");
    tgBtn.href = tg;
    tgBtn.title = "Buka Telegram (" + tg + ")";
  }

  /* ── Modal privasi & syarat ────────────────────────────────────────────── */
  let lastFocus = null;

  function openModal(id) {
    const modal = document.getElementById("modal-" + id);
    if (!modal) return;
    lastFocus = document.activeElement;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // kunci scroll belakang
    const closeBtn = modal.querySelector(".modal-close");
    if (closeBtn) closeBtn.focus();
  }

  function closeModal(modal) {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function initModals() {
    document.querySelectorAll("[data-modal]").forEach((btn) => {
      btn.addEventListener("click", () => openModal(btn.dataset.modal));
    });
    document.querySelectorAll(".modal").forEach((modal) => {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal(modal); // klik area gelap = tutup
      });
      const closeBtn = modal.querySelector(".modal-close");
      if (closeBtn) closeBtn.addEventListener("click", () => closeModal(modal));
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        document
          .querySelectorAll(".modal.open")
          .forEach((m) => closeModal(m));
      }
    });
  }

  /* ── Mulai ─────────────────────────────────────────────────────────────── */
  document.body.classList.add("is-loading"); // tahan animasi sampai loader usai

  document.addEventListener("DOMContentLoaded", () => {
    applyConfig();
    applyTexts();
    renderAvatars();
    initBackground();
    initLinks();
    initModals();
    console.info(
      "%c💌 " + CONFIG.site.name + " siap!",
      "font-weight:bold;color:#ff4d79"
    );
    console.info("Ubah objek CONFIG di script.js untuk kustomisasi website.");
  });
})();
