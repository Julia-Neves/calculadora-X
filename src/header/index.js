const containerHeader = document.createElement("header");
containerHeader.id = "div__container__header";

const buttonBar = document.createElement("div");
buttonBar.id = "div__buttonbar__header";

const calculadoraClassicBtn = document.createElement("button");
calculadoraClassicBtn.id = "calculadoraClassicBtn__buttonbar__header";
calculadoraClassicBtn.textContent = "Clássica";

const calculadoraCaloriasBtn = document.createElement("button");
calculadoraCaloriasBtn.id = "calculadoraCaloriasBtn__buttonbar__header";
calculadoraCaloriasBtn.textContent = "Calorias";

const calculadoraImcBtn = document.createElement("button");
calculadoraImcBtn.id = "calculadoraImcBtn__buttonbar__header";
calculadoraImcBtn.textContent = "Imc";

const inicioBtn = document.createElement("button");
inicioBtn.id = "inicioBtn__buttonbar__header";
inicioBtn.textContent = "Inicio";

buttonBar.append(
  inicioBtn,
  calculadoraClassicBtn,
  calculadoraCaloriasBtn,
  calculadoraImcBtn
);

function headerFactorie() {
  const header = {
    container: containerHeader,
    content: [buttonBar],
    elements: {
      container,
      buttonBar,
      calculadoraClassicBtn,
      calculadoraCaloriasBtn,
      calculadoraImcBtn,
      inicioBtn
    },
  };
  //Jogando todo o conteudo do header.content
  header.container.append(...header.content);

  return header;
}
