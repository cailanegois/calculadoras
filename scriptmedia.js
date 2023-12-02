const btnCalcularMedia = document.querySelector('#btnMedia')

btnCalcularMedia.addEventListener('click', calcularMedia = (e) => {
    
    e.preventDefault()

    const nota1 = Number(document.querySelector("#nota1").value)
    const nota2 = Number(document.querySelector("#nota2").value)
    const nota3 = Number(document.querySelector("#nota3").value)
    const nota4 = Number(document.querySelector("#nota4").value)

    const resultadoFinal = document.querySelector('#resultadoFinal')

 
    let media = (nota1 + nota2 + nota3 + nota4) / 4
    
    let mensagem = " "

    if (media > 0 && media <= 5) {

        mensagem = `Sua média é ${media}, infelizmente esse resultado é inferior a media para aprovação.`

    } else if (media === 6) {

        mensagem = `Sua média é ${media}, parabéns pelo resultado. Se dedique, você está no caminho certo!`

    } else  if (media > 6 && media > 8) {

        mensagem = `Sua média é ${media}, parabéns pelo resultado.`

    } else if (media > 8) {

        mensagem = `Sua média é ${media}, parabéns pelo resultado. Que notão!!!`

    } else {
      alert(`Digite suas notas!`)
    } 
    
   
    const resultado = document.createElement('p')
    resultadoFinal.appendChild(resultado)
    resultado.innerText = mensagem

})

