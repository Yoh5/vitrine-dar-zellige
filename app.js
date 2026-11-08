/*
 * Dar Zellige — comportement.
 * Aucune dépendance : le site se dépose tel quel chez n'importe quel hébergeur
 * (Netlify, OVH, hébergement mutualisé) et s'ouvre même en double-cliquant
 * sur index.html.
 */
(function () {
  "use strict";

  const SITE = window.SITE;
  const LANGS = ["fr", "en", "ar"];
  const root = document.documentElement;
  root.classList.remove("no-js");
  let lang = "fr";

  const t = (key) => SITE.i18n[lang][key] ?? SITE.i18n.fr[key] ?? key;
  const pick = (v) => (v && typeof v === "object" ? v[lang] ?? v.fr : v);
  const fill = (tpl, vars) => tpl.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? "");

  /* ---------- Langue ---------- */
  function initialLang() {
    const fromUrl = new URLSearchParams(location.search).get("lang");
    if (LANGS.includes(fromUrl)) return fromUrl;
    try {
      const saved = localStorage.getItem("dz-lang");
      if (LANGS.includes(saved)) return saved;
    } catch (e) { /* stockage indisponible : on garde le français */ }
    const nav = (navigator.language || "fr").slice(0, 2);
    return LANGS.includes(nav) ? nav : "fr";
  }

  function setLang(next) {
    lang = next;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    try { localStorage.setItem("dz-lang", lang); } catch (e) { /* idem */ }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      el.dataset.i18nAttr.split(";").forEach((pair) => {
        const [attr, key] = pair.split(":");
        el.setAttribute(attr.trim(), t(key.trim()));
      });
    });
    document.querySelectorAll(".lang button").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });

    document.querySelectorAll("figcaption[data-caption]").forEach((c) => {
      c.textContent = pick(JSON.parse(c.dataset.caption));
    });
    renderMenu();
    renderHours();
    renderReviews();
    updateWhatsAppLinks();
  }

  /* ---------- Carte ---------- */
  let activeCat = SITE.menu[0].id;

  function renderMenu() {
    const tabs = document.querySelector(".menu-tabs");
    const panels = document.querySelector(".menu-panels");
    const cur = SITE.config.currency[lang];
    tabs.innerHTML = "";
    panels.innerHTML = "";

    SITE.menu.forEach((cat) => {
      const selected = cat.id === activeCat;
      const tab = document.createElement("button");
      tab.type = "button";
      tab.id = "tab-" + cat.id;
      tab.setAttribute("role", "tab");
      tab.setAttribute("aria-controls", "panel-" + cat.id);
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
      tab.textContent = pick(cat.title);
      tab.addEventListener("click", () => selectCat(cat.id, true));
      tabs.appendChild(tab);

      const panel = document.createElement("div");
      panel.className = "menu-panel";
      panel.id = "panel-" + cat.id;
      panel.setAttribute("role", "tabpanel");
      panel.setAttribute("aria-labelledby", tab.id);
      panel.hidden = !selected;

      cat.items.forEach((item) => {
        const dish = document.createElement("article");
        dish.className = "dish";
        const veg = (item.tags || []).includes("veg")
          ? `<span class="tag">${t("carte.veg")}</span>` : "";
        dish.innerHTML =
          `<div class="dish-head"><h3 class="dish-name"></h3><span class="dish-dots" aria-hidden="true"></span>` +
          `<span class="dish-price" dir="ltr"></span></div><p class="dish-desc"></p>${veg}`;
        dish.querySelector(".dish-name").textContent = pick(item.name);
        dish.querySelector(".dish-price").textContent = lang === "ar" ? `${cur} ${item.price}` : `${item.price} ${cur}`;
        dish.querySelector(".dish-desc").textContent = pick(item.desc);
        panel.appendChild(dish);
      });
      panels.appendChild(panel);
    });
  }

  function selectCat(id, focus) {
    activeCat = id;
    document.querySelectorAll(".menu-tabs [role=tab]").forEach((tab) => {
      const on = tab.id === "tab-" + id;
      tab.setAttribute("aria-selected", String(on));
      tab.tabIndex = on ? 0 : -1;
      if (on && focus) tab.focus();
    });
    document.querySelectorAll(".menu-panel").forEach((p) => { p.hidden = p.id !== "panel-" + id; });
  }

  // Clavier sur les onglets : flèches (inversées en arabe), Début, Fin.
  document.querySelector(".menu-tabs").addEventListener("keydown", (e) => {
    const ids = SITE.menu.map((c) => c.id);
    let i = ids.indexOf(activeCat);
    const fwd = root.dir === "rtl" ? "ArrowLeft" : "ArrowRight";
    const back = root.dir === "rtl" ? "ArrowRight" : "ArrowLeft";
    if (e.key === fwd) i = (i + 1) % ids.length;
    else if (e.key === back) i = (i - 1 + ids.length) % ids.length;
    else if (e.key === "Home") i = 0;
    else if (e.key === "End") i = ids.length - 1;
    else return;
    e.preventDefault();
    selectCat(ids[i], true);
  });

  /* ---------- Horaires, avis, contact ---------- */
  function renderHours() {
    const dl = document.querySelector(".hours");
    dl.innerHTML = "";
    SITE.hours.forEach((h) => {
      const row = document.createElement("div");
      const dt = document.createElement("dt");
      const dd = document.createElement("dd");
      dt.textContent = pick(h.days);
      const time = Array.isArray(h.time) ? h.time : [pick(h.time)];
      time.forEach((line, i) => {
        if (i) dd.appendChild(document.createElement("br"));
        dd.appendChild(document.createTextNode(line));
      });
      dd.dir = "ltr";
      row.append(dt, dd);
      dl.appendChild(row);
    });
  }

  function renderReviews() {
    const section = document.getElementById("avis");
    const list = SITE.reviews || [];
    section.hidden = list.length === 0;
    const box = section.querySelector(".reviews");
    box.innerHTML = "";
    list.forEach((r) => {
      const q = document.createElement("blockquote");
      q.className = "review";
      const p = document.createElement("p");
      p.textContent = pick(r.text);
      const c = document.createElement("cite");
      c.textContent = r.author;
      q.append(p, c);
      box.appendChild(q);
    });
  }

  function waUrl(text) {
    const num = (SITE.config.whatsapp || "").replace(/\D/g, "");
    const base = num ? "https://wa.me/" + num : "https://wa.me/";
    return text ? base + "?text=" + encodeURIComponent(text) : base;
  }

  function updateWhatsAppLinks() {
    document.querySelectorAll(".js-wa").forEach((a) => { a.href = waUrl(""); });
  }

  function initContact() {
    const phone = document.querySelector(".js-phone");
    phone.textContent = SITE.config.phone;
    phone.href = "tel:" + SITE.config.phone.replace(/\s/g, "");
    const mail = document.querySelector(".js-email");
    mail.textContent = SITE.config.email;
    mail.href = "mailto:" + SITE.config.email;
    document.querySelector(".js-year").textContent = new Date().getFullYear();

    // Crédits des photos (licences CC BY / CC BY-SA : l'auteur doit être cité).
    const box = document.querySelector(".js-credits");
    const credits = SITE.credits || [];
    box.closest(".credits").hidden = credits.length === 0;
    credits.forEach((c, i) => {
      if (i) box.append(" · ");
      const a = document.createElement("a");
      a.href = c.source; a.target = "_blank"; a.rel = "noopener";
      a.textContent = c.author;
      const lic = document.createElement("a");
      lic.href = c.licenseUrl || c.source; lic.target = "_blank"; lic.rel = "noopener license";
      lic.textContent = c.license;
      box.append(a, " (", lic, ")");
    });
  }

  /* ---------- Photos ---------- */
  function initPhotos() {
    const p = SITE.config.photos || {};
    const set = (el, src) => {
      if (!src) return;
      el.style.backgroundImage = `url("${src}")`;
      el.classList.add("has-image");
    };
    document.querySelectorAll("[data-photo]").forEach((el) => set(el, p[el.dataset.photo]));
    const gallery = document.querySelector(".gallery");
    (p.galerie || []).forEach((g) => {
      const cell = document.createElement("figure");
      cell.className = "photo reveal tone-" + (g.tone || "zellige");
      cell.style.setProperty("--i", gallery.children.length);
      set(cell, g.src);
      const cap = document.createElement("figcaption");
      cap.dataset.caption = JSON.stringify(g.caption || {});
      cell.appendChild(cap);
      gallery.appendChild(cell);
    });
  }

  /* ---------- Réservation → WhatsApp ---------- */
  function today() {
    const d = new Date();
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return d.toISOString().slice(0, 10);
  }

  function initForm() {
    const form = document.querySelector(".reserve-form");
    const date = form.elements.date;
    date.min = today();

    const rules = {
      name: (v) => v.trim().length > 1 || "form.errName",
      date: (v) => (v && v >= today()) || "form.errDate",
      time: (v) => !!v || "form.errTime",
      guests: (v) => (Number(v) >= 1 && Number(v) <= 20) || "form.errGuests"
    };

    function check(name) {
      const input = form.elements[name];
      const res = rules[name](input.value);
      const err = document.getElementById("e-" + name);
      const bad = res !== true;
      input.setAttribute("aria-invalid", String(bad));
      err.textContent = bad ? t(res) : "";
      return !bad;
    }

    Object.keys(rules).forEach((name) => {
      form.elements[name].addEventListener("blur", () => check(name));
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const results = Object.keys(rules).map(check);
      if (results.includes(false)) {
        const first = Object.keys(rules)[results.indexOf(false)];
        form.elements[first].focus();
        return;
      }
      const f = form.elements;
      const note = f.note.value.trim();
      const msg = fill(t("form.msg"), {
        name: f.name.value.trim(),
        date: f.date.value,
        time: f.time.value,
        guests: f.guests.value,
        note: note ? fill(t("form.msgNote"), { note }) : ""
      });
      window.open(waUrl(msg), "_blank", "noopener");
    });
  }

  /* ---------- Navigation ---------- */
  function initNav() {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.getElementById("nav");
    const close = () => { nav.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); };
    toggle.addEventListener("click", () => {
      const open = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });

    document.querySelectorAll(".lang button").forEach((b) => {
      b.addEventListener("click", () => setLang(b.dataset.lang));
    });

    // Lien actif selon la section visible.
    const links = [...nav.querySelectorAll("ul a")];
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        links.forEach((a) => a.setAttribute("aria-current", String(a.hash === "#" + en.target.id)));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    links.forEach((a) => { const s = document.querySelector(a.hash); if (s) spy.observe(s); });
  }

  /* ---------- Apparition au défilement ---------- */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    items.forEach((el) => io.observe(el));
  }

  initPhotos();
  initContact();
  initNav();
  initForm();
  setLang(initialLang());
  initReveal();
})();
