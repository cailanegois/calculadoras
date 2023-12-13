//script calculadora simples
const form = document.querySelector("#formCalcular")
let input1 = document.querySelector('#inputV1')
let input2 = document.querySelector('#inputV2')
const btnSomar = document.querySelector('#btnSomar')
const btnSubtrair = document.querySelector('#btnSubtrair')
const btnMultiplicar = document.querySelector('#btnMultiplicar')
const btnDividir = document.querySelector('#btnDividir')
const resultado = document.querySelector('#resultado')



btnSomar.addEventListener('click', Somar = (e) => {
    e.preventDefault()

    const soma = Number(input1.value) + Number(input2.value)

    console.log(soma)

    let resultadoCalc = document.createElement('p')
    resultado.appendChild(resultadoCalc)
    resultadoCalc.innerHTML = `Somando  =  ${soma}`


})

btnSubtrair.addEventListener('click', Subtrair = (e) => {
    e.preventDefault()
    const subtracao = Number(input1.value) - Number(input2.value)

    let resultadoCalc = document.createElement('p')
    resultado.appendChild(resultadoCalc)
    resultadoCalc.innerHTML = `Subtraindo = ${subtracao}`

})


btnDividir.addEventListener('click', Dividir = (e) => {
    e.preventDefault()

    const divisao = (Number(input1.value) / Number(input2.value)).toFixed(2)

    let resultadoCalc = document.createElement('p')
    resultado.appendChild(resultadoCalc)
    resultadoCalc.innerHTML = `Dividindo = ${divisao}`

})




btnMultiplicar.addEventListener('click', Multiplicar = (e) => {
    e.preventDefault()
    const multiplicacao = Number(input1.value) * Number(input2.value)

    let resultadoCalc = document.createElement('p')
    resultado.appendChild(resultadoCalc)
    resultadoCalc.innerHTML = `Multiplicando = ${multiplicacao}`

})


LimparInput = (e) => {
    
    const input = document.querySelectorAll('input')
    input.values = ""
}



//ajustar o foco dos inputs + aparecer somente um resultado por vez
//condicional para alertar - digite um numero
//mudar o ponto por virgula




