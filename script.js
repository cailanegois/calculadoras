//script calculadora simples
const form = document.querySelector("#formCalcular")
let input1 = document.querySelector('#inputV1')
let input2 = document.querySelector('#inputV2')
const btnSomar = document.querySelector('#btnSomar')
const btnSubtrair = document.querySelector('#btnSubtrair')
const btnMultiplicar = document.querySelector('#btnMultiplicar')
const btnDividir = document.querySelector('#btnDividir')
const resultado = document.querySelector('#resultado')

//criação do elemento filho fora do btn para na ação acontecer somente a atribuição do valor 

let resultadoCalc = document.createElement('p')
resultado.appendChild(resultadoCalc)


btnSomar.addEventListener('click', Somar = (e) => {
    e.preventDefault()

    const soma = Number(input1.value) + Number(input2.value)
    resultadoCalc.innerHTML = `Somando  =  ${soma}`

})

btnSubtrair.addEventListener('click', Subtrair = (e) => {
    e.preventDefault()
    const subtracao = Number(input1.value) - Number(input2.value)

    resultadoCalc.innerHTML = `Subtraindo = ${subtracao}`

})


btnDividir.addEventListener('click', Dividir = (e) => {
    e.preventDefault()

    const divisao = (Number(input1.value) / Number(input2.value)).toFixed(2)
    resultadoCalc.innerHTML = `Dividindo = ${divisao}`

})



btnMultiplicar.addEventListener('click', Multiplicar = (e) => {
    e.preventDefault()
    const multiplicacao = Number(input1.value) * Number(input2.value)
    resultadoCalc.innerHTML = `Multiplicando = ${multiplicacao}`

})


LimparInput = (e) => {
    
    const input = document.querySelectorAll('input')
    input.values = ""
}







