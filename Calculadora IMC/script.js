    /*Variáveis*/

const Peso = document.getElementById('peso')
const Altura = document.getElementById('altura')
const Botao = document.getElementById('btn_calcular')

const resultado = document.querySelector(".resultado")
const classificacao = document.querySelector(".classificação")

    /*Função para calcular o IMC*/
Botao.addEventListener("click", function () {

    const valorPeso = Number(Peso.value)
    const valorAltura = Number(Altura.value)


    const IMC = valorPeso / (valorAltura * valorAltura);

    /*Função para mostrar e classificar o IMC*/

    resultado.textContent = 'IMC: ' + IMC.toFixed(2);

    if (IMC < 18.5) {
        classificacao.textContent = "Falta de Peso"

    } else if (IMC < 25) {
        classificacao.textContent = "Normal"

    } else if (IMC < 30) {
        classificacao.textContent = "Obesidade Grau I"

    } else if (IMC < 40) {
        classificacao.textContent = "Obesidade Grau II"

    } else {
        classificacao.textContent = "Obesidade Grau III"
    }
})
