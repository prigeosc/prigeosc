/* =========================================================================
   PRIGEOSC — js/jogos.js
   Cadastro dos jogos educacionais publicados em prigeosc.github.io.

   COMO ADICIONAR UM NOVO JOGO:
   1. Coloque a imagem de prévia em imagens/jogos/ (recomendado: 800x500px).
   2. Copie um bloco do array "jogos" abaixo e preencha os campos.
   3. Salve. O card é gerado automaticamente — não é preciso mexer no HTML.

   Campos:
   - titulo:      nome do jogo (string)
   - descricao:   1-2 frases sobre o jogo (string)
   - categoria:   uma das categorias usadas nos filtros (veja lista abaixo)
   - dificuldade: "Fácil" | "Médio" | "Difícil"
   - tipo:        tipo de jogo, ex: "Quiz", "Investigação", "Escape room"
   - imagem:      caminho da imagem de prévia
   - url:         link do jogo no GitHub Pages
   - destaque:    true/false — aparece na seção "Destaques" da Home
   - principal:   true apenas no jogo que deve aparecer no banner grande
   ========================================================================= */

const CATEGORIAS_JOGOS = [
  "Todos",
  "Geografia Física",
  "Geografia Humana",
  "Meio Ambiente",
  "Climatologia",
  "Cartografia",
  "População",
  "Urbanização",
  "Industrialização",
  "Hidrografia",
  "Geopolítica",
  "ENEM",
];

