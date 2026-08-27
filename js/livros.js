/* =========================================================================
   PRIGEOSC — js/livros.js
   Cadastro dos livros/sites de estudo publicados em prigeosc.github.io.

   COMO ADICIONAR UM NOVO LIVRO/SITE:
   1. Coloque a capa em imagens/livros/ (recomendado: 600x840px, proporção 5:7).
   2. Copie um bloco do array "livros" abaixo e preencha os campos.
   3. Em "pagina", use a URL publicada (ex: https://prigeosc.github.io/6ano/)
      — não precisa ser um arquivo local dentro de livros/.
   4. Salve. O card é gerado automaticamente.

   Campos:
   - titulo:      nome do material
   - descricao:   1-2 frases sobre o conteúdo
   - categoria:   uma das categorias usadas nos filtros (veja lista abaixo)
   - paginas:     texto livre sobre o formato (ou null para omitir)
   - imagem:      caminho da capa
   - pagina:      URL do material (pode ser link externo do GitHub Pages)
   - destaque:    true/false — aparece na seção "Destaques" da Home
   ========================================================================= */

const CATEGORIAS_LIVROS = [
  "Todos",
  "Geografia Física",
  "Geografia Humana",
  "Geopolítica",
  "Meio Ambiente",
  "Brasil",
  "Vestibular",
  "ENEM",
  "Revisão",
];

const livros = [
  {
    titulo: "Trilha do Terceirão",
    descricao:
      "Trilha visual de revisão para o 3º ano: 30 blocos de conteúdo, 55 efemérides para repertório e 11 músicas autorais para fixar datas cantando.",
    categoria: "Revisão",
    paginas: "Trilha interativa",
    imagem: "imagens/livros/trilharevisao.jpg",
    pagina: "https://prigeosc.github.io/trilharevisao/",
    destaque: true,
  },
  {
    titulo: "O Mundo Globalizado",
    descricao:
      "Apresentação interativa sobre globalização, economia e transformações do espaço mundial, para os Anos Finais do Ensino Fundamental.",
    categoria: "Geopolítica",
    paginas: "Geografia · 9º ano",
    imagem: "imagens/livros/9ano.jpg",
    pagina: "https://prigeosc.github.io/9ano/",
    destaque: true,
  },
  {
    titulo: "Economia e Geopolítica Mundial",
    descricao:
      "Apresentação interativa sobre economia, blocos e geopolítica mundial, conectando o espaço global às transformações do território.",
    categoria: "Geopolítica",
    paginas: "Geografia · 8º ano",
    imagem: "imagens/livros/8ano.jpg",
    pagina: "https://prigeosc.github.io/8ano/",
    destaque: true,
  },
  {
    titulo: "Conhecendo o Território Brasileiro",
    descricao:
      "Apresentação interativa sobre Território, População e Economia brasileira.",
    categoria: "Geopolítica",
    paginas: "Geografia · 7º ano",
    imagem: "imagens/livros/7ano.jpg",
    pagina: "https://prigeosc.github.io/7ano/",
    destaque: true,
  },
  {
    titulo: "Conceitos base",
    descricao:
      "Apresentação interativa sobre Espaço, Natureza e Sociedade.",
    categoria: "Geopolítica",
    paginas: "Geografia · 6º ano",
    imagem: "imagens/livros/6ano.jpg",
    pagina: "https://prigeosc.github.io/6ano/",
    destaque: true,
  },
];

function criarCardLivro(livro) {
  return `
    <article class="book-card reveal" data-categoria="${livro.categoria}" data-titulo="${livro.titulo.toLowerCase()}">
      <a class="book-cover" href="${livro.pagina}" target="_blank" rel="noopener" aria-label="Abrir ${livro.titulo}">
        <img src="${livro.imagem}" alt="Capa do material ${livro.titulo}" loading="lazy">
      </a>
      <div class="book-body">
        <span class="eyebrow">📚 ${livro.categoria}</span>
        <h3>${livro.titulo}</h3>
        <p>${livro.descricao}</p>
        <div class="book-meta">${livro.paginas ? livro.paginas : "Material digital"}</div>
        <a class="btn btn-primary btn-sm btn-block" href="${livro.pagina}" target="_blank" rel="noopener">📖 Abrir</a>
      </div>
    </article>
  `;
}

function renderLivros(lista, container) {
  if (!container) return;
  if (lista.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1;">
        <div class="ic">📚</div>
        <p>Nenhum material encontrado com esse filtro. Tente outra categoria ou termo de busca.</p>
      </div>`;
    return;
  }
  container.innerHTML = lista.map(criarCardLivro).join("");
  if (window.observarReveal) window.observarReveal(container);
}

function iniciarLivros() {
  const grid = document.getElementById("grid-livros");
  const filtrosWrap = document.getElementById("filtros-livros");
  const busca = document.getElementById("busca-livros");
  if (!grid) return;

  if (filtrosWrap) {
    filtrosWrap.innerHTML = CATEGORIAS_LIVROS.map(
      (cat, i) =>
        `<button class="filter-btn${i === 0 ? " active" : ""}" data-cat="${cat}">${cat}</button>`
    ).join("");
  }

  let categoriaAtual = "Todos";
  let termoBusca = "";

  function aplicarFiltro() {
    let lista = livros;
    if (categoriaAtual !== "Todos") {
      lista = lista.filter((l) => l.categoria === categoriaAtual);
    }
    if (termoBusca.trim() !== "") {
      const termo = termoBusca.toLowerCase();
      lista = lista.filter((l) => l.titulo.toLowerCase().includes(termo));
    }
    renderLivros(lista, grid);
  }

  if (filtrosWrap) {
    filtrosWrap.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      filtrosWrap.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      categoriaAtual = btn.dataset.cat;
      aplicarFiltro();
    });
  }

  if (busca) {
    busca.addEventListener("input", (e) => {
      termoBusca = e.target.value;
      aplicarFiltro();
    });
  }

  aplicarFiltro();

  const gridDestaqueLivros = document.getElementById("grid-destaque-livros");
  if (gridDestaqueLivros) {
    renderLivros(livros.filter((l) => l.destaque).slice(0, 3), gridDestaqueLivros);
  }
}

document.addEventListener("DOMContentLoaded", iniciarLivros);
