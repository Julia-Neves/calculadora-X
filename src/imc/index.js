function calculadoraImcFactorie() {
  let form = document.createElement("form");
  let peso = document.createElement("input");
  let altura = document.createElement("input");
  let butto = document.createElement("input");
  let labelpeso = document.createElement("label");
  let labelAlt = document.createElement("label");
  let div = document.createElement("div");

  div.setAttribute("id", "divForm");
  labelpeso.setAttribute("for", "peso");
  labelAlt.setAttribute("for", "alt");
  labelAlt.setAttribute("id", "labelAlt");
  labelAlt.textContent = "Altura: ";
  labelpeso.textContent = "Peso: ";

  form.setAttribute("id", "form");
  peso.setAttribute("id", "peso");
  altura.setAttribute("id", "alt");
  butto.setAttribute("id", "but");
  butto.setAttribute("type", "button");
  butto.setAttribute("value", "Calcular");

  div.appendChild(form);
  form.appendChild(labelpeso);
  form.appendChild(peso);
  form.appendChild(labelAlt);
  form.appendChild(altura);
  form.appendChild(butto);

  butto.addEventListener("click", function () {
     //verificar se o elemento resulte existe para garantir um unico resultado
    const resultAlreadyExistis = document.getElementById("result");
    if (resultAlreadyExistis) {
      resultAlreadyExistis.remove();
    }

    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("alt").value;
    let calc = {
      calculo: peso / (altura * altura),
    };

    if (peso == '' || altura ==''){
      alert("Os campos devem ser preenchidos ");
      return;
    }
    let result = document.createElement("p");
    result.setAttribute("id", "result");
    result.textContent = `Seu Imc é igual á: ${Math.round(calc.calculo)}`;
    form.appendChild(result);
  });

  const calculadora = {
    container: div
  };

  return calculadora.container;
}
