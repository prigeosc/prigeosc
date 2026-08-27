# PRIGEOSC — Portal de Geografia

Site-portal dos projetos educacionais da PRIGEOSC: livros em HTML, jogos
hospedados no GitHub e outros projetos, tudo em uma única plataforma.

Feito com **HTML5 + CSS3 + JavaScript puro** — sem frameworks, sem build,
sem dependências. Basta abrir `index.html` no navegador ou publicar no
GitHub Pages.

---

## 📁 Estrutura de pastas

```text
prigeosc/
│
├── index.html              → página principal (todas as seções)
│
├── css/
│   └── style.css            → todo o visual do site
│
├── js/
│   ├── app.js                → menu mobile, animações, comportamentos gerais
│   ├── livros.js             → CADASTRO DOS LIVROS + geração dos cards
│   └── jogos.js               → CADASTRO DOS JOGOS + filtros + geração dos cards
│
├── imagens/
│   ├── logo/                  → logotipo (se tiver um arquivo próprio)
│   ├── prigeosc/               → fotos/artes da mascote (home, sobre, rodapé...)
│   ├── jogos/                  → thumbnails dos jogos (imagens de exemplo já incluídas)
│   └── livros/                 → capas dos livros (imagens de exemplo já incluídas)
│
├── livros/
│   ├── livro1.html … livro4.html  → páginas de exemplo dos livros
│
└── README.md
```

---

## ▶️ Como publicar no GitHub Pages

1. Crie um repositório novo no GitHub (ex: `prigeosc` ou `prigeosc.github.io`
   se quiser que o site fique na raiz do seu usuário).
2. Copie todos os arquivos desta pasta para dentro do repositório.
3. Faça o commit e o push:
   ```bash
   git init
   git add .
   git commit -m "Primeira versão do site PRIGEOSC"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
   git push -u origin main
   ```
4. No GitHub, vá em **Settings → Pages**.
5. Em "Source", selecione a branch `main` e a pasta `/ (root)`.
6. Salve. Em alguns minutos o site estará no ar em:
   `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/`

---

## 📚 Como adicionar um novo livro/site

Veja o guia completo em [`js/livros.js`](js/livros.js) (comentário no topo
do arquivo) — resumo rápido:

1. Publique o material (ex: como um novo repositório no GitHub Pages) e
   copie a URL final (ex: `https://prigeosc.github.io/7ano/`).
2. Coloque uma capa em `imagens/livros/` (proporção recomendada 5:7, ex:
   600×840px) — pode ser uma arte própria ou uma captura de tela do site.
3. Abra `js/livros.js` e copie um bloco do array `livros`, preenchendo:
   título, descrição, categoria, e o campo `pagina` com a URL publicada.
4. Salve. O card aparece automaticamente na seção "Meus livros" — não é
   preciso editar o `index.html`.

> Nota: os links de **7º ano** e **6º ano** enviados ainda não foram
> cadastrados porque, na mensagem original, os dois apontavam para a mesma
> URL do 8º ano (provavelmente um erro de copiar e colar). Assim que você
> confirmar os links corretos, é só seguir os passos acima para adicioná-los.

---

## 🎮 Como adicionar um novo jogo

Veja o guia completo em [`js/jogos.js`](js/jogos.js) — resumo rápido:

1. Coloque uma imagem de prévia do jogo em `imagens/jogos/` (recomendado
   800×500px — pode ser um print de tela real do jogo).
2. Abra `js/jogos.js` e copie um bloco do array `jogos`, preenchendo:
   título, descrição, categoria, dificuldade, tipo, caminho da imagem e a
   URL onde o jogo está hospedado (ex: `https://prigeosc.github.io/jogo/`).
3. Marque `destaque: true` se quiser que ele apareça na seção de destaques
   da Home, e `principal: true` no jogo que deve aparecer no banner grande.
4. Salve. O card é gerado automaticamente, junto com os filtros por
   categoria e a busca por nome.

O site já vem com os **27 jogos e 3 sites de estudo reais** que você enviou,
com descrições escritas a partir do conteúdo de cada página.

---

## 🖼️ Trocando as imagens da mascote

As poses da PRIGEOSC ficam em `imagens/prigeosc/`:

```text
prigeosc-home.png     → Hero da página inicial
prigeosc-livros.png   → (reservado para uso futuro na seção de livros)
prigeosc-jogos.png    → aparece no banner do jogo em destaque
prigeosc-sobre.png    → seção "Sobre a PriGeoSC"
prigeosc-footer.png   → rodapé
```

Basta substituir os arquivos mantendo o mesmo nome — o site já está
preparado para isso. Este projeto já vem com a foto oficial da PRIGEOSC
aplicada nesses lugares; quando você tiver artes específicas para cada
pose (segurando livro, controle de videogame etc.), é só trocar o arquivo.

---

## ✏️ O que ainda é conteúdo de exemplo

Para o site funcionar completo desde já, alguns dados são **demonstrativos**
e estão claramente marcados:

- As 6 imagens de jogos e 4 capas de livros têm uma faixa laranja
  "EXEMPLO — SUBSTITUA A IMAGEM".
- Os links de redes sociais no rodapé e na seção "Redes sociais" apontam
  para `#` (exceto GitHub, que aponta para github.com genérico).
- As URLs dos jogos apontam para `https://prigeosc.github.io/...` fictício.

Substitua esses dados pelos seus reais assim que tiver — a estrutura já
está pronta, então não é necessário mexer em HTML/CSS para isso, apenas
nos arquivos `js/jogos.js`, `js/livros.js` e nos links do rodapé/seção de
redes no `index.html`.

---

## ✅ Checklist antes de publicar

- [ ] Trocar as URLs de exemplo dos jogos pelas reais
- [ ] Trocar as capas/thumbnails de exemplo pelas reais
- [ ] Trocar os links de redes sociais no rodapé e na seção "Redes"
- [ ] Revisar o texto da seção "Sobre a PriGeoSC"
- [ ] Testar o site no celular (menu hambúrguer, cards, filtros)
- [ ] Conferir se todos os links "Abrir livro" e "Jogar" funcionam
