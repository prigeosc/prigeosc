/* =========================================================================
   PRIGEOSC — js/reels.js
   Cadastro dos Reels do Instagram da PRIGEOSC.

   COMO ADICIONAR UM NOVO REEL (rápido):
   1. No Instagram, abra o Reel → ⋯ (três pontinhos) → Copiar link.
      O link é algo como: https://www.instagram.com/reel/XXXXXXXXXXX/
   2. Copie um bloco do array "reels" abaixo, cole no final e cole o link.
   3. Salve. O player oficial do Instagram é carregado automaticamente —
      não precisa mexer em mais nada.

   Campo:
   - link:  link do Reel copiado do Instagram (cole igual copiou)
   ========================================================================= */

const reels = [
  { link: "https://www.instagram.com/reel/DcgjnyxuXZ6/" },
  { link: "https://www.instagram.com/reel/DcitWM4uOoC/" },
];

function criarCardReel(reel) {
  return `
    <div class="reel-card">
      <blockquote
        class="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink="${reel.link}"
        style="width:100%;">
      </blockquote>
    </div>
  `;
}

function carregarScriptInstagram() {
  if (window.instgrm) {
    window.instgrm.Embeds.process();
    return;
  }
  const script = document.createElement("script");
  script.src = "https://www.instagram.com/embed.js";
  script.async = true;
  document.body.appendChild(script);
}

function iniciarReels() {
  const grid = document.getElementById("grid-reels");
  if (!grid) return;

  if (reels.length === 0) {
    grid.innerHTML = `<p style="color:var(--muted);">Em breve, os Reels da PRIGEOSC aparecem aqui.</p>`;
    return;
  }

  grid.innerHTML = reels.map(criarCardReel).join("");
  carregarScriptInstagram();
}

document.addEventListener("DOMContentLoaded", iniciarReels);
