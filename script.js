let button = document.querySelector("button");
let input = document.getElementById("input-tarefa");
let ul = document.getElementById("ul");

function addLista() {
  let li = document.createElement("li");

  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  function addEfeitoInput() {
    li.classList.toggle("done");
  }

  li.addEventListener("click", addEfeitoInput);

  let xBtn = document.createElement("button");
  xBtn.appendChild(document.createTextNode("X"));
  li.appendChild(xBtn);
  xBtn.addEventListener("click", deleteListItem);

  function deleteListItem() {
    li.classList.add("delete");
  }
}

function valorInput() {
  return input.value.length;
}

button.addEventListener("click", addListaMouse);
input.addEventListener("keypress", addListaTeclado);

function addListaMouse() {
  if (valorInput() > 0) {
    addLista();
  } else if (valorInput() == 0) {
    alert("Insira uma tarefa!");
  }
}

function addListaTeclado() {
  if (valorInput() > 0 && event.which === 13) {
    addLista();
  }
}
