# RocketBox API

Esta API foi desenvolvida durante a semana omnistack da [Rocketseat](https://rocketseat.com.br/), a API disponibiliza para as aplicações que a consumirem
a possíbilidade de criação de boxes (pastas) e upload de arquivos dentro das boxes criadas.

A API será publicada no [Heroku](https://www.heroku.com/) para ser consumida por aplicações [web](https://github.com/gabrielmq/rocketbox-web) e mobile desenvolvidas em ReactJS e React Native, 
também desenvolvidas durante a semana Omnistack da [Rocketseat](https://rocketseat.com.br/).

## Executando a API localmente

### Pré-requisitos

* NodeJS v8+
* Yarn ou Npm
* MongoDB

### Endpoints

Abaixo estão listados os endpoints da API

__POST__
  - `/boxes`
    - body: `{ "title": "título box" }` 
  - `/boxes/:boxId/files`
    - body: `form-data - key: file`

__GET__
  - `/boxes/:boxId`

### Subindo a aplicação

* Clone o projeto `git clone https://github.com/gabrielmq/omnistack-backend.git`.
* Acesse o diretório do projeto pelo prompt de comandos.
* Execute o comando `npm install` ou `yarn install` na raiz do diretório, para que as dependências sejam baixadas.
* Antes de iniciar a aplicação, substitua a url de conexão do MongoDB para a url de conexão do MongoDB instalado em seu ambiente.
* Execute o comando `npm start` ou `yarn start` para iniciar a aplicação.
