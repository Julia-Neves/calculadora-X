const calculadoraClasscaContainer = calculadoraClassicaFactorie();
const calculadoraCaloriasContainer = calculadoraCaloriasFactorie();
const calculadoraImcContainer = calculadoraImcFactorie();
//desestruturação de objetos
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Atribuicao_via_desestruturacao
const {
  container: headerContainer,
  elements: {
    calculadoraCaloriasBtn: caloriaBtn,
    calculadoraClassicBtn: classicBtn,
    calculadoraImcBtn: imcBtn,
  },
} = headerFactorie();

const containerCalcudoras = document.createElement("div");
containerCalcudoras.id = "div__container__calculadoras";

classicBtn.onclick = function () {
  containerCalcudoras.innerHTML = "";
  containerCalcudoras.appendChild(calculadoraClasscaContainer);
};

caloriaBtn.onclick = function () {
  containerCalcudoras.innerHTML = "";
  containerCalcudoras.appendChild(calculadoraCaloriasContainer);
};

imcBtn.onclick = function () {
  containerCalcudoras.innerHTML = "";
  containerCalcudoras.appendChild(calculadoraImcContainer);
};

document.body.append(headerContainer, containerCalcudoras);
