const carbInput = document.createElement("input");
carbInput.id = "input__carboidrato";
carbInput.type = "number";
carbInput.placeholder = "Carboidrato";

const protInput = document.createElement("input");
protInput.id = "input__proteina";
protInput.type = "number";
protInput.placeholder = "Proteína";

const fatInput = document.createElement("input");
fatInput.id = "input__gordura";
fatInput.type = "number";
fatInput.placeholder = "Gordura";

const resposta = document.createElement("p");
resposta.id = "p__calculo__das__calorias";

const button = document.createElement("button");
button.id = "button__calcula__calorias";
button.textContent = "Calcular!";
button.onclick = function () {
  //Calculo das calorias
  // 1 x Carboidrato = 4 calorias
  // 1 x Proteína = 4 calorias
  // 1 x Gordura = 9 calorias

  //Pegar o valor de cada um dos input's
  // Exibir o valor do resultado na tag p de resposta

  //demostração de como pegar o valor do input
  const valorDeProteina = protInput.value;
  console.log(valorDeProteina);

  //demostração de como 'colocar' um valor na tag p
  resposta.textContent = `Total de calorias ${500}kcal`;
};

const inputs = {
  carb: carbInput,
  prot: protInput,
  fat: fatInput,
};

const container = document.createElement("div");
container.id = "div__container__calorias";

container.append(...Object.values(inputs), resposta, button);

document.body.append(container);
