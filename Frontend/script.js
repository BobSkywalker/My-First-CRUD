let objetos = [
  {
    titulo: "Roblox",
    data: "01/11/2024",
    descricao: "qualquercoisa",
    prioridade: "alta",
    completado: false,
  },
  {
    titulo: "Minecraft",
    data: "01/12/2024",
    descricao: "qualquercoisa123",
    prioridade: "media",
    completado: false,
  },
  {
    titulo: "CSGO",
    data: '01/12/2024',
    descricao: "qualquercoisa123412",
    prioridade: "baixa",
    completado: true,
  },
];

const botao = document.querySelector("#botao");

botao.addEventListener("click", registrarDados);

const titulo = document.querySelector("#titulo");
const descricao = document.querySelector("#descricao");
const data = document.querySelector("#data");
  data.min = dataAtualizada()
const prioridade = document.querySelector("#prioridade");
const forme = document.querySelector('#forme')
forme.addEventListener('submit', (evento) => {
  evento.preventDefault()
})

function dataAtualizada() {
  const today = new Date()
  let dia = today.getDate()
  if (dia < 10) {
    dia = `0${dia}`
  }
  let mes = today.getMonth() + 1
  if (mes < 10) {
    mes = `0${dia}`
  }
  const ano = today.getFullYear()
  return ano + '-' + mes + '-' + dia;
}

function registrarDados() {
  const valorTitulo = titulo.value;
  const valorDescricao = descricao.value;
  const valorData = data.value;
  const valorPrioridade = prioridade.value;

  const dado = {
    titulo: valorTitulo,
    data: valorData,
    descricao: valorDescricao,
    prioridade: valorPrioridade,
  };

  const tituloExiste = objetos.filter((item) => {
    return valorTitulo === item.titulo;
  });

  if (!tituloExiste.length > 0) {
    objetos.push(dado);
  } else {
    objetos = objetos.map((item) => {
      if (valorTitulo === item.titulo) {
        return dado;
      }
      return item;
    });
  }
    renderizarContainer();
    renderizarContainer();
  }

function renderizarCard(dado) {
  const checkBox = document.createElement("input");
  checkBox.classList.add("Checkbox");
  checkBox.checked = dado.completado;
  checkBox.type = "checkbox";
  checkBox.addEventListener("click", () => {
    atualizarCheckbox(dado.titulo);
  });

  const deletar = document.createElement("button");
  deletar.classList.add("deletar");
  deletar.innerHTML = "Deletar";

  deletar.addEventListener("click", () => {
    deletarVitor(dado.titulo);
  });

  const editar = document.createElement("button");
  editar.classList.add("editar");
  editar.innerHTML = "Editar";
  editar.addEventListener("click", () => {
    editarVitor(dado);
  });

  const card = document.createElement("div");
  card.classList.add("card");

  const principal = document.createElement("div");
  principal.classList.add("cardPrincipal");

  const principal02 = document.createElement("div");
  principal02.classList.add("cardPrincipal02");

  const titulo = document.createElement("h1");
  titulo.classList.add("cardTitulo");
  titulo.innerHTML = dado.titulo;

  const prioridade = document.createElement("h1");
  prioridade.classList.add("cardPrioridade");
  prioridade.innerHTML = dado.prioridade;

  const data = document.createElement("h1");
  data.classList.add("cardData");
  data.innerHTML = dado.data;

  const descricao = document.createElement("p");
  descricao.classList.add("cardDescricao");
  descricao.innerHTML = dado.descricao;

  principal02.append(titulo, prioridade);
  principal.append(principal02, data, checkBox);
  card.append(principal, descricao, deletar, editar);

  return card;
}

function renderizarContainer() {
  const container = document.querySelector("#container");
  container.textContent = "";
  for (let count = 0; count < objetos.length; count++) {
    const card = renderizarCard(objetos[count]);
    container.append(card);
  }
}

renderizarContainer();

function deletarVitor(titulo) {
  objetos = objetos.filter((item) => {
    return item.titulo !== titulo;
  });
  renderizarContainer();
}

function atualizarCheckbox(titulo) {
  objetos = objetos.map((item) => {
    if (item.titulo == titulo) {
      return { ...item, completado: !item.completado };
    }
    return item;
  });
}

function editarVitor(dado) {
  titulo.value = dado.titulo;
  descricao.value = dado.descricao;
  data.value = formatarData(dado.data)
  prioridade.value = dado.prioridade;
}

// yyyy-MM-dd

function formatarData(data) {
  const formatoIso = new Date(data).toISOString()
  return formatoIso.split('T')[0]
}

// Apend adiciona um elemento em outro

// container.appendChild

/*  
<div class="card">
    <div class="principal">
        <div class="principal02">
            <h1 class="titulo">Titulo -</h1>
            <h1 class="prority">Alta</h1>
        </div>
        <h1 class="date">01/11/2024</h1>
    </div>
    <p class="descricao">AOFDSIOFSDIFJDS</p>
</div> 
*/
