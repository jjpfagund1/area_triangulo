let resposta = document.getElementById("resposta")

function calcular(){
    let base = Number(document.getElementById("base").value)
    let altura = Number(document.getElementById("altura").value)

    let area = (base * altura) / 2

    resposta.innerHTML = "A área do triângulo é igual a " + area + "m2"
}