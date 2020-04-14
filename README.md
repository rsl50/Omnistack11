
<h1 align="center">
    <img alt="BeTheHeroLogo" title="#BeTheHero" src=".github/bethehero.svg" width="200px" />
</h1>

<h4 align="center"> 
  :heavy_check_mark: :rocket: Semana OmniStack 11.0 :rocket: :heavy_check_mark:
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rsl50/Omnistack11?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/rsl50/Omnistack11">
  
  <a href="https://www.linkedin.com/in/robsonslima/">
    <img alt="Made by Robson Lima" src="https://img.shields.io/badge/made%20by-Robson Lima-%2304D361">
  </a>

  <a href="https://github.com/rsl50/Omnistack11/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/rsl50/Omnistack11">
  </a>

<a aria-label="Completed" href=".github/Certificado_OmniStack11.pdf">
    <img src="https://img.shields.io/badge/OmniStack-done-green?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEVHcExxWsF0XMJzXMJxWcFsUsD///9jRrzY0u6Xh9Gsn9n39fyMecy0qd2bjNJWBT0WAAAABHRSTlMA2Do606wF2QAAAGlJREFUGJVdj1cWwCAIBLEsRU3uf9xobDH8+GZwUYi8i6ucJwrxKE+7D0G9Q4vlYqtmCSjndr4CgCgzlyFgfKfKCVO0LrPKjmiqMxGXkJwNnXskqWG+1oSM+BSwD8f29YLNjvx/OQrn+g99oQSoNmt3PgAAAABJRU5ErkJggg=="></img>
  </a>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/rsl50/Omnistack11/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/rsl50/Omnistack11?style=social">
  </a>
</p>

<p align="center">
  <a href="https://insomnia.rest/run/?label=SemanaOmnistack11&uri=https%3A%2F%2Fraw.githubusercontent.com%2Frsl50%2FOmnistack11%2Fmaster%2FInsomnia_2020-04-14.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-usar">Como Usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<br>

<p align="center">
  <img alt="BeTheHero" src=".github/bethehero.png" width="100%">
</p>

## :rocket: Tecnologias

Para o desenvolvimento do projeto foi utilizada uma stack com as seguintes tecnologias:

- 💹 **[Node.js](https://nodejs.org/en/)** — Web framework que permite utilizar javascript tanto no frontend quanto no backend;
- 🛢️ **[Knex](http://knexjs.org/)** — Builder de SQL Query para Javascript
- 💅 **Styled Components** — Tecnologia para componentizar estilização CSS no React através do Javascript
- ⚛️ **[React Js](https://reactjs.org)** — Biblioteca Javascript para construção de interfaces;
- ⚛️ **[React Native](https://reactnative.dev/)** — Biblioteca que provê uma maneira eficiente de criar aplicações nativas para Android e iOS;
- ⚛️ **[Expo](https://expo.io/)** — É uma plataforma de código aberto para criar aplicativos nativos universais para Android, iOS e web com JavaScript e React.

## 💻 Projeto

O BeTheHero é um projeto que visa conectar pessoas que desejam fazer contribuições monetárias a ONG's (Organizações não governamentais) que precisam de ajuda.

<h1 align="center">
    <img alt="Login-Page" title="Login-Page" src=".github/preview.jpg" width="500px" />
</h1>

## 🔖 Layout

Você pode visualizar o layout do projeto no formato através [desse link](https://www.figma.com/file/2C2yvw7jsCOGmaNUDftX9n/Be-The-Hero---OmniStack-11?node-id=37%3A394). Lembrando que você irá precisar ter uma conta no [Figma](http://figma.com/).

## :information_source: Como usar

Para clonar e rodar esta aplicação, você precisará [Git](https://git-scm.com), [Node.js](https://nodejs.org/) + [Chocolatey](https://chocolatey.org/install) instalado no seu computador.

Do seu terminal (GitBash, PowerShell, etc):

### :running: Rodando
```bash
# Clone este repositório
$ git clone https://github.com/rsl50/Omnistack11

# Vá para o Backend
$ cd Omnistack11/www/omni11/aulas/backend

# Instale o NodeJS
$ choco install nodejs-lts

# Instale as dependências
$ npm install 

# Rode os Migrates
$ npx knex migrate:latest

# Rode testes
$ npm test

# Rode o backend
$ npm start

# Vá para o Frontend
$ cd Omnistack11/www/omni11/aulas/frontend

# Rode o Frontend
$ npm start

# Vá para o Mobile
$ cd Omnistack11/www/omni11/aulas/mobile

# Rode o Mobile
$ npm start



```

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com :sparkling_heart: e ☕ por Robson Lima para a Semana OmniStack 11 da Rocketseat 
:wave: [Comunidade no Discord!](https://discordapp.com/invite/gCRAFhc)

![OmniStack_-_Wallpaper_1440x900-min](https://user-images.githubusercontent.com/54380237/77316424-2bb95480-6ce8-11ea-98d3-06c782e0d0ac.png)