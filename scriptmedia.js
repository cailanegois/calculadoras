
const btnCalcularMedia = document.querySelector('#btnMedia')

btnCalcularMedia.addEventListener('click', calcularMedia = (e) => {

    const nota1 = parseFloat(document.querySelector("#nota1").value)
    const nota2 = parseFloat(document.querySelector("#nota2").value)
    const nota3 = parseFloat(document.querySelector("#nota3").value)
    const nota4 = parseFloat(document.querySelector("#nota4").value)
    const resultadoFinal = document.querySelector('#resultadoFinal')
    e.preventDefault()

    let media = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(2)

    console.log(media)
    console.log(nota1)
    let mensagem = " "

    if (media <= 5) {
        mensagem = `Sua média é ${media}, infelizmente esse resultado é inferior a media para aprovação.`
    } else if (media <= 6) {
        mensagem = `Sua média é ${media}, parabéns pelo resultado. Se dedique, você está no caminho certo!`
    } else  if (media >= 8) {
        mensagem = `Sua média é ${media}, parabéns pelo resultado. Que notão!!!`
    } else {
        alert(`Digite suas notas!`)
    }

    const resultado = document.createElement('p')
    resultadoFinal.appendChild(resultado)
    resultado.innerHTML = mensagem

})


