/* =========================================================================
   PRIGEOSC — js/quadrinhos.js
   Cadastro das HQs publicadas da PRIGEOSC.

   COMO ADICIONAR UM NOVO QUADRINHO (rápido):
   1. Coloque a imagem da HQ em imagens/quadrinhos/NOME.jpg
   2. Copie um bloco do array "quadrinhos" abaixo, cole no final e preencha.
   3. Salve. O card e o leitor são gerados automaticamente — não precisa
      mexer em mais nada.

   Campos:
   - titulo:     nome da HQ
   - descricao:  1-2 frases sobre o conteúdo
   - tema:       conceito geográfico central (aparece como eyebrow)
   - serie:      indicação de público (ex: "6º ao 9º ano")
   - imagem:     caminho da HQ (usada no card e no leitor)
   - thumb:      OPCIONAL. Só preencha se quiser uma capa recortada
                 diferente da imagem completa (ex: "NOME-thumb.jpg").
                 Se não preencher, o card usa a própria "imagem".
   - novo:       true/false — mostra a etiqueta "NOVA"
   ========================================================================= */

const quadrinhos = [
 {
    titulo: "Lugar: onde vivemos",
    descricao:
      "Lugar é o espaço vivido e carregado de significados, construído pelas experiências, relações e memórias das pessoas que nele vivem.",
    tema: "Lugar",
    serie: "6º ao 8º ano",
    thumb: "imagens/quadrinhos/lugar-full.jpg",
    imagem: "imagens/quadrinhos/lugar-full.jpg",
    novo: true,
  },
 {
    titulo: "Paisagem: o que os olhos veem (e o que escondem)",
    descricao:
      "O que é paisagem, como ela muda com o tempo e por que observar o espaço já é fazer Geografia.",
    tema: "Paisagem",
    serie: "6º ao 8º ano",
    thumb: "imagens/quadrinhos/paisagem-thumb.jpg",
    imagem: "imagens/quadrinhos/paisagem-full.jpg",
    novo: true,
  },
  {
    titulo: "Território: serve a quem?",
    descricao:
      "Território é o espaço marcado por relações de poder, controle, domínio e disputas entre diferentes grupos e agentes.",
    tema: "Território",
    serie: "6º ao 8º ano",
    imagem: "imagens/quadrinhos/territorio.jpg",
    novo: true,
  },
  {
    titulo: "Região: área com características comuns.",
    descricao:
      "Região é uma porção do espaço que apresenta características comuns e pode ser delimitada de acordo com critérios naturais, sociais, econômicos ou culturais.",
    tema: "Região",
    serie: "6º ao 8º ano",
    imagem: "imagens/quadrinhos/regiao.jpg",
    novo: true,
  },
  {
    titulo: "Espaço geográfico: espaço transformado pela sociedade.",
    descricao:
      "Espaço geográfico é o espaço transformado e produzido pelas relações entre sociedade e natureza ao longo do tempo.",
    tema: "Território",
    serie: "6º ao 8º ano",
    imagem: "imagens/quadrinhos/espacogeo.jpg",
    novo: true,
  },
  {
    titulo: "Espaço rural: espaço vivo.",
    descricao:
      "Espaço rural: área marcada por atividades agropecuárias e relações com a natureza.",
    tema: "Espaço Rural",
    serie: "6º ao 7º ano",
    imagem: "imagens/quadrinhos/espacorural.jpg",
    novo: true,
  },
  {
    titulo: "Espaço urbano: espaço antrópico.",
    descricao:
      "Espaço urbano: área marcada pela concentração de pessoas, construções, serviços e atividades econômicas.",
    tema: "Espaço Urbano",
    serie: "6º ao 7º ano",
    imagem: "imagens/quadrinhos/espacourbano.jpg",
    novo: true,
  },
{
    titulo: "Industrialização: mudando o mundo.",
    descricao:
      "Industrialização: processo de expansão das atividades industriais e transformação da sociedade.",
    tema: "Industrialização",
    serie: "6º ao 9º ano",
    imagem: "imagens/quadrinhos/industrializacao.jpg",
    novo: true,
  },
{
    titulo: "Relevo: a forma do mundo.",
    descricao:
      "Relevo: conjunto das formas da superfície terrestre.",
    tema: "Relevo",
    serie: "6º ao 7º ano",
    imagem: "imagens/quadrinhos/relevo.jpg",
    novo: true,
  },
{
    titulo: "Hidrografia Brasileira: o fluxo do país",
    descricao:
      "Hidrografia brasileira e aquíferos: conjunto de rios, lagos e águas subterrâneas que abastecem e sustentam o território.",
    tema: "Hidrografia Brasileira",
    serie: "6º ao 7º ano",
    imagem: "imagens/quadrinhos/hidrografia.jpg",
    novo: true,
  },
{
    titulo: "Biomas Brasileiros: a vida do país",
    descricao:
      "Biomas brasileiros: grandes conjuntos naturais com características próprias de clima, vegetação, fauna e solo.",
    tema: "Hidrografia Brasileira",
    serie: "6º ao 7º ano",
    imagem: "imagens/quadrinhos/biomas.jpg",
    novo: true,
  },
{
    titulo: "Fenômenos Climáticos.",
    descricao:
      "Fenômenos climáticos: eventos atmosféricos que alteram as condições do tempo e do clima.",
    tema: "Fenômenos Climáticos",
    serie: "6º ao 7º ano",
    imagem: "imagens/quadrinhos/fenomenosclima.jpg",
    novo: true,
  },
{
    titulo: "El ñino",
    descricao:
      "Super El Niño: versão muito intensa do El Niño, com forte aquecimento do Pacífico e impactos climáticos globais.",
    tema: "Fenômenos Climáticos",
    serie: "6º ao 7º ano",
    imagem: "imagens/quadrinhos/elnino.jpg",
    novo: true,
  },
  {
    titulo: "Escalas Geográficas",
    descricao:
      "Do bairro ao planeta: como a escala escolhida muda o que enxergamos (e escondemos) sobre um mesmo fenômeno.",
    tema: "Escala geográfica",
    serie: "7º ao 9º ano",
    thumb: "imagens/quadrinhos/escala-thumb.jpg",
    imagem: "imagens/quadrinhos/escala-full.jpg",
    novo: true,
  },
  {
    titulo: "Mapas e Projeções",
    descricao:
      "Por que todo mapa distorce algo — e como escolher uma projeção é também uma escolha política.",
    tema: "Cartografia",
    serie: "8º ano ao Ensino Médio",
    thumb: "imagens/quadrinhos/mapas-projecoes-thumb.jpg",
    imagem: "imagens/quadrinhos/mapas-projecoes-full.jpg",
    novo: true,
  },
  {
    titulo: "Efemérides de 2026",
    descricao:
      "Quatro datas para não esquecer: Eldorado dos Carajás, Chernobyl, Soweto e a independência dos EUA.",
    tema: "Memória e atualidades",
    serie: "9º ano ao Ensino Médio",
    thumb: "imagens/quadrinhos/efemerides-2026-thumb.jpg",
    imagem: "imagens/quadrinhos/efemerides-2026-full.jpg",
    novo: true,
  },
];

