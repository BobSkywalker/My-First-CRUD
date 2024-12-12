async function minhaApi() {
  const response = await fetch("http://localhost:3030/games");
  const objeto = await response.json();
  return objeto;
}

function pegarValores() {
  const tituloInput = document.getElementById("titulo");
  const descricaoInput = document.getElementById("descricao");
  const dataInput = document.getElementById("data");
  const prioridadeInput = document.getElementById("prioridade");

  const titulo = tituloInput.value;
  const descricao = descricaoInput.value;
  const data = dataInput.value;
  const prioridade = prioridadeInput.value;

  return { titulo, descricao, data, prioridade };
}
