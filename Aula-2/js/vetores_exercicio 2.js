console.log("Deu certo exercicio 2");

document.write("Que legal ")
document.write(" <br>criar vetores de numeros e solicitar do usuario uma quatidade de numeros")
document.write("<br>conforme a quatidade repetir a captura numero a numero até acabar o laço")
document.write("<br>depois que o laço acabar, percorrer a lista para determinar qual maior numero e menor")

let numeros = []
let quantidade
let numero
quantidade = Number(prompt("Informe quantos deseja capaturar"))

for (let contador = 1; contador <= quantidade; contador++) {
    numero = Number(prompt("informe o " + contador + " numero"))
    numeros.push(numero)
}
console.log(numeros);

let menor
let maior

for (let contador = 0; contador < numeros.length; contador++) {

    if (contador == 1) {
        menor = numeros[contador]
        maior = numeros[contador]
    } else {

        if (numeros[contador] < menor) {
            menor = numeros[contador]
        }
        if (numeros[contador] > maior) {
            maior = numeros[contador]
        }
    }
}

document.write("<br> O menor numero é "+menor)
document.write ("<br> O maior numero é "+maior)