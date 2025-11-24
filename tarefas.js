let tarefas = [
  {
    nome: 'Comprar leite',
    categoria: 'compras',
    marcado: false
  },
  {
    nome: 'Escutar chimbinha',
    categoria: 'lazer',
    marcado: true
  }
];

const listaEl = document.getElementById("lista-tarefas");
const campoNome = document.getElementById("nova-tarefa-nome");
const campoCategoria = document.getElementById("nova-tarefa-categoria");
const botaoIncluir = document.getElementById("incluir-nova-tarefa");

function insereTarefaNaPagina(tarefa) {
  const li = document.createElement("li");

  li.classList.add("item-tarefa");

  if (tarefa.marcado) {
    li.classList.add("marcado");
  }

  li.classList.add(`categoria-${tarefa.categoria}`);

  li.textContent = tarefa.nome;

  listaEl.appendChild(li);

}


function atualizaLista() {
  listaEl.innerHTML = ""; // limpa a UL

  tarefas.forEach(tarefa => {
    insereTarefaNaPagina(tarefa);
  });
}

atualizaLista();


function adicionaNovaTarefa() {
  const nome = campoNome.value.trim();
  const categoria = campoCategoria.value;

  if (nome === "") return;

  const nova = {
    nome,
    categoria,
    marcado: false
  };

  tarefas.push(nova);

  insereTarefaNaPagina(nova);

  campoNome.value = "";
  campoNome.focus();
}

botaoIncluir.addEventListener("click", adicionaNovaTarefa);


campoNome.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    adicionaNovaTarefa();
  }
});