const jogos = [
  {
    titulo: "Territórios da Mente",
    descricao:
      "Uma jornada pelas categorias da Geografia com Milton Santos: restaure Lugar, Paisagem, Território, Região e Espaço Geográfico antes que o mundo perca suas ações.",
    categoria: "Geografia Humana",
    dificuldade: "Médio",
    tipo: "Jornada conceitual",
    imagem: "imagens/jogos/territoriosdamente.jpg",
    url: "https://prigeosc.github.io/territoriosdamente/",
  },
  {
    titulo: "Projeções Cartográficas",
    descricao:
      "Veja no mapa-múndi real como as famílias cilíndrica, cônica e azimutal distorcem os continentes — e teste se você reconhece cada uma.",
    categoria: "Cartografia",
    dificuldade: "Médio",
    tipo: "Comparador + quiz",
    imagem: "imagens/jogos/projecoescartograficas.jpg",
    url: "https://prigeosc.github.io/projecoescartograficas/",
  },
  {
    titulo: "Detetive da Distorção",
    descricao:
      "Arraste o slider e veja os continentes se deformarem em tempo real. Depois, vista o chapéu de detetive e descubra qual projeção foi usada só com pistas.",
    categoria: "Cartografia",
    dificuldade: "Médio",
    tipo: "Investigação",
    imagem: "imagens/jogos/detetive-distorcao.jpg",
    url: "https://prigeosc.github.io/detetive-e-distorcao-ao-vivo/",
  },
  {
    titulo: "Trilha do Solo",
    descricao:
      "Uma escavação em três etapas pelo perfil da terra: monte as camadas, decifre as pistas de campo e cave até a rocha matriz reconhecendo os horizontes O, A, B, C e R.",
    categoria: "Geografia Física",
    dificuldade: "Fácil",
    tipo: "Escavação interativa",
    imagem: "imagens/jogos/trilhasolo.jpg",
    url: "https://prigeosc.github.io/trilhasolo/",
  },
  {
    titulo: "Batalha do Intemperismo",
    descricao:
      "Monte sua equipe de Intemperis — físico, químico e biológico — e enfrente o Capitão Granito num duelo por tipo, para desgastar o maciço rochoso.",
    categoria: "Geografia Física",
    dificuldade: "Médio",
    tipo: "Batalha por turnos",
    imagem: "imagens/jogos/batalhaintemperismo.jpg",
    url: "https://prigeosc.github.io/batalhaintemperismo/",
  },
  {
    titulo: "Corrida para o Centro",
    descricao:
      "Três famílias migram do campo para a cidade. Role o dado e descubra os fatores de expulsão (push) e atração (pull) do êxodo rural.",
    categoria: "População",
    dificuldade: "Fácil",
    tipo: "Tabuleiro",
    imagem: "imagens/jogos/corridaparaocentro.jpg",
    url: "https://prigeosc.github.io/corridaparaocentro/",
  },
  {
    titulo: "PokéCidade",
    descricao:
      "Transforme uma vila rural em cidade sem destruir tudo pelo caminho: gerencie urbanização, industrialização, poluição e felicidade da população.",
    categoria: "Urbanização",
    dificuldade: "Médio",
    tipo: "Simulação de gestão",
    imagem: "imagens/jogos/pokecidade.jpg",
    url: "https://prigeosc.github.io/pokecidade/",
  },
  {
    titulo: "Caça ao Poluidor",
    descricao:
      "Clique só nas fontes de poluição escondidas no mapa antes que o tempo acabe — cuidado com as pegadinhas sustentáveis.",
    categoria: "Meio Ambiente",
    dificuldade: "Fácil",
    tipo: "Clique rápido",
    imagem: "imagens/jogos/cacapoluidor.jpg",
    url: "https://prigeosc.github.io/cacapoluidor/",
  },
  {
    titulo: "Trilha do Clima",
    descricao:
      "Quatro estações: ajuste os elementos do tempo, viaje pelo mundo entendendo os fatores climáticos, investigue fenômenos e monte a linha do tempo de um furacão.",
    categoria: "Climatologia",
    dificuldade: "Médio",
    tipo: "Trilha por estações",
    imagem: "imagens/jogos/trilhaclima.jpg",
    url: "https://prigeosc.github.io/trilhaclima/",
  },
  {
    titulo: "Guardiões das Águas",
    descricao:
      "Três fases para explorar rios e bacias hidrográficas do Brasil e do mundo: encontre a bacia, leve o rio até a foz e vire guardião das águas.",
    categoria: "Hidrografia",
    dificuldade: "Médio",
    tipo: "Trilha em 3 fases",
    imagem: "imagens/jogos/guardiaodasaguas.jpg",
    url: "https://prigeosc.github.io/guardiaodasaguas/",
    destaque: true,
  },
  {
    titulo: "Missão Atmosfera",
    descricao:
      "Cinco fenômenos atmosféricos, cinco estações de missão: uma investigação geográfica sobre o ar que a gente respira e que também é disputado.",
    categoria: "Climatologia",
    dificuldade: "Médio",
    tipo: "Investigação",
    imagem: "imagens/jogos/missaoatmosfera.jpg",
    url: "https://prigeosc.github.io/missaoatmosfera/",
  },
  {
    titulo: "Missão Mobilidade 2050",
    descricao:
      "GeoCity está em crise: domine os 5 modais de transporte e enfrente a transição energética para reconstruir o sistema de mobilidade do futuro.",
    categoria: "Urbanização",
    dificuldade: "Médio",
    tipo: "RPG por missões",
    imagem: "imagens/jogos/geocitymobilidade.jpg",
    url: "https://prigeosc.github.io/geocitymobilidade/",
  },
  {
    titulo: "Jogos dos Biomas Brasileiros",
    descricao:
      "Seis minijogos para explorar Amazônia, Cerrado, Caatinga, Pantanal, Mata Atlântica e a história ambiental do Brasil, com a Prigeosc como guia.",
    categoria: "Meio Ambiente",
    dificuldade: "Fácil",
    tipo: "Coletânea de minijogos",
    imagem: "imagens/jogos/biomas-brasileiros.jpg",
    url: "https://prigeosc.github.io/biomas-brasileiros/",
    destaque: true,
  },
  {
    titulo: "Defesa Civil na Escola",
    descricao:
      "Investigue riscos ambientais em Palhoça (SC), tome decisões seguras diante de enchentes e emergências, e proteja a comunidade em 6 fases.",
    categoria: "Meio Ambiente",
    dificuldade: "Fácil",
    tipo: "Missão narrativa",
    imagem: "imagens/jogos/projetodefesaph.jpg",
    url: "https://prigeosc.github.io/projetodefesaph/",
  },
  {
    titulo: "Antártica: O Continente Sem Dono",
    descricao:
      "O continente mais frio, mais seco e mais isolado do planeta não pertence a nenhum país — entenda por que isso é um acordo político em 5 fases de expedição.",
    categoria: "Geopolítica",
    dificuldade: "Médio",
    tipo: "Expedição por fases",
    imagem: "imagens/jogos/antartica.jpg",
    url: "https://prigeosc.github.io/antartica/",
  },
  {
    titulo: "Missão América",
    descricao:
      "Trilogia completa: localize, expedicione e analise o continente americano — dos mapas às desigualdades territoriais.",
    categoria: "Geopolítica",
    dificuldade: "Médio",
    tipo: "Campanha (3 missões)",
    imagem: "imagens/jogos/missaoamerica.jpg",
    url: "https://prigeosc.github.io/missaoamerica/",
  },
  {
    titulo: "Missão África",
    descricao:
      "Localize o território africano, compreenda as forças da natureza que o moldaram e questione como ele foi produzido — colonialismo, recursos e geopolítica.",
    categoria: "Geopolítica",
    dificuldade: "Médio",
    tipo: "Expedição por capítulos",
    imagem: "imagens/jogos/missaoafrica.jpg",
    url: "https://prigeosc.github.io/missaoafrica/",
  },
  {
    titulo: "A Sala do Atlas",
    descricao:
      "Escape room em 9 minutos: quatro cadeados sobre blocos econômicos, DIT e fluxos migratórios para escapar da globalização — modo difícil.",
    categoria: "ENEM",
    dificuldade: "Difícil",
    tipo: "Escape room",
    imagem: "imagens/jogos/escaperoomglobalizacao.jpg",
    url: "https://prigeosc.github.io/escaperoomglobaliza-o/",
    destaque: true,
    principal: true,
  },
  {
    titulo: "Trilha 3º Ano — Modo Game",
    descricao:
      "A trilha de revisão do terceirão em versão RPG: XP, níveis, sequência de dias e mapas mentais desbloqueáveis a cada etapa concluída.",
    categoria: "ENEM",
    dificuldade: "Médio",
    tipo: "Trilha gamificada",
    imagem: "imagens/jogos/trilharevisaogame.jpg",
    url: "https://prigeosc.github.io/trilharevisaogame/",
  },
  {
    titulo: "A Jornada da Caneta",
    descricao:
      "Antes de chegar à sua mochila, uma caneta percorre meio mundo. Siga a rota da cadeia produtiva global no mapa e vire analista de cadeia de suprimentos.",
    categoria: "Geopolítica",
    dificuldade: "Médio",
    tipo: "Rastreamento no mapa",
    imagem: "imagens/jogos/jornadacaneta.jpg",
    url: "https://prigeosc.github.io/jornadacaneta/",
  },
  {
    titulo: "Arquivo da Industrialização",
    descricao:
      "Os registros sobre a industrialização corromperam e a sala trancou: restaure fatores, cronologia, efeitos e modelos de industrialização antes que a energia acabe.",
    categoria: "Industrialização",
    dificuldade: "Difícil",
    tipo: "Escape room",
    imagem: "imagens/jogos/escaperoomindustria.jpg",
    url: "https://prigeosc.github.io/escaperoomindustria/",
  },
  {
    titulo: "Painel Industrial",
    descricao:
      "Cinco módulos num painel de operações: classifique setores primário/secundário/terciário, monte cadeias produtivas e construa uma cidade industrial.",
    categoria: "Industrialização",
    dificuldade: "Médio",
    tipo: "Painel de minijogos",
    imagem: "imagens/jogos/painel-industrial.jpg",
    url: "https://prigeosc.github.io/painel-industrial/",
  },
  {
    titulo: "Detetive do Futuro",
    descricao:
      "Central de investigação demográfica: leia pirâmides etárias, classifique PEA/PEI, calcule taxas demográficas e investigue movimentos sociais como o MST.",
    categoria: "População",
    dificuldade: "Médio",
    tipo: "Investigação",
    imagem: "imagens/jogos/detetivedofuturo.jpg",
    url: "https://prigeosc.github.io/detetivedofuturo/",
  },
  {
    titulo: "Trilha da População Brasileira",
    descricao:
      "Entenda como o povo brasileiro se formou e para onde está indo: linha do tempo, mapa interativo e simulador da transição demográfica.",
    categoria: "População",
    dificuldade: "Médio",
    tipo: "Trilha em 4 fases",
    imagem: "imagens/jogos/trilhademografica.jpg",
    url: "https://prigeosc.github.io/Trilha-formacao-e-projecoes-demograficas/",
  },
  {
    titulo: "A Sala dos Territórios",
    descricao:
      "Escape room em 9 minutos: cinco cadeados, um para cada grande região brasileira — natureza, economia, população e problemas ambientais. Modo difícil.",
    categoria: "ENEM",
    dificuldade: "Difícil",
    tipo: "Escape room",
    imagem: "imagens/jogos/escaperegioes.jpg",
    url: "https://prigeosc.github.io/escaperegioes/",
  },
  {
    titulo: "A Sala das Reservas",
    descricao:
      "Escape room sobre petróleo, carvão mineral, gás natural e minérios: recursos não renováveis, esgotamento e transição energética. Modo difícil.",
    categoria: "ENEM",
    dificuldade: "Difícil",
    tipo: "Escape room",
    imagem: "imagens/jogos/escapenaorenovavel.jpg",
    url: "https://prigeosc.github.io/escaperoomnaorenovavel/",
  },
  {
    titulo: "Monte sua Região",
    descricao:
      "Combine clima, vegetação e economia e descubra qual região do Brasil você criou, explorando junto com a Prigeosc.",
    categoria: "Geografia Física",
    dificuldade: "Fácil",
    tipo: "Combinação criativa",
    imagem: "imagens/jogos/montesuaregiao.jpg",
    url: "https://prigeosc.github.io/montesuaregi-o/",
  },
];