// Quando um novo quadrinho for publicado, basta adicioná-lo ao array
// "quadrinhos" acima — não é preciso cadastrar nada aqui.

function criarCardQuadrinho(hq, indice) {
  return `
    <article class="comic-card reveal" data-abrir-hq="${indice}" tabindex="0" role="button" aria-label="Abrir HQ ${hq.titulo}">
      ${hq.novo ? '<span class="comic-badge">NOVA</span>' : ""}
      <div class="comic-cover">
        <img src="${hq.thumb || hq.imagem}" alt="Capa da HQ ${hq.titulo}" loading="lazy">
        <div class="comic-cover-overlay">🔍 Ler HQ</div>
      </div>
      <div class="comic-body">
        <span class="eyebrow">💬 ${hq.tema}</span>
        <h3>${hq.titulo}</h3>
        <p>${hq.descricao}</p>
        <div class="book-meta">${hq.serie}</div>
      </div>
    </article>
  `;
}

function abrirLeitorHQ(hq) {
  let modal = document.getElementById("modal-hq");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "modal-hq";
    modal.className = "hq-modal";
    document.body.appendChild(modal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) fecharLeitorHQ();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("open")) fecharLeitorHQ();
    });
  }

  modal.innerHTML = `
    <div class="hq-modal-inner">
      <div class="hq-modal-head">
        <div>
          <span class="eyebrow">💬 ${hq.tema}</span>
          <h3>${hq.titulo}</h3>
        </div>
        <div class="hq-modal-actions">
          <a class="btn btn-primary btn-sm" href="${hq.imagem}" target="_blank" rel="noopener">⤢ Abrir em nova aba</a>
          <button aria-label="Fechar" id="fechar-hq" class="hq-close">✕</button>
        </div>
      </div>
      <div class="hq-modal-scroll">
        <img src="${hq.imagem}" alt="HQ ${hq.titulo} — página completa">
      </div>
    </div>
  `;

  document.getElementById("fechar-hq").addEventListener("click", fecharLeitorHQ);
  requestAnimationFrame(() => modal.classList.add("open"));
  document.body.style.overflow = "hidden";
}

function fecharLeitorHQ() {
  const modal = document.getElementById("modal-hq");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

function iniciarQuadrinhos() {
  const grid = document.getElementById("grid-quadrinhos");
  if (!grid) return;

  grid.innerHTML = quadrinhos.map(criarCardQuadrinho).join("");

  if (window.observarReveal) window.observarReveal(grid);

  grid.addEventListener("click", (e) => {
    const card = e.target.closest("[data-abrir-hq]");
    if (!card) return;
    const hq = quadrinhos[Number(card.dataset.abrirHq)];
    if (hq) abrirLeitorHQ(hq);
  });

  grid.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest("[data-abrir-hq]");
    if (!card) return;
    e.preventDefault();
    const hq = quadrinhos[Number(card.dataset.abrirHq)];
    if (hq) abrirLeitorHQ(hq);
  });
}

document.addEventListener("DOMContentLoaded", iniciarQuadrinhos);
