/* =========================================================================
   PRIGEOSC — js/musicas.js
   Cadastro das músicas educativas da PRIGEOSC feitas no Suno.

   COMO ADICIONAR UMA NOVA MÚSICA (rápido):
   1. No Suno, abra a música → ⋯ (três pontinhos) → Share → Copy Link.
      O link é algo como: https://suno.com/song/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   2. Copie um bloco do array "musicas" abaixo, cole no final e preencha.
   3. Salve. O player de áudio é gerado automaticamente a partir do link —
      não precisa mexer em mais nada. Se por algum motivo o áudio não
      carregar direto (ex: a música não é pública), o card mostra
      sozinho um botão "Ouvir no Suno" no lugar.

   Campos:
   - titulo:     nome da música
   - descricao:  1 frase sobre o conteúdo/conceito trabalhado
   - tema:       assunto de Geografia (aparece como eyebrow)
   - link:       link da música copiado do Suno (cole igual copiou)
   ========================================================================= */

const musicas = [
  {
    titulo: "O Território Tem Dono",
    descricao: "Uma música sobre como o território nunca é neutro: ele é apropriado, disputado e controlado por diferentes agentes.",
    tema: "Território",
    link: "https://suno.com/song/09d8cf60-7453-41c0-9feb-61167dd3e244",
  },
  {
    titulo: "Quem Escreve a História",
    descricao: "Uma reflexão sobre quem tem o poder de narrar os fatos — e quem fica de fora dessa história.",
    tema: "Geografia Crítica",
    link: "https://suno.com/song/b5c28e09-f2eb-4826-aa93-1d24a6fcc21a",
  },
  {
    titulo: "Liberdade Não É Promessa",
    descricao: "Uma música sobre liberdade, direitos e as contradições entre o que é prometido e o que é vivido.",
    tema: "Geografia Política",
    link: "https://suno.com/song/f657e6c7-0903-45d6-b1ff-c47b7418ed5b",
  },
  {
    titulo: "O Verdadeiro Ouro",
    descricao: "Uma música sobre recursos naturais, exploração econômica e o que realmente tem valor num território.",
    tema: "Geografia Econômica",
    link: "https://suno.com/song/fe59f86a-157e-4da8-a38c-511d0cac9d89",
  },
  {
    titulo: "Arte e Contradição",
    descricao: "Uma música sobre como a cultura expressa as tensões e contradições da sociedade.",
    tema: "Geografia Cultural",
    link: "https://suno.com/song/5169abe4-ea65-4572-8a68-247a4093cfb5",
  },
  {
    titulo: "O Mapa Não é Neutro",
    descricao: "Uma música sobre como todo mapa carrega escolhas, interesses e uma forma de ver o mundo.",
    tema: "Cartografia",
    link: "https://suno.com/song/77b7a7b9-f77f-4e9b-9ea1-ee46ecc5900a",
  },
  {
    titulo: "Palavra Que Não Se Cala",
    descricao: "Uma música sobre resistência, vozes que insistem em ser ouvidas e o direito de questionar.",
    tema: "Geografia Crítica",
    link: "https://suno.com/song/1142c432-1ff0-440d-aacb-968ebd4e1cc5",
  },
  {
    titulo: "Pensar é Revolução",
    descricao: "Uma homenagem ao pensamento crítico como ferramenta para entender e transformar o espaço — inspirada em Milton Santos.",
    tema: "Milton Santos",
    link: "https://suno.com/song/0a2eff7e-ba35-4ee0-9ac9-d30942c2f0da",
  },
  {
    titulo: "Quem Controla o Progresso",
    descricao: "Uma música sobre quem decide o que é 'progresso' — e quem paga o preço por ele.",
    tema: "Geografia Econômica",
    link: "https://suno.com/song/33cf3abd-188a-4914-ab02-7c26b96f3c72",
  },
  {
    titulo: "A História Não É Passado",
    descricao: "Uma música sobre como processos históricos continuam moldando o espaço e a sociedade hoje.",
    tema: "Geografia e História",
    link: "https://suno.com/song/2a0897d9-6019-4915-be21-8bcbf3516edc",
  },
  {
    titulo: "Calendário da República",
    descricao: "Uma música sobre datas, memória histórica e a formação política do Brasil.",
    tema: "História do Brasil",
    link: "https://suno.com/song/fa1f01a9-9a25-44b9-abb7-b278ecc0264d",
  },
  {
    titulo: "Mapa da Memória",
    descricao: "Uma música sobre como lugares guardam histórias, afetos e memórias coletivas.",
    tema: "Cartografia",
    link: "https://suno.com/song/d3a7401d-0d2d-4756-bb47-aa88986a13bd",
  },
];

// Extrai o ID da música a partir de qualquer link do Suno
// (funciona com /song/ID, /embed/ID ou só o ID puro).
function extrairIdSuno(link) {
  const match = String(link).match(/([0-9a-fA-F-]{36})/);
  return match ? match[1] : link;
}

function criarCardMusica(musica, indice) {
  const id = extrairIdSuno(musica.link);
  const audioId = `audio-musica-${indice}`;
  return `
    <article class="music-card reveal">
      <div class="music-card-head">
        <span class="ic">🎵</span>
        <div>
          <span class="eyebrow">🎵 ${musica.tema}</span>
        </div>
      </div>
      <h3>${musica.titulo}</h3>
      <p>${musica.descricao}</p>

      <audio id="${audioId}" class="music-audio" controls preload="none" src="https://cdn1.suno.ai/${id}.mp3"></audio>
      <a class="music-fallback btn btn-sm btn-ghost btn-block" href="${musica.link}" target="_blank" rel="noopener" hidden>
        ▶ Ouvir no Suno
      </a>
    </article>
  `;
}

// Se o áudio direto não carregar (a música pode estar privada, ou o Suno
// ter mudado algo no CDN), troca automaticamente pelo link "Ouvir no Suno".
function ativarFallbackAudio(grid) {
  grid.querySelectorAll(".music-audio").forEach((audio) => {
    audio.addEventListener("error", () => {
      audio.hidden = true;
      const fallback = audio.nextElementSibling;
      if (fallback) fallback.hidden = false;
    });
  });
}

function iniciarMusicas() {
  const grid = document.getElementById("grid-musicas");
  if (!grid) return;

  grid.innerHTML = musicas.map(criarCardMusica).join("");
  ativarFallbackAudio(grid);

  if (window.observarReveal) window.observarReveal(grid);
}

document.addEventListener("DOMContentLoaded", iniciarMusicas);
