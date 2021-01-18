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



  const valorDeProteina = protInput.value;
  console.log(valorDeProteina);

  const valorCarb = carbInput.value;
  console.log(valorCarb);

  const valorFat = fatInput.value;
  console.log(valorFat);

  // Fazendo o calculo das calorias//
  const totalCalorias = valorCarb * 4 + valorDeProteina * 4 + valorFat * 9;


 //demostração de como 'colocar' um valor na tag p//
  resposta.textContent = `Total de calorias ${totalCalorias}kcal`;
};

const inputs = {
  carb: carbInput,
  prot: protInput,
  fat: fatInput,
};

const container = document.createElement("div");
container.id = "div__container__calorias";

function calculadoraCaloriasFactorie(){
  const calculadora = {
    container,
    content: [carbInput, protInput, fatInput, resposta, button]
  }
  //Faz o append de todo o conteudo do 'calculadora.content' no elemento container
  //usando o 'spread operator' que são esses três pontinhos '...'
  calculadora.container.append(...calculadora.content)

  return calculadora.container
}
