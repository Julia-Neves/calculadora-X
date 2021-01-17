function mostraCalculadora() {

    let calculadora = document.getElementById("espaco")

    calculadora.innerHTML = `
    <div id="visor">
    <p id="input"></p>
    <div id="container">
    <div class="box" id="box7" onclick="clicouNoQuadrado(7)">7</div>
    <div class="box" id="box8" onclick="clicouNoQuadrado(8)">8</div>
    <div class="box" id="box9" onclick="clicouNoQuadrado(9)">9</div>
    <div class="box" id="box11" onclick="clicouNoQuadrado('+')">+</div>
    <div class="box" id="box4" onclick="clicouNoQuadrado(4)">4</div>
    <div class="box" id="box5" onclick="clicouNoQuadrado(5)">5</div>
    <div class="box" id="box6" onclick="clicouNoQuadrado(6)">6</div>
    <div class="box" id="box11" onclick="clicouNoQuadrado('-')">-</div>
    <div class="box" id="box1" onclick="clicouNoQuadrado(1)">1</div>
    <div class="box" id="box2" onclick="clicouNoQuadrado(2)">2</div>
    <div class="box" id="box3" onclick="clicouNoQuadrado(3)">3</div>
    <div class="box" id="box11" onclick="clicouNoQuadrado('x')">x</div>
    <div class="box" id="box0" onclick="clicouNoQuadrado(0)">0</div>
    <div class="box" id="box10" onclick="clicouNoQuadrado(',')">,</div>
    <div class="box" id="box11" onclick="clicouNoQuadrado('=')">=</div>
    <div class="box" id="box11" onclick="clicouNoQuadrado('/')"> /</div>

    </div>

    `
}

mostraCalculadora()

let num = ""
let operacao;
let num1;
let num2;

function clicouNoQuadrado(caracter) {
    var input = document.getElementById("input")
    mostraVisor(caracter)



    if (caracter == "=") {
        for (let i = 0; i < num.length; i++) {
            if (num[i] == "x" || num[i] == "/" || num[i] == "-" || num[i] == "+") {
                operacao = num[i]
                let operandos = num.split(num[i])
                num1 = parseInt(operandos[0])
                num2 = parseInt(operandos[1])

                var resulCalc = facaCalculo(num1, operacao, num2)



            }
        }

        mostraVisor(resulCalc)

    }


}


function mostraVisor(caracter) {
    num += caracter
    input.textContent = num
}

function facaCalculo(num1, operacao, num2) {
    let result;
    if (operacao == '+') {
        result = num1 + num2

        return result

    } else if (operacao == '-') {
        result = num1 - num2
        return result

    } else if (operacao == 'x') {
        result = num1 * num2
        return result

    } else if (operacao == '/') {
        result = num1 / num2

        return result
    }
}