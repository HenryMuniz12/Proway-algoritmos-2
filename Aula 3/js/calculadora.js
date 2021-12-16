


function capturarNumeros(acao) {

    let nA = promptNumero("Informe o primerio numero")
    let nB = promptNumero("informe o segundo numero")

    //escolher em switch as operações 

    switch (acao) {

        case "somar":
            somar(nA, nB)
            break
        case "subtrair":
            subtrair(nA, nB)
            break
        case "divisão":
            divisão(nA, nB)
            break
        case "multiplicação":
            multiplicação(nA, nB)
            break

        default:
            console.log("Fazer nada pq não tem uma opção certa aqui ");
            break


    }

}


function promptNumero(frase) {
    let temporario = Number(prompt(frase))
    return temporario

}

function somar(numeroA, numeroB) {
    alert(numeroA + numeroB)

}

function subtrair(numeroA, numeroB) {
    alert(numeroA - numeroB)

}


function divisão(numeroA, numeroB) {
    alert(numeroA / numeroB)

}

function multiplicação(numeroA, numeroB) {
    alert(numeroA * numeroB)

}