/* ---------- Renderização ---------- */
function criarCardJogo(jogo) {
  return `
    <article class="game-card reveal" data-categoria="${jogo.categoria}" data-titulo="${jogo.titulo.toLowerCase()}">
      <a class="game-thumb" href="${jogo.url}" target="_blank" rel="noopener" aria-label="Jogar ${jogo.titulo}">
        <img src="${jogo.imagem}" alt="Prévia do jogo ${jogo.titulo}" loading="lazy">
        <span class="badge-corner">${jogo.tipo}</span>
        <span class="stamp badge-diff" data-d="${jogo.dificuldade}">${jogo.dificuldade}</span>
        <span class="play-overlay"><span class="play-btn" aria-hidden="true">▶</span></span>
      </a>
      <div class="game-body">
        <span class="eyebrow">🌎 ${jogo.categoria}</span>
        <h3>${jogo.titulo}</h3>
        <p>${jogo.descricao}</p>
        <div class="game-actions">
          <a class="btn btn-primary btn-sm" href="${jogo.url}" target="_blank" rel="noopener">🎮 Jogar</a>
          <button class="btn btn-ghost btn-sm" type="button" data-detalhes='${JSON.stringify(jogo).replace(/'/g, "&apos;")}'>👁️ Detalhes</button>
        </div>
      </div>
    </article>
  `;
}

