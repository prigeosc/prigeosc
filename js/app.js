/* =========================================================================
   PRIGEOSC — js/app.js
   Comportamentos gerais do site: menu mobile, revelação ao rolar a página,
   link ativo no menu e ano do rodapé.
   ========================================================================= */

(function () {
  "use strict";

  /* ---------- Menu mobile ---------- */
  const hamburger = document.getElementById("hamburger");
  const mobilePanel = document.getElementById("mobile-panel");

  function fecharMenu() {
    hamburger?.classList.remove("open");
    mobilePanel?.classList.remove("open");
    hamburger?.setAttribute("aria-expanded", "false");
  }

  hamburger?.addEventListener("click", () => {
    const abrindo = !mobilePanel.classList.contains("open");
    hamburger.classList.toggle("open", abrindo);
    mobilePanel.classList.toggle("open", abrindo);
    hamburger.setAttribute("aria-expanded", String(abrindo));
  });

  mobilePanel?.querySelectorAll("a").forEach((a) => a.addEventListener("click", fecharMenu));

  /* ---------- Revelação ao rolar (scroll reveal) ---------- */
  const observer = "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      )
    : null;

  function observarReveal(escopo) {
    const alvo = escopo || document;
    const itens = alvo.querySelectorAll(".reveal:not(.in)");
    if (observer) {
      itens.forEach((el) => observer.observe(el));
    } else {
      itens.forEach((el) => el.classList.add("in"));
    }
  }
  window.observarReveal = observarReveal;

  document.addEventListener("DOMContentLoaded", () => observarReveal(document));

  // Rede de segurança: garante que nenhum conteúdo fique invisível caso o
  // navegador não dispare a interseção a tempo (ex.: telas muito rápidas
  // ou ferramentas de captura automática).
  window.addEventListener("load", () => {
    setTimeout(() => {
      document.querySelectorAll(".reveal:not(.in)").forEach((el) => el.classList.add("in"));
    }, 1800);
  });

  /* ---------- Link ativo no menu conforme a seção visível ---------- */
  const secoes = document.querySelectorAll("main section[id]");
  const linksNav = document.querySelectorAll(".nav-links a, .mobile-panel a");

  const navObserver = "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const id = entry.target.getAttribute("id");
            linksNav.forEach((link) => {
              link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
            });
          });
        },
        { rootMargin: "-45% 0px -50% 0px" }
      )
    : null;

  if (navObserver) secoes.forEach((s) => navObserver.observe(s));

  /* ---------- Ano do rodapé ---------- */
  const anoEl = document.getElementById("ano-atual");
  if (anoEl) anoEl.textContent = new Date().getFullYear();

  /* ---------- Contadores do hero (calculados a partir dos catálogos) ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    const statJogos = document.getElementById("stat-jogos");
    const statLivros = document.getElementById("stat-livros");
    if (statJogos && typeof jogos !== "undefined") {
      statJogos.textContent = String(jogos.length).padStart(2, "0");
    }
    if (statLivros && typeof livros !== "undefined") {
      statLivros.textContent = String(livros.length).padStart(2, "0");
    }
  });

  /* ---------- Navbar com fundo mais forte ao rolar ---------- */
  const navbar = document.getElementById("navbar");
  window.addEventListener(
    "scroll",
    () => {
      if (!navbar) return;
      navbar.style.background = window.scrollY > 20 ? "rgba(5,9,18,.92)" : "rgba(5,9,18,.68)";
    },
    { passive: true }
  );
})();
