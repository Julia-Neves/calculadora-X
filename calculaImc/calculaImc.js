function create(){
   let form = document.createElement('form');
   let peso = document.createElement('input');
   let altura = document.createElement('input');
   let butto = document.createElement('input');
    let labelpeso = document.createElement('label');
    let labelAlt = document.createElement('label');
    let div = document.createElement("div");

    div.setAttribute("id","divForm");
    labelpeso.setAttribute('for', 'peso');
    labelAlt.setAttribute('for','alt');
    labelAlt.setAttribute("id","labelAlt");
    labelAlt.textContent = "Altura: ";
    labelpeso.textContent = "Peso: ";

   form.setAttribute('id','form');
   peso.setAttribute('id','peso');
   altura.setAttribute('id','alt');
   butto.setAttribute('id','but');
   butto.setAttribute('type','button')
   butto.setAttribute('value','Calcular')

   div.appendChild(form);
   form.appendChild(labelpeso);
   form.appendChild(peso);
   form.appendChild(labelAlt);
   form.appendChild(altura);
   form.appendChild(butto);
   document.body.appendChild(div)
}
create();

function createImage(endereco){
   let div = document.createElement("div");
   let image = document.createElement("img");

   div.setAttribute("id","divImage");
   image.setAttribute("id","image");
   image.setAttribute("src", endereco);
   
   div.appendChild(image);
   document.body.appendChild(div);
}
   let botao = document.getElementById("but");
   botao.addEventListener("click", function(){
      let peso = document.getElementById("peso").value;
      let altura = document.getElementById("alt").value;
         let calc ={
            calculo: peso / (altura * altura),
         }
         let result = document.createElement("p");
         result.setAttribute("id","result");
        
         result.textContent = `Seu Imc é igual á: ${Math.round(calc.calculo)}`;

         document.body.appendChild(result);
         createImage("http://www.laboranalise.com.br/wp-content/uploads/2016/02/tabela-imc-768x661.png");
        
   })
   
