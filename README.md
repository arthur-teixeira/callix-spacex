# callix-spacex
Projeto fullstack que se comunica com a API da Spacex e mostra
informações sobre os lançamentos da empresa.

O backend é escrito em Typescript utilizando Express. O frontend também é escrito
em Typescript, utilizando React.

Para rodar o backend, é necessário rodar o comando
```console
$ cd backend
$ yarn build:run
```
ou então
```console
$ cd backend
$ yarn dev
```
para rodar com watch.

Para rodar o frontend, é necessário rodar o comando
```console
$ cd frontend
$ yarn start
```

Além disso, o frontend está rodando na 
Vercel [nesta url](https://callix-spacex-6uiyowc6d-arthur-teixeira.vercel.app),
e o backend está rodando no Render [nesta url](https://callix-spacex-backend.onrender.com).

O Render na sua versão gratuita é um serviço extremamente lento, então recomendo
rodar o projeto localmente.

O Google Optimize está integrado com o frontend, mas para ser possível visualizar
ambas as versões do teste A/B, é necessário incluir um alias para o localhost no arquivo de hosts
da sua máquina.

Editar a linha do localhost da seguinte maneira:
```console
127.0.0.1  localhost localhost.com
```

Com isso feito, agora é possível rodar a aplicação normalmente e acessá-la
pela url localhost.com:3000.
Em uma versão, a barra de navegação é preta, e na outra, ela é branca.
