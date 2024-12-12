const express = require("express");
const app = express();
const cors = require("cors");

// GET, POST, PUT, DELETE

let games = [
  {
    id: 4,
    titulo: "CounterStrike",
    descricao: "Testo do usuario",
    data: "12 / 11 / 2001",
    prioridade: "Alta",
  },
  {
    id: 5,
    titulo: "WorldOfWarCraft",
    descricao: "Testo Warcraft",
    data: "24 / 7 / 1992",
    prioridade: "Baixa",
  },
];

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/games/:id", (request, response) => {
  const id = request.body.id;
  const jogo = jogos.find((jogo) => jogo.id === Number(id));
  if (!jogo) {
    response.status(400).send("Id não existente");
  } else {
    response.send(jogo);
  }
});

app.post("/games/create", (request, response) => {
  const corpo = request.body;
  console.log(corpo);
  let gameExistente = false;
  for (let indice = 0; indice < games.length; indice++) {
    const jogo = games[indice];
    console.log(jogo);
    if (jogo.id == corpo.id) {
      gameExistente = true;
    }
  }
  if (gameExistente) {
    response.status(400).send("Este jogo já esta cadastrado");
  } else {
    games.push(corpo);
    response.send(games);
  }
});

app.delete("/games/:id", (request, response) => {
    const id = request.params.id
    games = games.filter((jogo) => jogo.id != id);
    response.send("Usuario excluido com sucesso !");
})

app.put("/games/update", (request, response) => {
  const corpo = request.body;
  let gameExistente = false;
  for (let indice = 0; indice < games.length; indice++) {
    const jogo = games[indice];
    if (jogo.id === corpo.id) {
      gameExistente = true;
    }
  }
  if (gameExistente) {
    games = games.map((jogo) => {
      if (jogo.id === corpo.id) {
        return {
          ...jogo,
          titulo: corpo.titulo,
          descricao: corpo.descricao,
          data: corpo.data,
          prioridade: corpo.prioridade,
        };
      } else {
        return jogo;
      }
    });
    response.send(games);
  } else{
    response.status(400).send('Não encontrado')
  }
});

app.get("/games", (request, response) => {
  response.send(games);
});

app.listen(3030);
