/*
criar variaveis para o nome do aluno, as 3 notas e calcular a media

//podem usar 3 variavies para as notas ou usar repeticao para quatidade de notas
*/

let nome = "Henry"

// let nota1 = Number(prompt("informe a 1 nota do aluno " + nome))
// let nota2 = Number(prompt("informe a 2 nota do aluno " + nome))
// let nota3 = Number(prompt("informe a 3 nota do aluno " + nome))

// let media = (nota1 + nota2 + nota3) / 3

let qtdNotas 
let nota
let soma

qtdNotas = Number(prompt("Informe quantas notas deseja capturar"))

//variavel temporaria com ponto de partida
//condição de permanencia
//incremento ou decremento 

soma = 0
for (let contador = 1; contador <= qtdNotas; contador++) {

    nota = Number(prompt("Informe a " +contador+ " nota do aluno " + nome))
    soma += nota
}

let media = (soma) / qtdNotas


alert("media é " + media);

if (media < 7) {
    alert("Reprovado");
} else {
    alert("Aprovado");
}




