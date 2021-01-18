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

const introducao = document.createElement("p");
introducao.id = "p__introducao";
introducao.textContent = `Olá 👋! Bem vindo a calculadora-x,
 com ela você consegue fazer os mais diversos cálculos sem precisar "caçar" no google por formulas mágicas 😀!
 Então não perca tempo e começe a utilizar aogra memso`;

const imgIntro = document.createElement("img");
imgIntro.src = "https://media1.giphy.com/media/QytRJAvwnaU7rvvjxC/giphy.gif"
imgIntro.id = "img_introducao";

introducao.appendChild(imgIntro)

function removeIntro() {
  introducao.remove();
}

classicBtn.onclick = function () {
  removeIntro();
  containerCalcudoras.innerHTML = "";
  containerCalcudoras.appendChild(calculadoraClasscaContainer);
};

caloriaBtn.onclick = function () {
  removeIntro();
  containerCalcudoras.innerHTML = "";
  containerCalcudoras.appendChild(calculadoraCaloriasContainer);
};

imcBtn.onclick = function () {
  removeIntro();
  containerCalcudoras.innerHTML = "";
  containerCalcudoras.appendChild(calculadoraImcContainer);
};

document.body.append(headerContainer, introducao, containerCalcudoras);