function renderJogos(lista, container) {
  if (!container) return;
  if (lista.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1;">
        <div class="ic">🧭</div>
        <p>Nenhum jogo encontrado com esse filtro. Tente outra categoria ou termo de busca.</p>
      </div>`;
    return;
  }
  container.innerHTML = lista.map(criarCardJogo).join("");
  if (window.observarReveal) window.observarReveal(container);
}

function iniciarJogos() {
  const grid = document.getElementById("grid-jogos");
  const filtrosWrap = document.getElementById("filtros-jogos");
  const busca = document.getElementById("busca-jogos");
  if (!grid) return;

  // filtros
  if (filtrosWrap) {
    filtrosWrap.innerHTML = CATEGORIAS_JOGOS.map(
      (cat, i) =>
        `<button class="filter-btn${i === 0 ? " active" : ""}" data-cat="${cat}">${cat}</button>`
    ).join("");
  }

  let categoriaAtual = "Todos";
  let termoBusca = "";

  function aplicarFiltro() {
    let lista = jogos;
    if (categoriaAtual !== "Todos") {
      lista = lista.filter((j) => j.categoria === categoriaAtual);
    }
    if (termoBusca.trim() !== "") {
      const termo = termoBusca.toLowerCase();
      lista = lista.filter((j) => j.titulo.toLowerCase().includes(termo));
    }
    renderJogos(lista, grid);
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

  // destaques na home
  const gridDestaqueJogos = document.getElementById("grid-destaque-jogos");
  if (gridDestaqueJogos) {
    renderJogos(jogos.filter((j) => j.destaque).slice(0, 3), gridDestaqueJogos);
  }

  // banner do jogo principal
  const bannerWrap = document.getElementById("jogo-principal");
  if (bannerWrap) {
    const principal = jogos.find((j) => j.principal) || jogos[0];
    if (principal) {
      bannerWrap.innerHTML = `
        <div class="fg-copy">
          <span class="eyebrow">🎮 Jogo em destaque</span>
          <h3>${principal.titulo}</h3>
          <p>${principal.descricao}</p>
          <div class="fg-meta">
            <span class="chip">🌎 ${principal.categoria}</span>
            <span class="chip">🎯 ${principal.dificuldade}</span>
            <span class="chip">🧩 ${principal.tipo}</span>
          </div>
          <a class="btn btn-amber" href="${principal.url}" target="_blank" rel="noopener">🎮 Jogar agora</a>
        </div>
        <div class="fg-img">
          <img src="${principal.imagem}" alt="Prévia do jogo ${principal.titulo}" loading="lazy">
        </div>
        <img class="fg-mascot" src="imagens/prigeosc/prigeosc-jogos.png" alt="" aria-hidden="true">
      `;
    }
  }

  // modal simples de detalhes (delegado no grid)
  document.body.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-detalhes]");
    if (!btn) return;
    try {
      const jogo = JSON.parse(btn.dataset.detalhes.replace(/&apos;/g, "'"));
      abrirModalDetalhes(jogo);
    } catch (err) {
      console.error("Não foi possível abrir os detalhes do jogo.", err);
    }
  });
}

function abrirModalDetalhes(jogo) {
  let modal = document.getElementById("modal-detalhes");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "modal-detalhes";
    modal.style.cssText = `
      position:fixed; inset:0; background:rgba(5,10,20,.78);
      display:flex; align-items:center; justify-content:center; z-index:200; padding:24px;`;
    document.body.appendChild(modal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.remove();
    });
  }
  modal.innerHTML = `
    <div style="background:var(--panel); border:1px solid var(--panel-border); border-radius:20px; max-width:480px; width:100%; padding:28px; position:relative;">
      <button aria-label="Fechar" id="fechar-modal" style="position:absolute; top:16px; right:16px; background:none; border:none; color:var(--muted); font-size:1.4rem;">✕</button>
      <img src="${jogo.imagem}" alt="" style="border-radius:14px; margin-bottom:18px;">
      <span class="eyebrow">${jogo.categoria}</span>
      <h3 style="font-family:var(--font-body); font-weight:800; font-size:1.3rem; margin-top:12px;">${jogo.titulo}</h3>
      <p style="color:var(--muted); margin-top:10px;">${jogo.descricao}</p>
      <div style="display:flex; gap:10px; margin:16px 0; flex-wrap:wrap;">
        <span class="chip">🎯 ${jogo.dificuldade}</span>
        <span class="chip">🧩 ${jogo.tipo}</span>
      </div>
      <a class="btn btn-primary btn-block" href="${jogo.url}" target="_blank" rel="noopener">🎮 Jogar agora</a>
    </div>
  `;
  document.getElementById("fechar-modal").addEventListener("click", () => modal.remove());
}

document.addEventListener("DOMContentLoaded", iniciarJogos);
